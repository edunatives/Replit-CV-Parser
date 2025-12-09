import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import type { ParsedCV } from "@/types/cv";

export async function exportToPDF(cv: ParsedCV, filename: string): Promise<void> {
  const doc = new jsPDF();
  let y = 20;
  const lineHeight = 7;
  const marginLeft = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - marginLeft * 2;

  const addText = (text: string, size: number = 10, bold: boolean = false) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, marginLeft, y);
      y += lineHeight;
    }
  };

  const addSection = (title: string) => {
    y += 5;
    addText(title, 14, true);
    y += 2;
  };

  addText(cv.name || "Name", 18, true);
  if (cv.title) addText(cv.title, 12);
  y += 3;

  const contactParts: string[] = [];
  if (cv.email) contactParts.push(cv.email);
  if (cv.phone) contactParts.push(cv.phone);
  if (cv.location) contactParts.push(cv.location);
  if (contactParts.length > 0) {
    addText(contactParts.join(" | "), 10);
  }

  const linkParts: string[] = [];
  if (cv.linkedin) linkParts.push(cv.linkedin);
  if (cv.github) linkParts.push(cv.github);
  if (cv.website) linkParts.push(cv.website);
  if (linkParts.length > 0) {
    addText(linkParts.join(" | "), 9);
  }

  if (cv.summary) {
    addSection("Summary");
    addText(cv.summary);
  }

  if (cv.experience && cv.experience.length > 0) {
    addSection("Experience");
    for (const exp of cv.experience) {
      addText(`${exp.role} at ${exp.company}`, 11, true);
      if (exp.duration) addText(exp.duration, 9);
      if (exp.description) addText(exp.description);
      y += 3;
    }
  }

  if (cv.education && cv.education.length > 0) {
    addSection("Education");
    for (const edu of cv.education) {
      addText(`${edu.degree}`, 11, true);
      addText(`${edu.institution}${edu.year ? ` (${edu.year})` : ""}`, 10);
      y += 2;
    }
  }

  if (cv.certifications && cv.certifications.length > 0) {
    addSection("Certifications");
    for (const cert of cv.certifications) {
      const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
      addText(`• ${certText}${cert.year ? ` (${cert.year})` : ""}`);
    }
  }

  if (cv.skills && cv.skills.length > 0) {
    addSection("Skills");
    addText(cv.skills.join(", "));
  }

  doc.save(filename);
}

export async function exportToDOCX(cv: ParsedCV, filename: string): Promise<void> {
  const children: Paragraph[] = [];

  children.push(
    new Paragraph({
      text: cv.name || "Name",
      heading: HeadingLevel.TITLE,
      spacing: { after: 100 },
    })
  );

  if (cv.title) {
    children.push(
      new Paragraph({
        text: cv.title,
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 200 },
      })
    );
  }

  const contactParts: string[] = [];
  if (cv.email) contactParts.push(cv.email);
  if (cv.phone) contactParts.push(cv.phone);
  if (cv.location) contactParts.push(cv.location);
  if (contactParts.length > 0) {
    children.push(new Paragraph({ text: contactParts.join(" | "), spacing: { after: 100 } }));
  }

  const linkParts: string[] = [];
  if (cv.linkedin) linkParts.push(cv.linkedin);
  if (cv.github) linkParts.push(cv.github);
  if (cv.website) linkParts.push(cv.website);
  if (linkParts.length > 0) {
    children.push(new Paragraph({ text: linkParts.join(" | "), spacing: { after: 200 } }));
  }

  if (cv.summary) {
    children.push(
      new Paragraph({ text: "Summary", heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 100 } })
    );
    children.push(new Paragraph({ text: cv.summary, spacing: { after: 200 } }));
  }

  if (cv.experience && cv.experience.length > 0) {
    children.push(
      new Paragraph({ text: "Experience", heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 100 } })
    );
    for (const exp of cv.experience) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: `${exp.role} at ${exp.company}`, bold: true })],
          spacing: { before: 150 },
        })
      );
      if (exp.duration) {
        children.push(new Paragraph({ text: exp.duration, spacing: { after: 50 } }));
      }
      if (exp.description) {
        children.push(new Paragraph({ text: exp.description, spacing: { after: 100 } }));
      }
    }
  }

  if (cv.education && cv.education.length > 0) {
    children.push(
      new Paragraph({ text: "Education", heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 100 } })
    );
    for (const edu of cv.education) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: edu.degree, bold: true })],
          spacing: { before: 100 },
        })
      );
      children.push(
        new Paragraph({
          text: `${edu.institution}${edu.year ? ` (${edu.year})` : ""}`,
          spacing: { after: 100 },
        })
      );
    }
  }

  if (cv.certifications && cv.certifications.length > 0) {
    children.push(
      new Paragraph({ text: "Certifications", heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 100 } })
    );
    for (const cert of cv.certifications) {
      const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
      children.push(
        new Paragraph({
          text: `• ${certText}${cert.year ? ` (${cert.year})` : ""}`,
          spacing: { after: 50 },
        })
      );
    }
  }

  if (cv.skills && cv.skills.length > 0) {
    children.push(
      new Paragraph({ text: "Skills", heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 100 } })
    );
    children.push(new Paragraph({ text: cv.skills.join(", "), spacing: { after: 200 } }));
  }

  const doc = new Document({
    sections: [{ children }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
}

export function exportToJSON(cvs: Array<{ fileName: string; cv: ParsedCV | undefined }>, filename: string): void {
  const blob = new Blob([JSON.stringify(cvs, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
