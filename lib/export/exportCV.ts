/**
 * @fileoverview CV Export Module
 * @description Provides export functionality for CVs in multiple formats.
 * Supports PDF, DOCX, JSON, and TXT exports with template styling.
 * Uses jsPDF for PDF generation and docx library for Word documents.
 * 
 * @exports exportToPDF - Export CV to styled PDF document
 * @exports exportToDOCX - Export CV to Word document
 * @exports exportToJSON - Export CV(s) to JSON file
 * @exports exportToTXT - Export CV to plain text file
 */

import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from "docx";
import { saveAs } from "file-saver";
import type { ParsedCV, TemplateType } from "@/types/cv";

/**
 * Template style configuration
 * @typedef {Object} TemplateStyle
 * @property {string} headerBg - Header background color (hex)
 * @property {string} accent - Accent color for headings and highlights (hex)
 * @property {string} headerText - Header text color (hex)
 * @property {string} bodyBg - Body background color (hex)
 * @property {string} bodyText - Main body text color (hex)
 * @property {string} bodyTextSecondary - Secondary text color (hex)
 */
interface TemplateStyle {
  headerBg: string;
  accent: string;
  headerText: string;
  bodyBg: string;
  bodyText: string;
  bodyTextSecondary: string;
}

/**
 * Available template styles for CV export
 * Each template provides a unique color scheme
 */
const templateStyles: Record<TemplateType, TemplateStyle> = {
  "modern-dark": { headerBg: "#1a1a2e", accent: "#d4af37", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
  "classic-light": { headerBg: "#f5f5f5", accent: "#2c3e50", headerText: "#1a1a1a", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
  "executive": { headerBg: "#0a192f", accent: "#64ffda", headerText: "#ffffff", bodyBg: "#f8f9fa", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
  "minimal": { headerBg: "#ffffff", accent: "#000000", headerText: "#1a1a1a", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
  "creative": { headerBg: "#667eea", accent: "#9b59b6", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
  "professional": { headerBg: "#2d3436", accent: "#74b9ff", headerText: "#ffffff", bodyBg: "#ffffff", bodyText: "#1a1a1a", bodyTextSecondary: "#4a4a4a" },
};

/**
 * Convert hex color to RGB values
 * @internal
 * @param {string} hex - Hex color code
 * @returns {{r: number, g: number, b: number}} RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Export CV to styled PDF document
 * Generates a professional PDF with template-based styling
 * 
 * @param {ParsedCV} cv - Parsed CV data to export
 * @param {string} filename - Output filename (should end in .pdf)
 * @param {TemplateType} template - Template style to apply (default: "modern-dark")
 * @returns {Promise<void>} Resolves when download is triggered
 * 
 * @example
 * await exportToPDF(cv, "john_doe_resume.pdf", "executive");
 */
export async function exportToPDF(cv: ParsedCV, filename: string, template: TemplateType = "modern-dark"): Promise<void> {
  const style = templateStyles[template];
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 20;
  const marginRight = 20;
  const maxWidth = pageWidth - marginLeft - marginRight;
  const lineHeight = 6;
  let y = 0;

  const headerBg = hexToRgb(style.headerBg);
  const headerText = hexToRgb(style.headerText);
  const accent = hexToRgb(style.accent);
  const bodyText = hexToRgb(style.bodyText);
  const bodyTextSecondary = hexToRgb(style.bodyTextSecondary);

  doc.setFillColor(headerBg.r, headerBg.g, headerBg.b);
  doc.rect(0, 0, pageWidth, 55, "F");

  y = 18;
  doc.setTextColor(headerText.r, headerText.g, headerText.b);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(cv.name || "Name", marginLeft, y);

  if (cv.title) {
    y += 10;
    doc.setTextColor(accent.r, accent.g, accent.b);
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(cv.title, marginLeft, y);
  }

  y += 10;
  doc.setTextColor(headerText.r, headerText.g, headerText.b);
  doc.setFontSize(9);
  const contactParts: string[] = [];
  if (cv.email) contactParts.push(cv.email);
  if (cv.phone) contactParts.push(cv.phone);
  if (cv.location) contactParts.push(cv.location);
  if (contactParts.length > 0) {
    doc.text(contactParts.join("  |  "), marginLeft, y);
    y += 6;
  }

  const linkParts: string[] = [];
  if (cv.linkedin) linkParts.push(cv.linkedin);
  if (cv.github) linkParts.push(cv.github);
  if (cv.website) linkParts.push(cv.website);
  if (linkParts.length > 0) {
    doc.text(linkParts.join("  |  "), marginLeft, y);
  }

  y = 65;

  const addSection = (title: string) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 20;
    }
    y += 8;
    doc.setTextColor(accent.r, accent.g, accent.b);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, marginLeft, y);
    doc.setDrawColor(accent.r, accent.g, accent.b);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, y + 2, marginLeft + 40, y + 2);
    y += 8;
  };

  const addText = (text: string, size: number = 10, bold: boolean = false, secondary: boolean = false) => {
    if (secondary) {
      doc.setTextColor(bodyTextSecondary.r, bodyTextSecondary.g, bodyTextSecondary.b);
    } else {
      doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
    }
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      if (y > pageHeight - 15) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, marginLeft, y);
      y += lineHeight;
    }
  };

  if (cv.summary) {
    addSection("Summary");
    addText(cv.summary, 10, false, true);
  }

  if (cv.experience && cv.experience.length > 0) {
    addSection("Experience");
    for (const exp of cv.experience) {
      addText(exp.role, 11, true);
      addText(`${exp.company}${exp.duration ? ` | ${exp.duration}` : ""}`, 9, false, true);
      if (exp.description) {
        y += 2;
        addText(exp.description, 10);
      }
      y += 4;
    }
  }

  if (cv.education && cv.education.length > 0) {
    addSection("Education");
    for (const edu of cv.education) {
      addText(edu.degree, 11, true);
      addText(`${edu.institution}${edu.year ? ` (${edu.year})` : ""}`, 9, false, true);
      y += 3;
    }
  }

  if (cv.certifications && cv.certifications.length > 0) {
    addSection("Certifications");
    for (const cert of cv.certifications) {
      const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
      doc.setFillColor(accent.r, accent.g, accent.b);
      doc.circle(marginLeft + 2, y - 2, 1.5, "F");
      doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
      doc.setFontSize(10);
      doc.text(`${certText}${cert.year ? ` (${cert.year})` : ""}`, marginLeft + 8, y);
      y += lineHeight;
    }
  }

  if (cv.skills && cv.skills.length > 0) {
    addSection("Skills");
    let skillX = marginLeft;
    const skillY = y;
    const chipPadding = 4;
    const chipHeight = 7;
    const chipSpacing = 3;
    let currentY = skillY;

    for (const skill of cv.skills) {
      const textWidth = doc.getTextWidth(skill);
      const chipWidth = textWidth + chipPadding * 2;

      if (skillX + chipWidth > pageWidth - marginRight) {
        skillX = marginLeft;
        currentY += chipHeight + chipSpacing;
      }

      if (currentY > pageHeight - 15) {
        doc.addPage();
        currentY = 20;
        skillX = marginLeft;
      }

      doc.setFillColor(accent.r, accent.g, accent.b);
      doc.roundedRect(skillX, currentY - 5, chipWidth, chipHeight, 2, 2, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.text(skill, skillX + chipPadding, currentY);

      skillX += chipWidth + chipSpacing;
    }
    y = currentY + chipHeight + 5;
  }

  doc.save(filename);
}

