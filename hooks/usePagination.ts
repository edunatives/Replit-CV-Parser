"use client";

import { useMemo } from "react";
import type { ParsedCV, CVSection } from "@/types/cv";

const A4_HEIGHT_PX = 1123; // 297mm at 96dpi
const HEADER_HEIGHT_PX = 120; // Estimated header height
const PAGE_PADDING_PX = 48; // Top + bottom padding (24px each)
const BOTTOM_MARGIN_PX = 40; // Reserved space at bottom of each page
const AVAILABLE_HEIGHT = A4_HEIGHT_PX - PAGE_PADDING_PX - BOTTOM_MARGIN_PX;

interface SectionEstimate {
  section: CVSection;
  height: number;
}

interface PageContent {
  pageNumber: number;
  sections: CVSection[];
  isFirstPage: boolean;
}

function estimateSectionHeight(section: CVSection, cv: ParsedCV): number {
  const SECTION_HEADER_HEIGHT = 40;
  const ITEM_BASE_HEIGHT = 24;
  const DESCRIPTION_LINE_HEIGHT = 20;
  const CHARS_PER_LINE = 80;

  switch (section) {
    case "summary": {
      const summaryLines = Math.ceil((cv.summary?.length || 0) / CHARS_PER_LINE);
      return SECTION_HEADER_HEIGHT + (summaryLines * DESCRIPTION_LINE_HEIGHT) + 16;
    }
    case "experience": {
      let height = SECTION_HEADER_HEIGHT;
      cv.experience?.forEach(exp => {
        height += 70; // Role, company, duration, location
        const descLines = Math.ceil((exp.description?.length || 0) / CHARS_PER_LINE);
        height += descLines * DESCRIPTION_LINE_HEIGHT;
        height += 16; // Margin
      });
      return height;
    }
    case "education": {
      let height = SECTION_HEADER_HEIGHT;
      height += (cv.education?.length || 0) * (ITEM_BASE_HEIGHT * 2 + 16);
      return height;
    }
    case "skills": {
      const skillsCount = cv.skills?.length || 0;
      const rows = Math.ceil(skillsCount / 4); // ~4 chips per row
      return SECTION_HEADER_HEIGHT + (rows * 36) + 16;
    }
    case "strengths": {
      const strengthsCount = cv.strengths?.length || 0;
      const rows = Math.ceil(strengthsCount / 3);
      return SECTION_HEADER_HEIGHT + (rows * 36) + 16;
    }
    case "certifications": {
      const certsCount = cv.certifications?.length || 0;
      return SECTION_HEADER_HEIGHT + (certsCount * 50) + 16;
    }
    default:
      return 100;
  }
}

export function usePagination(cv: ParsedCV, sectionOrder: CVSection[]): PageContent[] {
  return useMemo(() => {
    const pages: PageContent[] = [];
    let currentPage: CVSection[] = [];
    let currentHeight = HEADER_HEIGHT_PX; // First page includes header
    let pageNumber = 1;

    const estimates: SectionEstimate[] = sectionOrder.map(section => ({
      section,
      height: estimateSectionHeight(section, cv),
    }));

    for (const { section, height } of estimates) {
      const availableSpace = pageNumber === 1 
        ? AVAILABLE_HEIGHT - HEADER_HEIGHT_PX 
        : AVAILABLE_HEIGHT;

      if (currentHeight + height > availableSpace && currentPage.length > 0) {
        // Push current page and start new one
        pages.push({
          pageNumber,
          sections: currentPage,
          isFirstPage: pageNumber === 1,
        });
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
      pages.push({
        pageNumber,
        sections: currentPage,
        isFirstPage: pageNumber === 1,
      });
    }

    return pages;
  }, [cv, sectionOrder]);
}

export type { PageContent };
