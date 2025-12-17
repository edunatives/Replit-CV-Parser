/**
 * @fileoverview CV Template Registry Module
 * @description Centralized module for all CV template styles, providing:
 * - TemplateStyle interface for type-safe template definitions
 * - Template registry with all available templates
 * - Helper functions to get template styles
 */

import type { TemplateType } from "@/types/cv";

/**
 * Template style configuration interface
 * Defines all visual properties for a CV template
 */
export interface TemplateStyle {
  id: TemplateType;
  name: string;
  description: string;
  headerBg: string;
  accent: string;
  headerText: string;
  bodyBg: string;
  bodyText: string;
  bodyTextSecondary: string;
  borderBottom: string;
  headerCentered: boolean;
  sectionHeaderVariant: "default" | "centeredLines" | "underline" | "leftBorder";
  showMetaIcons: boolean;
  companyColor: string;
  summaryBoxed?: boolean;
}

/**
 * Template registry containing all available CV templates
 */
export const templateRegistry: Record<TemplateType, TemplateStyle> = {
  "modern-dark": {
    id: "modern-dark",
    name: "Modern Dark",
    description: "Dark header with gold accents for a sophisticated look",
    headerBg: "#1a1a2e",
    accent: "#d4af37",
    headerText: "#ffffff",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "classic-light": {
    id: "classic-light",
    name: "Classic Light",
    description: "Clean and traditional with subtle gray tones",
    headerBg: "#f5f5f5",
    accent: "#2c3e50",
    headerText: "#1a1a1a",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "1px solid #e0e0e0",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "executive": {
    id: "executive",
    name: "Executive",
    description: "Navy blue with teal accents for senior professionals",
    headerBg: "#0a192f",
    accent: "#64ffda",
    headerText: "#ffffff",
    bodyBg: "#f8f9fa",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "minimal": {
    id: "minimal",
    name: "Minimal",
    description: "Clean white design with bold black accents",
    headerBg: "#ffffff",
    accent: "#000000",
    headerText: "#1a1a1a",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "2px solid #000000",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "creative": {
    id: "creative",
    name: "Creative",
    description: "Vibrant purple gradient for creative professionals",
    headerBg: "#667eea",
    accent: "#9b59b6",
    headerText: "#ffffff",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "professional": {
    id: "professional",
    name: "Professional",
    description: "Dark gray with light blue accents",
    headerBg: "#2d3436",
    accent: "#74b9ff",
    headerText: "#ffffff",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#4a4a4a",
  },
  "corporate": {
    id: "corporate",
    name: "Corporate",
    description: "Light blue header with centered layout and decorative lines",
    headerBg: "#d4e5ed",
    accent: "#1a5276",
    headerText: "#1a5276",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: true,
    sectionHeaderVariant: "centeredLines",
    showMetaIcons: false,
    companyColor: "#1a5276",
  },
  "business": {
    id: "business",
    name: "Business",
    description: "Clean professional style with blue accents and left-bordered sections",
    headerBg: "#ffffff",
    accent: "#1b4f72",
    headerText: "#1b4f72",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "leftBorder",
    showMetaIcons: true,
    companyColor: "#1b4f72",
    summaryBoxed: true,
  },
  "classic-underline": {
    id: "classic-underline",
    name: "Classic Underline",
    description: "Professional style matching industry standards with underlined section headers",
    headerBg: "#ffffff",
    accent: "#1b4f72",
    headerText: "#1b4f72",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "underline",
    showMetaIcons: true,
    companyColor: "#2874a6",
    summaryBoxed: false,
  },
  "typical": {
    id: "typical",
    name: "Typical",
    description: "Clean professional style with green accents and uppercase section headers",
    headerBg: "#ffffff",
    accent: "#1a1a1a",
    headerText: "#1a1a1a",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#22c55e",
    summaryBoxed: false,
  },
  "student-modern": {
    id: "student-modern",
    name: "Student Modern",
    description: "Modern student-focused template with dark teal header, education-first layout, and visual elements",
    headerBg: "#0f766e",
    accent: "#14b8a6",
    headerText: "#ffffff",
    bodyBg: "#ffffff",
    bodyText: "#1a1a1a",
    bodyTextSecondary: "#4a4a4a",
    borderBottom: "none",
    headerCentered: false,
    sectionHeaderVariant: "default",
    showMetaIcons: false,
    companyColor: "#14b8a6",
    summaryBoxed: false,
  },
};

/**
 * Get template style by template type
 * @param template - Template type identifier
 * @returns Template style configuration
 */
export function getTemplateStyle(template: TemplateType): TemplateStyle {
  return templateRegistry[template] || templateRegistry["modern-dark"];
}

/**
 * Get all available templates as an array
 * @returns Array of template styles
 */
export function getAllTemplates(): TemplateStyle[] {
  return Object.values(templateRegistry);
}

/**
 * Get template options for select dropdown
 * @returns Array of template options with value and label
 */
export function getTemplateOptions(): { value: TemplateType; label: string }[] {
  return getAllTemplates().map((t) => ({
    value: t.id,
    label: t.name,
  }));
}