/**
 * Export CV to Word document (DOCX)
 * Generates a professional Word document with template-based styling
 * 
 * @param {ParsedCV} cv - Parsed CV data to export
 * @param {string} filename - Output filename (should end in .docx)
 * @param {TemplateType} template - Template style to apply (default: "modern-dark")
 * @returns {Promise<void>} Resolves when download is triggered
 * 
 * @example
 * await exportToDOCX(cv, "john_doe_resume.docx", "professional");
 */
export async function exportToDOCX(cv: ParsedCV, filename: string, template: TemplateType = "modern-dark"): Promise<void> {
  const style = templateStyles[template];
  const children: Paragraph[] = [];

  const accentHex = style.accent.replace("#", "");
  const bodyTextHex = style.bodyText.replace("#", "");
  const bodyTextSecondaryHex = style.bodyTextSecondary.replace("#", "");

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: cv.name || "Name",
          bold: true,
          size: 48,
          color: accentHex,
        }),
      ],
      spacing: { after: 100 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 12, color: accentHex },
      },
    })
  );

  if (cv.title) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: cv.title,
            size: 28,
            color: bodyTextSecondaryHex,
            italics: true,
          }),
        ],
        spacing: { after: 200 },
      })
    );
  }

  const contactParts: string[] = [];
  if (cv.email) contactParts.push(cv.email);
  if (cv.phone) contactParts.push(cv.phone);
  if (cv.location) contactParts.push(cv.location);
  if (contactParts.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: contactParts.join("  |  "), size: 20, color: bodyTextHex })],
        spacing: { after: 100 },
      })
    );
  }

  const linkParts: string[] = [];
  if (cv.linkedin) linkParts.push(cv.linkedin);
  if (cv.github) linkParts.push(cv.github);
  if (cv.website) linkParts.push(cv.website);
  if (linkParts.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: linkParts.join("  |  "), size: 18, color: bodyTextSecondaryHex })],
        spacing: { after: 300 },
      })
    );
  }

  const addSectionHeader = (title: string) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: title.toUpperCase(),
            bold: true,
            size: 26,
            color: accentHex,
          }),
        ],
        spacing: { before: 400, after: 150 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 6, color: accentHex },
        },
      })
    );
  };

  if (cv.summary) {
    addSectionHeader("Summary");
    children.push(
      new Paragraph({
        children: [new TextRun({ text: cv.summary, size: 22, color: bodyTextSecondaryHex })],
        spacing: { after: 200 },
      })
    );
  }

  if (cv.experience && cv.experience.length > 0) {
    addSectionHeader("Experience");
    for (const exp of cv.experience) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: exp.role, bold: true, size: 24, color: bodyTextHex })],
          spacing: { before: 150 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${exp.company}${exp.duration ? ` | ${exp.duration}` : ""}`,
              size: 20,
              color: bodyTextSecondaryHex,
              italics: true,
            }),
          ],
          spacing: { after: 50 },
        })
      );
      if (exp.description) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: exp.description, size: 22, color: bodyTextHex })],
            spacing: { after: 150 },
          })
        );
      }
    }
  }

  if (cv.education && cv.education.length > 0) {
    addSectionHeader("Education");
    for (const edu of cv.education) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: edu.degree, bold: true, size: 24, color: bodyTextHex })],
          spacing: { before: 100 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${edu.institution}${edu.year ? ` (${edu.year})` : ""}`,
              size: 20,
              color: bodyTextSecondaryHex,
            }),
          ],
          spacing: { after: 100 },
        })
      );
    }
  }

  if (cv.certifications && cv.certifications.length > 0) {
    addSectionHeader("Certifications");
    for (const cert of cv.certifications) {
      const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: "\u2022 ", size: 22, color: accentHex }),
            new TextRun({
              text: `${certText}${cert.year ? ` (${cert.year})` : ""}`,
              size: 22,
              color: bodyTextHex,
            }),
          ],
          spacing: { after: 50 },
        })
      );
    }
  }

  if (cv.skills && cv.skills.length > 0) {
    addSectionHeader("Skills");
    children.push(
      new Paragraph({
        children: cv.skills.map((skill, i) => [
          new TextRun({
            text: skill,
            size: 22,
            color: accentHex,
            bold: true,
          }),
          ...(i < cv.skills.length - 1
            ? [new TextRun({ text: "  •  ", size: 22, color: bodyTextSecondaryHex })]
            : []),
        ]).flat(),
        spacing: { after: 200 },
      })
    );
  }

  const docx = new Document({
    sections: [{ children }],
  });

  const blob = await Packer.toBlob(docx);
  saveAs(blob, filename);
}

