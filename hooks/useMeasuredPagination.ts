"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { ParsedCV, CVSection } from "@/types/cv";

const A4_HEIGHT_PX = 1123; // 297mm at 96dpi
const HEADER_HEIGHT_PX = 140; // CV header section height
const PAGE_TOP_PADDING = 24;
const PAGE_BOTTOM_PADDING = 24;
const BOTTOM_GUTTER = 32; // Extra space at bottom of each page
const PAGE_BADGE_HEIGHT = 40; // Height of "Page X" indicator

const AVAILABLE_FIRST_PAGE = A4_HEIGHT_PX - HEADER_HEIGHT_PX - PAGE_TOP_PADDING - PAGE_BOTTOM_PADDING - BOTTOM_GUTTER;
const AVAILABLE_SUBSEQUENT_PAGE = A4_HEIGHT_PX - PAGE_TOP_PADDING - PAGE_BOTTOM_PADDING - BOTTOM_GUTTER - PAGE_BADGE_HEIGHT;

interface SectionMeasurement {
  id: string;
  height: number;
}

interface PageAssignment {
  pageNumber: number;
  sections: CVSection[];
  isFirstPage: boolean;
  remainingHeight: number;
}

interface UseMeasuredPaginationResult {
  pages: PageAssignment[];
  registerRef: (sectionId: string) => (el: HTMLElement | null) => void;
  totalPages: number;
}

export function useMeasuredPagination(
  cv: ParsedCV,
  sectionOrder: CVSection[]
): UseMeasuredPaginationResult {
  const [measurements, setMeasurements] = useState<Map<string, number>>(new Map());
  const observerRef = useRef<ResizeObserver | null>(null);
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map());

  // Create ResizeObserver once
  useEffect(() => {
    observerRef.current = new ResizeObserver((entries) => {
      const updates: Array<[string, number]> = [];
      
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        const sectionId = el.dataset.sectionId;
        if (sectionId) {
          updates.push([sectionId, entry.contentRect.height]);
        }
      }
      
      if (updates.length > 0) {
        setMeasurements(prev => {
          const next = new Map(prev);
          updates.forEach(([id, height]) => next.set(id, height));
          return next;
        });
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Register refs for sections
  const registerRef = useCallback((sectionId: string) => {
    return (el: HTMLElement | null) => {
      const prevEl = elementsRef.current.get(sectionId);
      
      if (prevEl && prevEl !== el) {
        observerRef.current?.unobserve(prevEl);
      }
      
      if (el) {
        el.dataset.sectionId = sectionId;
        elementsRef.current.set(sectionId, el);
        observerRef.current?.observe(el);
      } else {
        elementsRef.current.delete(sectionId);
      }
    };
  }, []);

  // Calculate page assignments based on measurements
  const pages = calculatePages(sectionOrder, measurements, cv);
  
  return {
    pages,
    registerRef,
    totalPages: pages.length,
  };
}

function calculatePages(
  sectionOrder: CVSection[],
  measurements: Map<string, number>,
  cv: ParsedCV
): PageAssignment[] {
  const pages: PageAssignment[] = [];
  let currentPage: CVSection[] = [];
  let currentHeight = 0;
  let pageNumber = 1;

  // Add rearrange button height
  const REARRANGE_BUTTON_HEIGHT = 48;
  currentHeight += REARRANGE_BUTTON_HEIGHT;

  for (const section of sectionOrder) {
    // Get measured or estimated height
    const measuredHeight = measurements.get(section);
    const height = measuredHeight ?? estimateSectionHeight(section, cv);
    
    const availableSpace = pageNumber === 1 
      ? AVAILABLE_FIRST_PAGE 
      : AVAILABLE_SUBSEQUENT_PAGE;
    
    // Check if section fits on current page
    if (currentHeight + height > availableSpace && currentPage.length > 0) {
      // Push current page
      pages.push({
        pageNumber,
        sections: [...currentPage],
        isFirstPage: pageNumber === 1,
        remainingHeight: availableSpace - currentHeight,
      });
      
      // Start new page
      pageNumber++;
      currentPage = [section];
      currentHeight = height;
    } else {
      currentPage.push(section);
      currentHeight += height;
    }
  }

  // Push final page
  if (currentPage.length > 0) {
    const availableSpace = pageNumber === 1 
      ? AVAILABLE_FIRST_PAGE 
      : AVAILABLE_SUBSEQUENT_PAGE;
    
    pages.push({
      pageNumber,
      sections: currentPage,
      isFirstPage: pageNumber === 1,
      remainingHeight: availableSpace - currentHeight,
    });
  }

  return pages;
}

function estimateSectionHeight(section: CVSection, cv: ParsedCV): number {
  const SECTION_HEADER = 48;
  const LINE_HEIGHT = 24;
  const CHARS_PER_LINE = 70;

  switch (section) {
    case "summary": {
      const lines = Math.ceil((cv.summary?.length || 100) / CHARS_PER_LINE);
      return SECTION_HEADER + lines * LINE_HEIGHT + 24;
    }
    case "experience": {
      let height = SECTION_HEADER;
      (cv.experience || []).forEach(exp => {
        height += 80; // Headers
        const lines = Math.ceil((exp.description?.length || 0) / CHARS_PER_LINE);
        height += lines * LINE_HEIGHT + 24;
      });
      return Math.max(height, 100);
    }
    case "education": {
      return SECTION_HEADER + (cv.education?.length || 1) * 60 + 16;
    }
    case "skills": {
      const count = cv.skills?.length || 0;
      const rows = Math.ceil(count / 4);
      return SECTION_HEADER + rows * 40 + 16;
    }
    case "strengths": {
      const count = cv.strengths?.length || 0;
      const rows = Math.ceil(count / 3);
      return SECTION_HEADER + rows * 40 + 16;
    }
    case "certifications": {
      return SECTION_HEADER + (cv.certifications?.length || 0) * 56 + 16;
    }
    default:
      return 100;
  }
}

export type { PageAssignment };