/**
 * Export CV(s) to JSON file
 * Useful for data backup or transfer
 * 
 * @param {Array<{fileName: string, cv: ParsedCV | undefined}>} cvs - Array of CV data with filenames
 * @param {string} filename - Output filename (should end in .json)
 * 
 * @example
 * exportToJSON([{ fileName: "resume.pdf", cv: parsedCv }], "cvs_backup.json");
 */
export function exportToJSON(cvs: Array<{ fileName: string; cv: ParsedCV | undefined }>, filename: string): void {
  const blob = new Blob([JSON.stringify(cvs, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Export CV to plain text file
 * Simple text format for universal compatibility
 * 
 * @param {ParsedCV} cv - Parsed CV data to export
 * @param {string} filename - Output filename (should end in .txt)
 * 
 * @example
 * exportToTXT(cv, "john_doe_resume.txt");
 */
export function exportToTXT(cv: ParsedCV, filename: string): void {
  const lines: string[] = [];

  lines.push(cv.name || "Name");
  if (cv.title) lines.push(cv.title);
  lines.push("");

  const contactParts: string[] = [];
  if (cv.email) contactParts.push(cv.email);
  if (cv.phone) contactParts.push(cv.phone);
  if (cv.location) contactParts.push(cv.location);
  if (contactParts.length > 0) lines.push(contactParts.join(" | "));

  const linkParts: string[] = [];
  if (cv.linkedin) linkParts.push(cv.linkedin);
  if (cv.github) linkParts.push(cv.github);
  if (cv.website) linkParts.push(cv.website);
  if (linkParts.length > 0) lines.push(linkParts.join(" | "));

  if (cv.summary) {
    lines.push("");
    lines.push("=== SUMMARY ===");
    lines.push(cv.summary);
  }

  if (cv.experience && cv.experience.length > 0) {
    lines.push("");
    lines.push("=== EXPERIENCE ===");
    for (const exp of cv.experience) {
      lines.push(`${exp.role} at ${exp.company}`);
      if (exp.duration) lines.push(exp.duration);
      if (exp.description) lines.push(exp.description);
      lines.push("");
    }
  }

  if (cv.education && cv.education.length > 0) {
    lines.push("");
    lines.push("=== EDUCATION ===");
    for (const edu of cv.education) {
      lines.push(edu.degree);
      lines.push(`${edu.institution}${edu.year ? ` (${edu.year})` : ""}`);
      lines.push("");
    }
  }

  if (cv.certifications && cv.certifications.length > 0) {
    lines.push("");
    lines.push("=== CERTIFICATIONS ===");
    for (const cert of cv.certifications) {
      const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
      lines.push(`- ${certText}${cert.year ? ` (${cert.year})` : ""}`);
    }
  }

  if (cv.skills && cv.skills.length > 0) {
    lines.push("");
    lines.push("=== SKILLS ===");
    lines.push(cv.skills.join(", "));
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
