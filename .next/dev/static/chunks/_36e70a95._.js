(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/export/exportCV.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "exportToDOCX",
    ()=>exportToDOCX,
    "exportToJSON",
    ()=>exportToJSON,
    "exportToPDF",
    ()=>exportToPDF,
    "exportToTXT",
    ()=>exportToTXT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
;
;
;
/**
 * Available template styles for CV export
 * Each template provides a unique color scheme
 */ const templateStyles = {
    "modern-dark": {
        headerBg: "#1a1a2e",
        accent: "#d4af37",
        headerText: "#ffffff",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "classic-light": {
        headerBg: "#f5f5f5",
        accent: "#2c3e50",
        headerText: "#1a1a1a",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "executive": {
        headerBg: "#0a192f",
        accent: "#64ffda",
        headerText: "#ffffff",
        bodyBg: "#f8f9fa",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "minimal": {
        headerBg: "#ffffff",
        accent: "#000000",
        headerText: "#1a1a1a",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "creative": {
        headerBg: "#667eea",
        accent: "#9b59b6",
        headerText: "#ffffff",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "professional": {
        headerBg: "#2d3436",
        accent: "#74b9ff",
        headerText: "#ffffff",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "corporate": {
        headerBg: "#1e3a5f",
        accent: "#3498db",
        headerText: "#ffffff",
        bodyBg: "#f8f9fa",
        bodyText: "#2c3e50",
        bodyTextSecondary: "#5d6d7e"
    },
    "business": {
        headerBg: "#1b4f72",
        accent: "#1b4f72",
        headerText: "#ffffff",
        bodyBg: "#f8f9fa",
        bodyText: "#2c3e50",
        bodyTextSecondary: "#5d6d7e"
    },
    "classic-underline": {
        headerBg: "#ffffff",
        accent: "#1b4f72",
        headerText: "#1b4f72",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    },
    "typical": {
        headerBg: "#ffffff",
        accent: "#22c55e",
        headerText: "#1a1a1a",
        bodyBg: "#ffffff",
        bodyText: "#1a1a1a",
        bodyTextSecondary: "#4a4a4a"
    }
};
/**
 * Convert hex color to RGB values
 * @internal
 * @param {string} hex - Hex color code
 * @returns {{r: number, g: number, b: number}} RGB values
 */ function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}
async function exportToPDF(cv, filename, template = "modern-dark") {
    const baseStyle = templateStyles[template];
    // Apply CV's color scheme override if available
    const effectiveAccent = cv.colorScheme?.primary || baseStyle.accent;
    const effectiveSecondary = cv.colorScheme?.secondary || baseStyle.accent;
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginLeft = 20;
    const marginRight = 20;
    const maxWidth = pageWidth - marginLeft - marginRight;
    const lineHeight = 6;
    let y = 0;
    const headerBg = hexToRgb(baseStyle.headerBg);
    const headerText = hexToRgb(baseStyle.headerText);
    const accent = hexToRgb(effectiveAccent);
    const secondary = hexToRgb(effectiveSecondary);
    const bodyText = hexToRgb(baseStyle.bodyText);
    const bodyTextSecondary = hexToRgb(baseStyle.bodyTextSecondary);
    doc.setFillColor(headerBg.r, headerBg.g, headerBg.b);
    doc.rect(0, 0, pageWidth, 55, "F");
    y = 18;
    doc.setTextColor(headerText.r, headerText.g, headerText.b);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(cv.name || "Name", marginLeft, y);
    if (cv.title) {
        y += 8;
        doc.setTextColor(secondary.r, secondary.g, secondary.b);
        doc.setFontSize(13);
        doc.setFont("helvetica", "normal");
        doc.text(cv.title, marginLeft, y);
    }
    y += 10;
    doc.setTextColor(headerText.r, headerText.g, headerText.b);
    doc.setFontSize(9);
    const contactParts = [];
    if (cv.email) contactParts.push(cv.email);
    if (cv.phone) contactParts.push(cv.phone);
    if (cv.location) contactParts.push(cv.location);
    if (contactParts.length > 0) {
        doc.text(contactParts.join("  |  "), marginLeft, y);
        y += 6;
    }
    const linkParts = [];
    if (cv.linkedin) linkParts.push(cv.linkedin);
    if (cv.github) linkParts.push(cv.github);
    if (cv.website) linkParts.push(cv.website);
    if (linkParts.length > 0) {
        doc.text(linkParts.join("  |  "), marginLeft, y);
    }
    y = 58;
    const addSection = (title)=>{
        if (y > pageHeight - 30) {
            doc.addPage();
            y = 20;
        }
        y += 4;
        doc.setTextColor(accent.r, accent.g, accent.b);
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text(title, marginLeft, y);
        doc.setDrawColor(accent.r, accent.g, accent.b);
        doc.setLineWidth(0.5);
        doc.line(marginLeft, y + 2, marginLeft + 40, y + 2);
        y += 8;
    };
    const addText = (text, size = 10, bold = false, secondary = false)=>{
        if (secondary) {
            doc.setTextColor(bodyTextSecondary.r, bodyTextSecondary.g, bodyTextSecondary.b);
        } else {
            doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
        }
        doc.setFontSize(size);
        doc.setFont("helvetica", bold ? "bold" : "normal");
        const lines = doc.splitTextToSize(text, maxWidth);
        for (const line of lines){
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
        for (const exp of cv.experience){
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
        for (const edu of cv.education){
            addText(edu.degree, 11, true);
            addText(`${edu.institution}${edu.year ? ` (${edu.year})` : ""}`, 9, false, true);
            y += 3;
        }
    }
    if (cv.certifications && cv.certifications.length > 0) {
        addSection("Certifications");
        const certNames = cv.certifications.map((cert)=>cert.name).join(", ");
        doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const certLines = doc.splitTextToSize(certNames, maxWidth);
        for (const line of certLines){
            if (y > pageHeight - 15) {
                doc.addPage();
                y = 20;
            }
            doc.text(line, marginLeft, y);
            y += lineHeight - 1;
        }
        y += 2;
    }
    if (cv.skills && cv.skills.length > 0) {
        addSection("Core Competencies");
        const skillsText = cv.skills.join(", ");
        doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const skillLines = doc.splitTextToSize(skillsText, maxWidth);
        for (const line of skillLines){
            if (y > pageHeight - 15) {
                doc.addPage();
                y = 20;
            }
            doc.text(line, marginLeft, y);
            y += lineHeight - 1;
        }
        y += 2;
    }
    if (cv.strengths && cv.strengths.length > 0) {
        addSection("Key Strengths");
        for (const strength of cv.strengths){
            if (y > pageHeight - 15) {
                doc.addPage();
                y = 20;
            }
            doc.setTextColor(bodyText.r, bodyText.g, bodyText.b);
            doc.setFontSize(9);
            doc.setFont("helvetica", "normal");
            const strengthLines = doc.splitTextToSize(`• ${strength}`, maxWidth);
            for (const line of strengthLines){
                doc.text(line, marginLeft, y);
                y += lineHeight - 1;
            }
        }
        y += 2;
    }
    doc.save(filename);
}
async function exportToDOCX(cv, filename, template = "modern-dark") {
    const style = templateStyles[template];
    const children = [];
    // Apply CV's color scheme override if available
    const effectiveAccent = cv.colorScheme?.primary || style.accent;
    const effectiveSecondary = cv.colorScheme?.secondary || style.accent;
    const accentHex = effectiveAccent.replace("#", "");
    const secondaryHex = effectiveSecondary.replace("#", "");
    const bodyTextHex = style.bodyText.replace("#", "");
    const bodyTextSecondaryHex = style.bodyTextSecondary.replace("#", "");
    children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
        children: [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                text: cv.name || "Name",
                bold: true,
                size: 48,
                color: accentHex
            })
        ],
        spacing: {
            after: 100
        },
        border: {
            bottom: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 12,
                color: accentHex
            }
        }
    }));
    if (cv.title) {
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: cv.title,
                    size: 26,
                    color: secondaryHex
                })
            ],
            spacing: {
                after: 150
            }
        }));
    }
    const contactParts = [];
    if (cv.email) contactParts.push(cv.email);
    if (cv.phone) contactParts.push(cv.phone);
    if (cv.location) contactParts.push(cv.location);
    if (contactParts.length > 0) {
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: contactParts.join("  |  "),
                    size: 20,
                    color: bodyTextHex
                })
            ],
            spacing: {
                after: 100
            }
        }));
    }
    const linkParts = [];
    if (cv.linkedin) linkParts.push(cv.linkedin);
    if (cv.github) linkParts.push(cv.github);
    if (cv.website) linkParts.push(cv.website);
    if (linkParts.length > 0) {
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: linkParts.join("  |  "),
                    size: 18,
                    color: bodyTextSecondaryHex
                })
            ],
            spacing: {
                after: 150
            }
        }));
    }
    const addSectionHeader = (title)=>{
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 26,
                    color: accentHex
                })
            ],
            spacing: {
                before: 200,
                after: 100
            },
            border: {
                bottom: {
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                    size: 6,
                    color: accentHex
                }
            }
        }));
    };
    if (cv.summary) {
        addSectionHeader("Summary");
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: cv.summary,
                    size: 22,
                    color: bodyTextSecondaryHex
                })
            ],
            spacing: {
                after: 200
            }
        }));
    }
    if (cv.experience && cv.experience.length > 0) {
        addSectionHeader("Experience");
        for (const exp of cv.experience){
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: exp.role,
                        bold: true,
                        size: 24,
                        color: bodyTextHex
                    })
                ],
                spacing: {
                    before: 150
                }
            }));
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: `${exp.company}${exp.duration ? ` | ${exp.duration}` : ""}`,
                        size: 20,
                        color: bodyTextSecondaryHex,
                        italics: true
                    })
                ],
                spacing: {
                    after: 50
                }
            }));
            if (exp.description) {
                children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                    children: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                            text: exp.description,
                            size: 22,
                            color: bodyTextHex
                        })
                    ],
                    spacing: {
                        after: 150
                    }
                }));
            }
        }
    }
    if (cv.education && cv.education.length > 0) {
        addSectionHeader("Education");
        for (const edu of cv.education){
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: edu.degree,
                        bold: true,
                        size: 24,
                        color: bodyTextHex
                    })
                ],
                spacing: {
                    before: 100
                }
            }));
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: `${edu.institution}${edu.year ? ` (${edu.year})` : ""}`,
                        size: 20,
                        color: bodyTextSecondaryHex
                    })
                ],
                spacing: {
                    after: 100
                }
            }));
        }
    }
    if (cv.certifications && cv.certifications.length > 0) {
        addSectionHeader("Certifications");
        const certNames = cv.certifications.map((cert)=>cert.name).join(", ");
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: certNames,
                    size: 20,
                    color: bodyTextHex
                })
            ],
            spacing: {
                after: 150
            }
        }));
    }
    if (cv.skills && cv.skills.length > 0) {
        addSectionHeader("Core Competencies");
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text: cv.skills.join(", "),
                    size: 20,
                    color: bodyTextHex
                })
            ],
            spacing: {
                after: 150
            }
        }));
    }
    if (cv.strengths && cv.strengths.length > 0) {
        addSectionHeader("Key Strengths");
        for (const strength of cv.strengths){
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: "• ",
                        size: 20,
                        color: accentHex
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: strength,
                        size: 20,
                        color: bodyTextHex
                    })
                ],
                spacing: {
                    after: 50
                }
            }));
        }
    }
    const docx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                children
            }
        ]
    });
    const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Packer"].toBlob(docx);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
}
function exportToJSON(cvs, filename) {
    const blob = new Blob([
        JSON.stringify(cvs, null, 2)
    ], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
function exportToTXT(cv, filename) {
    const lines = [];
    lines.push(cv.name || "Name");
    if (cv.title) lines.push(cv.title);
    lines.push("");
    const contactParts = [];
    if (cv.email) contactParts.push(cv.email);
    if (cv.phone) contactParts.push(cv.phone);
    if (cv.location) contactParts.push(cv.location);
    if (contactParts.length > 0) lines.push(contactParts.join(" | "));
    const linkParts = [];
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
        for (const exp of cv.experience){
            lines.push(`${exp.role} at ${exp.company}`);
            if (exp.duration) lines.push(exp.duration);
            if (exp.description) lines.push(exp.description);
            lines.push("");
        }
    }
    if (cv.education && cv.education.length > 0) {
        lines.push("");
        lines.push("=== EDUCATION ===");
        for (const edu of cv.education){
            lines.push(edu.degree);
            lines.push(`${edu.institution}${edu.year ? ` (${edu.year})` : ""}`);
            lines.push("");
        }
    }
    if (cv.certifications && cv.certifications.length > 0) {
        lines.push("");
        lines.push("=== CERTIFICATIONS ===");
        for (const cert of cv.certifications){
            const certText = cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name;
            lines.push(`- ${certText}${cert.year ? ` (${cert.year})` : ""}`);
        }
    }
    if (cv.skills && cv.skills.length > 0) {
        lines.push("");
        lines.push("=== SKILLS ===");
        lines.push(cv.skills.join(", "));
    }
    if (cv.strengths && cv.strengths.length > 0) {
        lines.push("");
        lines.push("=== KEY STRENGTHS ===");
        for (const strength of cv.strengths){
            lines.push(`- ${strength}`);
        }
    }
    const blob = new Blob([
        lines.join("\n")
    ], {
        type: "text/plain"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/ai/rules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview EduNatives AI Rules & Forensic CV Engine - Merged Module
 * @version 10.0
 * @description Unified module combining:
 * - Forensic CV Engine v9.0 prompt structure (unified parse+audit)
 * - Security guidelines (injection protection, sanitization)
 * - Token control and rate limiting
 * - Retry logic with exponential backoff
 * - Response cleaning and JSON repair utilities
 * 
 * This module provides:
 * - Prompt builders for CV parsing, assessment, JD matching, and advisor
 * - Forensic audit with weighted scoring and highlight extraction
 * - Security utilities for prompt injection prevention
 * - Robust API communication patterns
 */ __turbopack_context__.s([
    "ASSESSMENT_SECTIONS",
    ()=>ASSESSMENT_SECTIONS,
    "AUDIT_WEIGHTS",
    ()=>AUDIT_WEIGHTS,
    "DANGEROUS_PATTERNS",
    ()=>DANGEROUS_PATTERNS,
    "DEVELOPER_KEYWORDS",
    ()=>DEVELOPER_KEYWORDS,
    "ForensicAuditor",
    ()=>ForensicAuditor,
    "JD_HARD_GATES",
    ()=>JD_HARD_GATES,
    "JD_MATCH_WEIGHTS",
    ()=>JD_MATCH_WEIGHTS,
    "JD_SCORING_TIERS",
    ()=>JD_SCORING_TIERS,
    "RESPONSE_GUIDELINES",
    ()=>RESPONSE_GUIDELINES,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
    "TEI_LEVELS",
    ()=>TEI_LEVELS,
    "TOKEN_LIMITS",
    ()=>TOKEN_LIMITS,
    "UPLOAD_LIMITS",
    ()=>UPLOAD_LIMITS,
    "V211_WEIGHTS",
    ()=>V211_WEIGHTS,
    "buildAdvisorPrompt",
    ()=>buildAdvisorPrompt,
    "buildAssessmentPrompt",
    ()=>buildAssessmentPrompt,
    "buildCVParsingPrompt",
    ()=>buildCVParsingPrompt,
    "buildForensicPrompt",
    ()=>buildForensicPrompt,
    "buildJDMatchPrompt",
    ()=>buildJDMatchPrompt,
    "buildV211AssessmentPrompt",
    ()=>buildV211AssessmentPrompt,
    "cleanAIResponse",
    ()=>cleanAIResponse,
    "containsInjectionAttempt",
    ()=>containsInjectionAttempt,
    "formatCVForJDMatch",
    ()=>formatCVForJDMatch,
    "formatCVSummary",
    ()=>formatCVSummary,
    "formatConversationHistory",
    ()=>formatConversationHistory,
    "getScoreLevel",
    ()=>getScoreLevel,
    "isDeveloperRole",
    ()=>isDeveloperRole,
    "parseAIResponse",
    ()=>parseAIResponse,
    "repairJSON",
    ()=>repairJSON,
    "sanitizeAIInput",
    ()=>sanitizeAIInput,
    "validateCVDocument",
    ()=>validateCVDocument
]);
const TOKEN_LIMITS = {
    maxCVTextLength: 30000,
    maxJobDescriptionLength: 10000,
    maxChatMessageLength: 2000,
    maxConversationHistory: 20,
    maxOutputTokens: {
        forensic: 4096,
        parsing: 2048,
        assessment: 1024,
        jdMatch: 1024,
        advisor: 512
    },
    rateLimit: {
        perMinute: 10,
        perHour: 100
    },
    retryConfig: {
        maxRetries: 3,
        baseDelayMs: 1000
    }
};
const DANGEROUS_PATTERNS = [
    /ignore\s+(all\s+)?previous\s+instructions?/i,
    /system\s*:/i,
    /\[\[.*?\]\]/,
    /<\/?script/i,
    /javascript:/i,
    /data:text\/html/i,
    /eval\s*\(/i,
    /exec\s*\(/i,
    /disregard\s+(all\s+)?above/i,
    /forget\s+(everything|all)/i,
    /new\s+instructions?:/i,
    /override\s+prompt/i
];
function containsInjectionAttempt(text) {
    return DANGEROUS_PATTERNS.some((pattern)=>pattern.test(text));
}
function sanitizeAIInput(text, maxLength = TOKEN_LIMITS.maxCVTextLength) {
    let sanitized = text;
    // Remove control characters except newlines and tabs
    sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
    // Normalize unicode to prevent homograph attacks
    sanitized = sanitized.normalize("NFKC");
    // Enforce length limit
    if (sanitized.length > maxLength) {
        sanitized = sanitized.substring(0, maxLength);
    }
    return sanitized;
}
const UPLOAD_LIMITS = {
    maxFileSize: 3 * 1024 * 1024,
    allowedMimeTypes: [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "text/plain"
    ],
    allowedExtensions: [
        ".pdf",
        ".docx",
        ".doc",
        ".txt"
    ]
};
const AUDIT_WEIGHTS = {
    workExperience: 30,
    summary: 20,
    education: 15,
    skills: 15,
    contactInfo: 10,
    presentation: 10
};
const SCORING_RUBRIC = {
    exceptional: {
        min: 90,
        max: 100,
        label: "Exceptional",
        description: "No improvements needed"
    },
    strong: {
        min: 80,
        max: 89,
        label: "Strong",
        description: "Minor refinements"
    },
    good: {
        min: 70,
        max: 79,
        label: "Good",
        description: "Some improvements needed"
    },
    fair: {
        min: 60,
        max: 69,
        label: "Fair",
        description: "Needs attention"
    },
    needsWork: {
        min: 0,
        max: 59,
        label: "Needs Work",
        description: "Significant improvements required"
    }
};
const ASSESSMENT_SECTIONS = [
    {
        name: "Contact Information",
        weight: AUDIT_WEIGHTS.contactInfo
    },
    {
        name: "Professional Summary",
        weight: AUDIT_WEIGHTS.summary
    },
    {
        name: "Work Experience",
        weight: AUDIT_WEIGHTS.workExperience
    },
    {
        name: "Education",
        weight: AUDIT_WEIGHTS.education
    },
    {
        name: "Skills",
        weight: AUDIT_WEIGHTS.skills
    },
    {
        name: "Overall Presentation",
        weight: AUDIT_WEIGHTS.presentation
    }
];
const DEVELOPER_KEYWORDS = [
    "developer",
    "engineer",
    "programmer",
    "software",
    "frontend",
    "backend",
    "full stack",
    "fullstack",
    "devops",
    "sre",
    "coding",
    "web dev",
    "mobile dev",
    "ios",
    "android",
    "react",
    "node",
    "python",
    "java",
    "javascript",
    "typescript",
    "golang",
    "rust",
    "c++",
    "data engineer",
    "ml engineer",
    "machine learning",
    "ai engineer"
];
const RESPONSE_GUIDELINES = {
    tone: "professional, encouraging, and actionable",
    format: "concise with bullet points where appropriate",
    focus: "specific, data-driven recommendations",
    atsConsideration: "always factor in ATS compatibility"
};
function formatCVSummary(cv, includeHeader = true) {
    const header = includeHeader ? "CANDIDATE'S CV:\n" : "";
    return `${header}Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Email: ${cv.email || "Not provided"}
Phone: ${cv.phone || "Not provided"}
Location: ${cv.location || "Not provided"}
LinkedIn: ${cv.linkedin || "Not provided"}
GitHub: ${cv.github || "Not provided"}
Website: ${cv.website || "Not provided"}

Summary:
${cv.summary || "Not provided"}

Experience (${cv.experience?.length || 0} positions):
${cv.experience?.map((exp)=>`- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None listed"}

Education (${cv.education?.length || 0} entries):
${cv.education?.map((edu)=>`- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None listed"}

Skills (${cv.skills?.length || 0}):
${cv.skills?.join(", ") || "None listed"}

Certifications (${cv.certifications?.length || 0}):
${cv.certifications?.map((cert)=>`- ${cert.name} by ${cert.issuer} (${cert.year})`).join("\n") || "None listed"}`;
}
function formatCVForJDMatch(cv) {
    return `CANDIDATE'S CV:
Name: ${cv.name || "Not provided"}
Title: ${cv.title || "Not provided"}
Summary: ${cv.summary || "Not provided"}

Experience:
${cv.experience?.map((exp)=>`- ${exp.role} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n") || "None"}

Education:
${cv.education?.map((edu)=>`- ${edu.degree} from ${edu.institution} (${edu.year})`).join("\n") || "None"}

Skills: ${cv.skills?.join(", ") || "None"}

Certifications:
${cv.certifications?.map((cert)=>`- ${cert.name} by ${cert.issuer}`).join("\n") || "None"}`;
}
function buildForensicPrompt(rawText) {
    const sanitized = sanitizeAIInput(rawText);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are the EduNatives Forensic CV Engine (v10.0).

I will provide a resume text. You must perform TWO distinct tasks in one output:
1. PARSE it into a clean JSON structure suitable for professional templates.
2. AUDIT it using the Strict Scoring Rubric provided below.

RESUME TEXT:
"""
${sanitized}
"""

--- TASK 1: SCORING RUBRIC & WEIGHTS ---
Calculate a 'weighted_score' based on the following breakdown:
- Work Experience (Weight: ${AUDIT_WEIGHTS.workExperience})
- Professional Summary (Weight: ${AUDIT_WEIGHTS.summary})
- Education (Weight: ${AUDIT_WEIGHTS.education})
- Skills (Weight: ${AUDIT_WEIGHTS.skills})
- Contact Information (Weight: ${AUDIT_WEIGHTS.contactInfo})
- Overall Presentation (Weight: ${AUDIT_WEIGHTS.presentation})

Score Interpretation:
- ${SCORING_RUBRIC.exceptional.min}-${SCORING_RUBRIC.exceptional.max}: ${SCORING_RUBRIC.exceptional.label} (${SCORING_RUBRIC.exceptional.description})
- ${SCORING_RUBRIC.strong.min}-${SCORING_RUBRIC.strong.max}: ${SCORING_RUBRIC.strong.label} (${SCORING_RUBRIC.strong.description})
- ${SCORING_RUBRIC.good.min}-${SCORING_RUBRIC.good.max}: ${SCORING_RUBRIC.good.label} (${SCORING_RUBRIC.good.description})
- ${SCORING_RUBRIC.fair.min}-${SCORING_RUBRIC.fair.max}: ${SCORING_RUBRIC.fair.label} (${SCORING_RUBRIC.fair.description})
- Below ${SCORING_RUBRIC.fair.min}: ${SCORING_RUBRIC.needsWork.label} (${SCORING_RUBRIC.needsWork.description})

--- TASK 2: OUTPUT SCHEMA ---
You must return ONLY a valid JSON object matching this structure exactly:
{
    "parsed_cv": {
        "basics": { 
            "name": "String", 
            "label": "String (Job Title)", 
            "email": "String", 
            "phone": "String", 
            "location": "String", 
            "links": ["String (URLs for LinkedIn, GitHub, Portfolio, etc.)"] 
        },
        "summary": "String (Professional summary or objective)",
        "experience": [
            { 
                "company": "String", 
                "position": "String", 
                "date": "String (e.g., Jan 2020 - Present)", 
                "location": "String", 
                "highlights": ["String (Key achievements with bullet points)"] 
            }
        ],
        "education": [
            { 
                "institution": "String", 
                "area": "String (Field of study)", 
                "studyType": "String (e.g., Bachelor's, Master's)", 
                "date": "String" 
            }
        ],
        "skills": ["String"]
    },
    "forensic": {
        "score": Number (0-100, strictly calculated based on weights above),
        "level": "String (Exceptional/Strong/Good/Fair/Needs Work)",
        "inflation": Boolean (true if claims appear exaggerated or unverifiable),
        "sections": [
            { "name": "Contact Information", "score": 0-100, "feedback": "String" },
            { "name": "Professional Summary", "score": 0-100, "feedback": "String" },
            { "name": "Work Experience", "score": 0-100, "feedback": "String" },
            { "name": "Education", "score": 0-100, "feedback": "String" },
            { "name": "Skills", "score": 0-100, "feedback": "String" },
            { "name": "Overall Presentation", "score": 0-100, "feedback": "String" }
        ],
        "verdict": "String (A concise 2-3 sentence summary of the findings)"
    },
    "structure": { 
        "issues": ["String (List of specific Red Flags or problems found)"], 
        "fixes": ["String (List of actionable Recommendations)"] 
    },
    "highlights": [
        { 
            "snippet": "EXACT TEXT snippet from the input CV to be highlighted in the UI", 
            "type": "red (critical issue) / green (strength) / yellow (warning)", 
            "comment": "Why this specific text was flagged" 
        }
    ]
}

IMPORTANT INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Extract ALL information from the CV text accurately
- Be specific and actionable in feedback
- Consider ATS (Applicant Tracking System) compatibility
- Flag any claims that seem inflated or unverifiable
- Include 3-5 highlights for UI annotation (mix of strengths and issues)`;
}
function buildCVParsingPrompt(rawText) {
    const sanitized = sanitizeAIInput(rawText);
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are an expert CV/Resume parser. Extract structured information from the following CV text and return it as a valid JSON object.

IMPORTANT: Return ONLY a valid JSON object, no markdown formatting, no code blocks, no explanations.

Extract the following fields:
- name: Full name of the candidate
- title: Professional title or current job title
- email: Email address
- phone: Phone number (include country code if present)
- location: City, State/Country
- website: Personal website URL (not LinkedIn or GitHub)
- linkedin: LinkedIn profile URL or username
- github: GitHub profile URL or username
- summary: Professional summary or objective (combine multiple paragraphs if needed)
- experience: Array of work experiences, each with:
  - company: Company name
  - role: Job title/role
  - duration: Date range (e.g., "Jan 2020 - Present")
  - description: Key responsibilities and achievements. IMPORTANT: Preserve bullet points using "• " prefix and separate each bullet with a newline character. Example format: "• Led team of 5 engineers\\n• Increased revenue by 20%\\n• Implemented CI/CD pipeline"
- education: Array of education entries, each with:
  - institution: School/University name
  - degree: Degree type and field (e.g., "Bachelor of Science in Computer Science")
  - year: Graduation year or date range
- certifications: Array of certifications, each with:
  - name: Certification name
  - issuer: Issuing organization
  - year: Year obtained
- skills: Array of technical and soft skills as strings. CRITICAL: ONLY extract skills that are EXPLICITLY listed in a dedicated "Skills", "Technical Skills", "Core Competencies", or similar skills section of the CV. DO NOT infer or add skills from job descriptions, responsibilities, or project descriptions. DO NOT add skills that are not explicitly stated by the candidate. If no skills section exists, return an empty array. Only include what the candidate has directly listed as their skills.
- strengths: Array of key professional strengths (e.g., "Strategic Leadership", "Cross-functional Collaboration", "Results-Driven Execution"). Extract 3-5 high-level strengths ONLY from explicitly stated summary, objective, or strengths sections. DO NOT infer strengths from job descriptions.

If a field is not found in the CV, use an empty string for text fields or an empty array for array fields.

CV TEXT:
${sanitized}

Return ONLY the JSON object:`;
}
function buildAssessmentPrompt(cvSummary) {
    // Sanitize input for security
    const sanitized = sanitizeAIInput(cvSummary);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are the EduNatives Forensic CV Engine (v9.3).

AUDIT this CV using the Strict Scoring Rubric below.

CV DATA:
"""
${sanitized}
"""

--- TASK 1: SCORING RUBRIC & WEIGHTS ---
Calculate a 'weighted_score' based on the following breakdown:
- Work Experience (Weight: ${AUDIT_WEIGHTS.workExperience}%)
- Professional Summary (Weight: ${AUDIT_WEIGHTS.summary}%)
- Education (Weight: ${AUDIT_WEIGHTS.education}%)
- Skills (Weight: ${AUDIT_WEIGHTS.skills}%)
- Contact Information (Weight: ${AUDIT_WEIGHTS.contactInfo}%)
- Overall Presentation (Weight: ${AUDIT_WEIGHTS.presentation}%)

Formula: overallScore = (workExpScore * ${AUDIT_WEIGHTS.workExperience} + summaryScore * ${AUDIT_WEIGHTS.summary} + eduScore * ${AUDIT_WEIGHTS.education} + skillsScore * ${AUDIT_WEIGHTS.skills} + contactScore * ${AUDIT_WEIGHTS.contactInfo} + presentationScore * ${AUDIT_WEIGHTS.presentation}) / 100

--- SCORING LEVELS ---
- 90-100: Exceptional
- 80-89: Strong
- 70-79: Good
- 60-69: Fair
- Below 60: Needs Work

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- TASK 2: OUTPUT SCHEMA ---
Return ONLY a valid JSON object matching this structure exactly:
{
    "overallScore": <number 0-100, weighted>,
    "level": "<Exceptional/Strong/Good/Fair/Needs Work>",
    "inflation": <boolean - true if claims appear exaggerated>,
    "verdict": "<A concise 2-3 sentence summary of the CV quality>",
    "sections": [
        { "name": "Contact Information", "score": 0-100, "feedback": "<Evaluate Completeness, Clarity, and Online Presence>" },
        { "name": "Professional Summary", "score": 0-100, "feedback": "<Evaluate Impact, Quantification, and ATS keywords>" },
        { "name": "Work Experience", "score": 0-100, "feedback": "<Evaluate Action Verbs, Metrics/Results, and Career Progression>" },
        { "name": "Education", "score": 0-100, "feedback": "<analysis of relevance, completeness>" },
        { "name": "Skills", "score": 0-100, "feedback": "<Evaluate Relevance and Hard/Soft balance>" },
        { "name": "Overall Presentation", "score": 0-100, "feedback": "<Evaluate Formatting, Length, and consistency>" }
    ],
    "strengths": ["<top strength with evidence from CV>", "<strength 2>", "<strength 3>", "<strength 4>", "<strength 5>"],
    "weaknesses": ["<specific weakness found>", "<weakness 2>", "<weakness 3>", "<weakness 4>", "<weakness 5>"],
    "recommendations": ["<actionable fix 1>", "<fix 2>", "<fix 3>", "<fix 4>", "<fix 5>"],
    "highlights": [
        { "snippet": "<EXACT TEXT snippet from the CV to highlight>", "type": "green", "comment": "<Why this is a strength>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "red", "comment": "<Why this is a critical issue>" },
        { "snippet": "<EXACT TEXT snippet from the CV>", "type": "yellow", "comment": "<Why this is a warning>" }
    ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Set inflation=true if ANY claims appear exaggerated or unverifiable
- Include 3-5 highlights with EXACT text snippets from the CV
- Each recommendation should be immediately actionable
- Verdict should summarize overall quality in 2-3 sentences`;
}
const JD_MATCH_WEIGHTS = {
    mustHaveSkills: 25,
    domainExperience: 20,
    totalExperience: 10,
    depthScope: 15,
    natureFit: 15,
    shouldHaveSkills: 10,
    niceToHaveSkills: 5
};
const JD_HARD_GATES = {
    mustHaveSkillsBelow50: 50,
    domainYearsBelow50: 55,
    seniorityGapOver2: 45,
    educationNotMet: 40,
    industryNotMet: 50
};
const JD_SCORING_TIERS = {
    excellent: {
        min: 90,
        max: 100,
        grade: "A",
        label: "Excellent Match",
        meaning: "Direct fit. Could start tomorrow."
    },
    strong: {
        min: 80,
        max: 89,
        grade: "A-",
        label: "Strong Match",
        meaning: "Minor gaps easily bridged."
    },
    good: {
        min: 70,
        max: 79,
        grade: "B+",
        label: "Good Match",
        meaning: "Some gaps but competitive candidate."
    },
    moderate: {
        min: 60,
        max: 69,
        grade: "B",
        label: "Moderate Match",
        meaning: "Notable gaps. Worth applying with strategy."
    },
    stretch: {
        min: 50,
        max: 59,
        grade: "C+",
        label: "Stretch Match",
        meaning: "Significant gaps. Uphill battle."
    },
    weak: {
        min: 40,
        max: 49,
        grade: "C",
        label: "Weak Match",
        meaning: "Major gaps. Low probability without transformation."
    },
    poor: {
        min: 30,
        max: 39,
        grade: "D",
        label: "Poor Match",
        meaning: "Fundamental misalignment. Consider alternatives."
    },
    noMatch: {
        min: 0,
        max: 29,
        grade: "F",
        label: "No Match",
        meaning: "Wrong role. Do not apply."
    }
};
const TEI_LEVELS = {
    minimal: {
        level: 1,
        label: "Minimal",
        description: "CV reformatting, keyword optimization",
        timeline: "1-2 days"
    },
    light: {
        level: 2,
        label: "Light",
        description: "Repositioning language, adding context",
        timeline: "1 week"
    },
    moderate: {
        level: 3,
        label: "Moderate",
        description: "Significant reframing, skill evidence gathering",
        timeline: "2-4 weeks"
    },
    heavy: {
        level: 4,
        label: "Heavy",
        description: "Gap-filling required (courses, projects, certs)",
        timeline: "1-6 months"
    },
    majorPivot: {
        level: 5,
        label: "Major Pivot",
        description: "Fundamental reskilling or experience building",
        timeline: "6+ months"
    }
};
function buildJDMatchPrompt(cvSummary, jobDescription) {
    const sanitizedJD = sanitizeAIInput(jobDescription, TOKEN_LIMITS.maxJobDescriptionLength);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitizedJD)) {
        throw new Error("Security: Suspicious content detected in job description");
    }
    return `You are EduNatives JD Match Engine v2.2 - Honest Assessment Framework.

PHILOSOPHY: HONEST OVER ENCOURAGING
Raw scores reflect actual fit, not potential. Be truthful about gaps while remaining constructive.

--- INPUTS ---
CV:
"""
${cvSummary}
"""

JD:
"""
${sanitizedJD}
"""

--- THREE-SCORE SYSTEM ---

1. RAW COMPATIBILITY (0-100) - How well CV matches JD RIGHT NOW
   Weights: Must-Have Skills ${JD_MATCH_WEIGHTS.mustHaveSkills}%, Domain Exp ${JD_MATCH_WEIGHTS.domainExperience}%, Total Exp ${JD_MATCH_WEIGHTS.totalExperience}%, Depth/Scope ${JD_MATCH_WEIGHTS.depthScope}%, Nature Fit ${JD_MATCH_WEIGHTS.natureFit}%, Should-Have ${JD_MATCH_WEIGHTS.shouldHaveSkills}%, Nice-to-Have ${JD_MATCH_WEIGHTS.niceToHaveSkills}%

   HARD GATES (apply caps):
   - Missing >50% must-have skills → Cap at 50
   - Domain years <50% of required → Cap at 55
   - Seniority gap >2 levels → Cap at 45
   - Education hard requirement not met → Cap at 40

   TIERS: 90-100=Excellent(A), 80-89=Strong(A-), 70-79=Good(B+), 60-69=Moderate(B), 50-59=Stretch(C+), 40-49=Weak(C), 30-39=Poor(D), 0-29=No Match(F)

2. TRANSFORMATION EFFORT INDEX (TEI) 1-5
   1=Minimal (1-2 days): CV tweaks
   2=Light (1 week): Repositioning
   3=Moderate (2-4 weeks): Significant reframing
   4=Heavy (1-6 months): Gap-filling courses/certs
   5=Major Pivot (6+ months): Reskilling needed

3. RISK ASSESSMENT (0-100 each)
   Candidate Risk: rejection likelihood, opportunity cost, interview exposure
   Employer Risk: performance risk, ramp-up time, verification concerns

--- OUTPUT (JSON only) ---
{
  "jd_parsing": {
    "role_title": "<title>",
    "company": "<company or null>",
    "mandatory_skills": ["skill1", "skill2"],
    "nice_to_have_skills": ["skill1"],
    "years_required": <number or null>,
    "education_required": "<degree or null>",
    "seniority_level": "<Junior|Mid|Senior|Lead|Principal|Director|VP|C-Level>"
  },
  "raw_compatibility": {
    "score": <0-100>,
    "grade": "<A|A-|B+|B|C+|C|D|F>",
    "label": "<Excellent|Strong|Good|Moderate|Stretch|Weak|Poor|No Match>",
    "hard_gate_applied": "<gate name or null>",
    "uncapped_score": <0-100>,
    "component_scores": {
      "must_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "domain_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "total_experience": {"score": <0-100>, "cv_years": <num>, "required_years": <num>},
      "depth_scope": {"score": <0-100>, "cv_level": "<level>", "required_level": "<level>"},
      "nature_fit": {"score": <0-100>, "alignment": "<description>"},
      "should_have_skills": {"score": <0-100>, "matched": ["skill"], "missing": ["skill"]},
      "nice_to_have_skills": {"score": <0-100>, "matched": ["skill"]}
    }
  },
  "transformation_effort": {
    "tei_score": <1-5>,
    "tei_label": "<Minimal|Light|Moderate|Heavy|Major Pivot>",
    "timeline": "<estimated time>",
    "gap_breakdown": [
      {"area": "<gap area>", "points": <contribution>, "fixable_by_cv": <true|false>}
    ],
    "honest_assessment": "<1-2 sentences on what it would actually take>"
  },
  "risk_assessment": {
    "candidate_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<rejection likelihood|opportunity cost|interview exposure>", "score": <0-100>, "detail": "<explanation>"}
      ]
    },
    "employer_risk": {
      "score": <0-100>,
      "level": "<Low|Moderate|High|Critical>",
      "factors": [
        {"factor": "<performance|ramp-up|verification>", "score": <0-100>, "detail": "<explanation>"}
      ]
    }
  },
  "honest_verdict": {
    "headline": "<one honest sentence about the match>",
    "reality_check": "<2-3 sentences of honest truth about this application>",
    "should_apply": "<Yes - strong fit|Yes - with strategy|Maybe - stretch role|Probably not|No - wrong role>",
    "success_probability": "<percentage estimate>",
    "better_fit_roles": [
      {"role": "<alternative role 1>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 2>", "fit_score": <70-95>, "reason": "<why this fits better>"},
      {"role": "<alternative role 3>", "fit_score": <70-95>, "reason": "<why this fits better>"}
    ]
  },
  "strengths_reality_check": [
    {"strength": "<candidate strength>", "reality": "<honest assessment>", "helps": "<how it helps>", "doesnt_help": "<why it doesn't fully translate>"}
  ],
  "critical_gaps": [
    {"area": "<gap area>", "severity": "<critical|high|moderate>", "you_have": "<what CV shows>", "jd_requires": "<what JD needs>", "match_percent": <0-100>, "fixable_by_cv": <true|false>, "what_would_help": "<real solution>"}
  ],
  "real_options": {
    "apply_if": ["<condition when applying makes sense>"],
    "dont_apply_if": ["<condition when they should not apply>"],
    "bottom_line": {
      "your_profile": "<honest description of who they are>",
      "target_role": "<what role they're applying for>",
      "reality": "<honest assessment of the gap>",
      "option_a": {"title": "<high-probability option>", "action": "<what to do>"},
      "option_b": {"title": "<long-term pivot option>", "action": "<what to do>"}
    }
  },
  "student_guidance": {
    "if_dream_role": "<advice if this is their dream pivot>",
    "if_practical": "<advice if they want high-probability success>",
    "quick_wins": ["<immediate action 1>", "<action 2>", "<action 3>"],
    "long_term_path": "<what would actually help in 6-12 months>"
  },
  "evidence_map": [
    {"jd_requirement": "<req>", "cv_evidence": "<evidence or 'Not found'>", "status": "<Match|Weak|Missing>", "gap_severity": "<none|minor|moderate|critical>"}
  ]
}

TONE GUIDELINES:
- Raw Score >70%: Encouraging with actionable improvements
- Raw Score 50-70%: Honest about stretch, provide transformation roadmap
- Raw Score 40-50%: Direct about low probability, suggest alternatives
- Raw Score <40%: Advise against applying, redirect to better fits
- TEI >=4: Be clear this isn't a "CV fix" - it's a career gap
- Risk >60%: Explicitly state risks before any encouragement

CRITICAL:
- Return ONLY valid JSON, no markdown
- Be HONEST first, constructive second
- Apply hard gates before final score
- Limit evidence_map to top 5 requirements
- better_fit_roles: suggest 3 roles that match their actual profile better`;
}
function buildAdvisorPrompt(cvContext, conversationHistory, userMessage) {
    const sanitizedMessage = sanitizeAIInput(userMessage, TOKEN_LIMITS.maxChatMessageLength);
    return `You are an expert career advisor and CV consultant helping a job seeker improve their resume. You have access to their CV information and should provide personalized, actionable advice.

${cvContext}

PREVIOUS CONVERSATION:
${conversationHistory}

GUIDELINES:
- Be friendly, encouraging, and professional
- Provide specific, actionable advice based on their actual CV content
- Reference specific sections of their CV when giving feedback
- Consider industry best practices and ATS optimization
- Keep responses concise but helpful (2-3 paragraphs max)
- If asked about something not in the CV, suggest they add it
- Focus on practical improvements they can make immediately

USER'S QUESTION: ${sanitizedMessage}

Provide a helpful response:`;
}
function cleanAIResponse(responseText) {
    let cleaned = responseText.trim();
    // Remove various markdown code fence formats
    if (cleaned.startsWith("```json")) {
        cleaned = cleaned.slice(7);
    } else if (cleaned.startsWith("```")) {
        cleaned = cleaned.slice(3);
    }
    if (cleaned.endsWith("```")) {
        cleaned = cleaned.slice(0, -3);
    }
    cleaned = cleaned.trim();
    // Remove control characters except \n, \r, \t (which are valid in JSON strings)
    cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
    // Fix trailing commas before } or ] (common AI mistake)
    cleaned = cleaned.replace(/,\s*}/g, "}");
    cleaned = cleaned.replace(/,\s*]/g, "]");
    // Fix double commas
    cleaned = cleaned.replace(/,\s*,/g, ",");
    return cleaned;
}
function repairJSON(jsonStr) {
    let repaired = jsonStr.trim();
    // Fix unterminated strings by finding the last proper JSON structure
    // Count quotes to detect unterminated strings (handling escaped quotes properly)
    let inString = false;
    let lastValidPos = 0;
    let lastClosedStringPos = 0;
    let i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        // Handle escaped characters inside strings
        if (inString && char === "\\") {
            i += 2; // Skip escaped character
            continue;
        }
        if (char === '"') {
            inString = !inString;
            if (!inString) {
                lastClosedStringPos = i + 1;
                lastValidPos = i + 1;
            }
        } else if (!inString && (char === "}" || char === "]" || char === "," || char === ":")) {
            lastValidPos = i + 1;
        }
        i++;
    }
    // If we're still in a string at the end, truncate to last valid closed string
    if (inString) {
        if (lastClosedStringPos > 0) {
            repaired = repaired.slice(0, lastClosedStringPos);
        } else if (lastValidPos > 0) {
            repaired = repaired.slice(0, lastValidPos);
        }
        // Remove any dangling incomplete property
        repaired = repaired.replace(/,?\s*"[^"]*$/, "");
        repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, "");
    }
    // Remove trailing incomplete key-value pairs and dangling structures
    repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, ""); // key with no value
    repaired = repaired.replace(/,?\s*"[^"]*":\s*"[^"]*$/, ""); // key with unterminated string value
    repaired = repaired.replace(/,?\s*"[^"]*$/, ""); // incomplete key
    repaired = repaired.replace(/:\s*$/, ": null"); // dangling colon
    repaired = repaired.replace(/,\s*$/, ""); // trailing comma
    // Fix unbalanced brackets - count properly outside strings
    let braceCount = 0;
    let bracketCount = 0;
    inString = false;
    i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        if (inString && char === "\\") {
            i += 2;
            continue;
        }
        if (char === '"') {
            inString = !inString;
        } else if (!inString) {
            if (char === "{") braceCount++;
            else if (char === "}") braceCount--;
            else if (char === "[") bracketCount++;
            else if (char === "]") bracketCount--;
        }
        i++;
    }
    // Add missing closing brackets/braces in correct order
    if (bracketCount > 0 || braceCount > 0) {
        // Remove trailing comma before closing
        repaired = repaired.replace(/,\s*$/, "");
        // Add closures - brackets first (inner), then braces (outer)
        repaired += "]".repeat(Math.max(0, bracketCount));
        repaired += "}".repeat(Math.max(0, braceCount));
    }
    return repaired;
}
function parseAIResponse(responseText) {
    const cleaned = cleanAIResponse(responseText);
    try {
        return JSON.parse(cleaned);
    } catch (firstError) {
        // Attempt repair
        const repaired = repairJSON(cleaned);
        try {
            return JSON.parse(repaired);
        } catch (secondError) {
            // Try more aggressive cleaning - remove any text before first { or after last }
            const jsonStart = cleaned.indexOf("{");
            const jsonEnd = cleaned.lastIndexOf("}");
            if (jsonStart >= 0 && jsonEnd > jsonStart) {
                const extracted = cleaned.slice(jsonStart, jsonEnd + 1);
                const cleanedExtracted = cleanAIResponse(extracted);
                try {
                    return JSON.parse(cleanedExtracted);
                } catch  {
                    const repairedExtracted = repairJSON(cleanedExtracted);
                    try {
                        return JSON.parse(repairedExtracted);
                    } catch  {
                    // Fall through to final error
                    }
                }
            }
            throw new Error(`Failed to parse AI response: ${firstError.message}`);
        }
    }
}
function formatConversationHistory(history, maxMessages = 10) {
    if (!history || history.length === 0) return "";
    return history.slice(-maxMessages).map((msg)=>`${msg.role === "user" ? "User" : "Advisor"}: ${msg.content}`).join("\n\n");
}
function isDeveloperRole(title, summary) {
    const titleLower = (title || "").toLowerCase();
    const summaryLower = (summary || "").toLowerCase();
    return DEVELOPER_KEYWORDS.some((kw)=>titleLower.includes(kw) || summaryLower.includes(kw));
}
function getScoreLevel(score) {
    if (score >= SCORING_RUBRIC.exceptional.min) return SCORING_RUBRIC.exceptional.label;
    if (score >= SCORING_RUBRIC.strong.min) return SCORING_RUBRIC.strong.label;
    if (score >= SCORING_RUBRIC.good.min) return SCORING_RUBRIC.good.label;
    if (score >= SCORING_RUBRIC.fair.min) return SCORING_RUBRIC.fair.label;
    return SCORING_RUBRIC.needsWork.label;
}
class ForensicAuditor {
    modelEndpoint;
    constructor(endpoint){
        this.modelEndpoint = endpoint || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";
    }
    /**
   * Execute API request with retry logic
   * @param apiKey - Google Gemini API Key
   * @param prompt - Complete prompt to send
   * @returns Parsed JSON response
   */ async executeWithRetry(apiKey, prompt) {
        const url = `${this.modelEndpoint}?key=${apiKey}`;
        const { maxRetries, baseDelayMs } = TOKEN_LIMITS.retryConfig;
        let attempt = 0;
        let lastError = null;
        while(attempt <= maxRetries){
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: prompt
                                    }
                                ]
                            }
                        ],
                        generationConfig: {
                            responseMimeType: "application/json",
                            maxOutputTokens: TOKEN_LIMITS.maxOutputTokens.forensic
                        }
                    })
                });
                if (!response.ok) {
                    const errBody = await response.json().catch(()=>({}));
                    const msg = errBody.error?.message || response.statusText;
                    // Don't retry on 400 Bad Request (prompt issue)
                    if (response.status === 400) {
                        throw new Error(`API Error 400: ${msg}`);
                    }
                    throw new Error(`${response.status}: ${msg}`);
                }
                const data = await response.json();
                const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (!rawJson) {
                    throw new Error("Empty response from API");
                }
                return parseAIResponse(rawJson);
            } catch (error) {
                attempt++;
                lastError = error;
                console.warn(`Attempt ${attempt} failed:`, lastError.message);
                // Don't retry on 400 errors or if max retries exceeded
                if (lastError.message.includes("400") || attempt > maxRetries) {
                    break;
                }
                // Exponential backoff
                const delay = Math.pow(2, attempt) * baseDelayMs;
                await new Promise((resolve)=>setTimeout(resolve, delay));
            }
        }
        throw lastError || new Error("Max retries exceeded");
    }
    /**
   * Run forensic analysis on CV text
   * @param apiKey - Google Gemini API Key
   * @param cvText - Raw text extracted from CV
   * @returns Complete forensic result
   */ async analyze(apiKey, cvText) {
        const prompt = buildForensicPrompt(cvText);
        return this.executeWithRetry(apiKey, prompt);
    }
}
const V211_WEIGHTS = {
    A_ats_structure: 15,
    B_content_realism: 20,
    C_skill_validation: 20,
    D_strengths_discovery: 10,
    E_tone_clarity: 10,
    F_timeline_plausibility: 15,
    G_nature_fit: 10
};
function buildV211AssessmentPrompt(cvSummary, cvFilename = "cv.pdf") {
    const sanitized = sanitizeAIInput(cvSummary);
    if (containsInjectionAttempt(sanitized)) {
        throw new Error("Security: Suspicious content detected in CV text");
    }
    return `You are the EduNatives Forensic CV Engine (v2.11).

Analyze this CV using seven scoring categories (A-G) and produce comprehensive assessment data for both student and HR audiences.

CV DATA:
"""
${sanitized}
"""

=== SCORING CATEGORIES (Weights) ===
A. ATS Structure (${V211_WEIGHTS.A_ats_structure}%): Contact info completeness, formatting, layout, length, typos
B. Content Realism (${V211_WEIGHTS.B_content_realism}%): Claims believability, evidence quality, quantification
C. Skill Validation (${V211_WEIGHTS.C_skill_validation}%): Skills backed by experience, ghost skills detection, proficiency levels 1-5
D. Strengths Discovery (${V211_WEIGHTS.D_strengths_discovery}%): Key achievements, unique value propositions
E. Tone & Clarity (${V211_WEIGHTS.E_tone_clarity}%): Readability, jargon levels, bullet length, repetition
F. Timeline Plausibility (${V211_WEIGHTS.F_timeline_plausibility}%): Career gaps, seniority alignment, progression logic
G. Nature Fit (${V211_WEIGHTS.G_nature_fit}%): Education-career alignment, domain depth, candidate profile

=== ISSUE SEVERITY LEVELS ===
- critical: Disqualifying issues (fake credentials, major red flags)
- high: Significant problems that hurt candidacy (multiple typos, ghost skills)
- medium: Notable issues worth fixing (missing LinkedIn, formatting issues)
- low: Minor polish items (wordiness, minor improvements)

=== OUTPUT SCHEMA ===
Return ONLY valid JSON matching this structure:

{
  "version": "2.11",
  "input": {
    "cv_filename": "${cvFilename}",
    "jd_provided": false,
    "jd_title": null
  },
  "analysis_metadata": {
    "cv_name": "String (extracted name)",
    "analysis_date": "${new Date().toISOString()}",
    "engine_version": "2.11",
    "professional_age_years": Number (years since first job),
    "inferred_seniority": "String (Entry/Mid/Senior/Lead/Principal/Executive)"
  },
  "cv_nature": {
    "education_nature": {
      "field": "String (IT/CS, Business, Engineering, Arts, Science, etc.)",
      "field_specific": "String (specific major/field)",
      "level": "String (High School/Associate/Bachelors/Masters/PhD)",
      "technical_degree": Boolean,
      "stem_degree": Boolean,
      "relevance_to_career": "String (Direct/Related/Tangential/Unrelated)"
    },
    "domain_nature": {
      "primary_domain": "String (Software Dev/Infrastructure/Data/Security/Product/Design/etc.)",
      "secondary_domains": ["String"],
      "specialization": "String",
      "domain_depth": "String (Generalist/Specialist/Expert)"
    },
    "industry_nature": {
      "current_industry": "String",
      "industry_history": ["String"],
      "industry_depth": "String (Single/Multi-Industry)"
    },
    "work_style_nature": {
      "employment_pattern": "String (Full-time/Contract/Freelance/Mixed)",
      "work_arrangement": "String (On-site/Remote/Hybrid)",
      "company_size_history": "String (Startup/SMB/Enterprise/Mixed)",
      "geographic_pattern": "String (Local/National/International)"
    },
    "career_path_nature": {
      "trajectory": "String (Linear Progression/Career Change/Lateral/Entrepreneurial)",
      "stability": "String (Stable/Moderate/Job Hopper)",
      "gaps_present": Boolean,
      "career_stage": "String (Entry/Early-Mid/Mid/Senior/Executive)",
      "is_career_changer": Boolean,
      "pivot_from": "String or null",
      "pivot_to": "String or null"
    },
    "candidate_profile": {
      "type": "String (Fresh Graduate/Rising Star/Industry Veteran/Career Changer/Specialist)",
      "learning_style": "String (Self-Taught/Certification-Based/Formal Education/Mixed)",
      "risk_profile": "String (Low Risk/Moderate Risk/High Risk)"
    }
  },
  "category_scores": {
    "A_ats_structure": {
      "score": Number (0-100),
      "grade": "String (A/A-/B+/B/B-/C+/C/D/F)",
      "issues": [{"code": "A1-A9", "type": "String", "detail": "String", "severity": "critical|high|medium|low", "location": "String"}]
    },
    "B_content_realism": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "B1-B9", "type": "String", "detail": "String", "severity": "String", "evidence": "String"}]
    },
    "C_skill_validation": {
      "score": Number,
      "grade": "String",
      "validation_rate": "String (e.g., 85%)",
      "skills": {
        "validated": [{"skill": "String", "level": 1-5, "raw_level": 1-5, "evidence": ["String"], "penalty": "String or null", "cap_applied": Boolean}],
        "implied": [{"skill": "String", "level": 1-5, "reason": "String"}],
        "ghost": ["String (skills listed but no evidence)"]
      },
      "issues": [{"code": "C1-C9", "type": "String", "skill": "String", "detail": "String", "severity": "String"}]
    },
    "D_strengths_discovery": {
      "score": Number,
      "strengths": [{"code": "D1-D9", "type": "String", "detail": "String", "evidence": "String"}]
    },
    "E_tone_clarity": {
      "score": Number,
      "grade": "String",
      "metrics": {"avg_bullet_length_words": Number, "technical_density": "String", "repeated_words": [{"word": "String", "count": Number}], "readability": "String"},
      "issues": [{"code": "E1-E9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "F_timeline_plausibility": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "F1-F9", "type": "String", "detail": "String", "severity": "String"}]
    },
    "G_nature_fit": {
      "score": Number,
      "grade": "String",
      "issues": [{"code": "G1-G9", "type": "String", "detail": "String", "severity": "String"}]
    }
  },
  "ui_output": {
    "overallScore": Number (weighted average of all category scores),
    "level": "Exceptional|Strong|Good|Fair|Needs Work",
    "inflation": Boolean,
    "verdict": "String (2-3 sentence summary)",
    "sections": [{"name": "String", "code": "A-G", "score": Number, "status": "good|warning|critical", "summary": "String"}],
    "strengths": [{"code": "D1-D9", "icon": "check", "text": "String"}],
    "weaknesses": [{"code": "String", "icon": "x", "severity": "critical|high|medium|low", "text": "String"}],
    "recommendations": [{"priority": "high|medium|low", "icon": "lightbulb", "text": "String", "impact": "String (+X pts)"}],
    "highlights": [{"type": "achievement|skill|concern|gap|education", "color": "green|blue|yellow|red|purple", "text": "String", "source": "String", "note": "String or null"}],
    "quickStats": {
      "professionalYears": Number,
      "validatedSkills": Number,
      "ghostSkills": Number,
      "validationRate": Number (percentage),
      "quantificationRate": Number (percentage of bullets with metrics),
      "issueCount": {"critical": Number, "high": Number, "medium": Number, "low": Number}
    }
  },
  "reports": {
    "student_view": {
      "headline": "String (encouraging headline)",
      "overall_score": {"score": Number, "grade": "String", "message": "String"},
      "your_strengths": [{"title": "String", "detail": "String", "icon": "trophy|star|sparkle|rocket"}],
      "your_background": {"summary": "String", "unique_value": "String", "growth_areas": ["String"]},
      "quick_wins": [{"action": "String", "impact": "String", "time": "String (e.g., 15 minutes)", "priority": "do_first|do_soon|do_later"}],
      "improvement_roadmap": {
        "this_week": {"actions": ["String"], "projected_gain": Number},
        "this_month": {"actions": ["String"], "projected_gain": Number},
        "long_term": {"actions": ["String"], "projected_gain": Number}
      },
      "encouragement": "String (positive closing message)"
    }
  },
  "recommended_rewrites": [{"type": "remove|evidence|add|reword", "location": "String", "original": "String", "suggested": "String", "impact": "String", "related_codes": ["String"]}]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown code blocks
- Be thorough and specific in feedback
- Calculate weighted overall score: A(15%) + B(20%) + C(20%) + D(10%) + E(10%) + F(15%) + G(10%)
- Include 5-8 highlights mixing achievements, skills, concerns, and gaps
- Provide actionable, specific recommendations with point impacts`;
}
// ============================================================================
// CV DOCUMENT VALIDATION
// ============================================================================
/**
 * CV validation keywords - documents should contain several of these to be considered a CV
 */ const CV_KEYWORDS = [
    // Section headers
    'experience',
    'education',
    'skills',
    'summary',
    'objective',
    'profile',
    'work history',
    'employment',
    'qualifications',
    'certifications',
    'training',
    'professional background',
    'career',
    'achievements',
    'accomplishments',
    // Contact info patterns
    'email',
    'phone',
    'linkedin',
    'github',
    'portfolio',
    // Common CV terms
    'resume',
    'curriculum vitae',
    'cv',
    'responsibilities',
    'achievements',
    'managed',
    'developed',
    'led',
    'implemented',
    'created',
    'designed',
    'bachelor',
    'master',
    'degree',
    'university',
    'college',
    'graduated',
    'certified',
    'license',
    'award'
];
/**
 * Non-CV document patterns - these indicate the document is NOT a CV
 */ const NON_CV_PATTERNS = [
    /^dear\s+(sir|madam|hiring|manager)/i,
    /^\s*invoice\s*(#|number|no\.?)?/i,
    /^\s*receipt\s*(#|number|no\.?)?/i,
    /^\s*contract\s*/i,
    /^\s*agreement\s*/i,
    /^\s*terms\s+(and|&)\s+conditions/i,
    /^\s*privacy\s+policy/i,
    /^\s*chapter\s+\d/i,
    /^\s*table\s+of\s+contents/i,
    /once upon a time/i,
    /^\s*article\s+\d/i
];
function validateCVDocument(text) {
    const lowerText = text.toLowerCase();
    const textLength = text.length;
    // Too short to be a CV (less than 200 chars)
    if (textLength < 200) {
        return {
            isCV: false,
            confidence: 0.9,
            reason: "Document is too short to be a valid CV/resume. Please upload a complete document."
        };
    }
    // Check for non-CV patterns first
    for (const pattern of NON_CV_PATTERNS){
        if (pattern.test(text)) {
            return {
                isCV: false,
                confidence: 0.85,
                reason: "This document appears to be a cover letter, contract, or other non-CV document. Please upload your CV/resume instead."
            };
        }
    }
    // Count CV keywords
    let keywordCount = 0;
    const foundKeywords = [];
    for (const keyword of CV_KEYWORDS){
        if (lowerText.includes(keyword)) {
            keywordCount++;
            foundKeywords.push(keyword);
        }
    }
    // Check for email pattern (strong CV indicator)
    const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text);
    // Check for phone pattern
    const hasPhone = /[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{6,}/.test(text);
    // Check for common section patterns
    const hasSectionHeaders = /\b(experience|education|skills|summary|work\s+history|employment)\s*[:|\n]/i.test(text);
    // Calculate confidence score
    const keywordScore = Math.min(keywordCount / 8, 1) * 0.4; // Max 40% from keywords
    const emailScore = hasEmail ? 0.2 : 0;
    const phoneScore = hasPhone ? 0.15 : 0;
    const sectionScore = hasSectionHeaders ? 0.25 : 0;
    const totalScore = keywordScore + emailScore + phoneScore + sectionScore;
    // Threshold: at least 0.4 confidence to be considered a CV
    if (totalScore >= 0.4) {
        return {
            isCV: true,
            confidence: Math.min(totalScore, 1),
            reason: "Valid CV/resume detected"
        };
    }
    // Low confidence - likely not a CV
    return {
        isCV: false,
        confidence: 1 - totalScore,
        reason: "This document doesn't appear to be a CV/resume. A CV should include sections like Experience, Education, Skills, and contact information. Please upload a valid CV/resume document."
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/templates/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @fileoverview CV Template Registry Module
 * @description Centralized module for all CV template styles, providing:
 * - TemplateStyle interface for type-safe template definitions
 * - Template registry with all available templates
 * - Helper functions to get template styles
 */ __turbopack_context__.s([
    "getAllTemplates",
    ()=>getAllTemplates,
    "getTemplateOptions",
    ()=>getTemplateOptions,
    "getTemplateStyle",
    ()=>getTemplateStyle,
    "templateRegistry",
    ()=>templateRegistry
]);
const templateRegistry = {
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
        companyColor: "#4a4a4a"
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
        companyColor: "#4a4a4a"
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
        companyColor: "#4a4a4a"
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
        companyColor: "#4a4a4a"
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
        companyColor: "#4a4a4a"
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
        companyColor: "#4a4a4a"
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
        companyColor: "#1a5276"
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
        summaryBoxed: true
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
        summaryBoxed: false
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
        summaryBoxed: false
    }
};
function getTemplateStyle(template) {
    return templateRegistry[template] || templateRegistry["modern-dark"];
}
function getAllTemplates() {
    return Object.values(templateRegistry);
}
function getTemplateOptions() {
    return getAllTemplates().map((t)=>({
            value: t.id,
            label: t.name
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/types/cv.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_SCHEME_PRESETS",
    ()=>COLOR_SCHEME_PRESETS,
    "DEFAULT_SECTION_ORDER",
    ()=>DEFAULT_SECTION_ORDER
]);
const COLOR_SCHEME_PRESETS = [
    {
        id: "navy-blue",
        name: "Navy Blue",
        primary: "#1b4f72",
        secondary: "#2874a6"
    },
    {
        id: "dark-slate",
        name: "Dark Slate",
        primary: "#1a1a2e",
        secondary: "#4a4a6a"
    },
    {
        id: "forest-green",
        name: "Forest Green",
        primary: "#1e5631",
        secondary: "#2e7d32"
    },
    {
        id: "burgundy",
        name: "Burgundy",
        primary: "#6b1c23",
        secondary: "#922b3e"
    },
    {
        id: "charcoal",
        name: "Charcoal",
        primary: "#2d3436",
        secondary: "#636e72"
    },
    {
        id: "royal-purple",
        name: "Royal Purple",
        primary: "#4a148c",
        secondary: "#7b1fa2"
    },
    {
        id: "black-lightblue",
        name: "Black & Light Blue",
        primary: "#1a1a1a",
        secondary: "#0ea5e9"
    },
    {
        id: "black-purple",
        name: "Black & Purple",
        primary: "#1a1a1a",
        secondary: "#8b5cf6"
    }
];
const DEFAULT_SECTION_ORDER = [
    "summary",
    "experience",
    "education",
    "skills",
    "certifications",
    "strengths"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CVWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadDropzone.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SteppedProgress.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [activeMenuItem, setActiveMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ai-career-chat");
    const [cvs, setCvs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCV, setSelectedCV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadDialogOpen, setUploadDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadStep, setUploadStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [snackbar, setSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: "",
        severity: "info"
    });
    const pendingFileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showSnackbar = (message, severity = "info")=>{
        setSnackbar({
            open: true,
            message,
            severity
        });
    };
    const handleMenuItemClick = (item)=>{
        setActiveMenuItem(item);
        if (item === "ai-career-chat") {
            setView("dashboard");
        }
    };
    const handleUploadNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleUploadNew]": ()=>{
            setUploadDialogOpen(true);
        }
    }["Home.useCallback[handleUploadNew]"], []);
    const handleFilesAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleFilesAdded]": async (files)=>{
            if (files.length === 0) return;
            const file = files[0];
            pendingFileRef.current = file;
            setIsProcessing(true);
            setUploadStep(0);
            setUploadDialogOpen(false);
            try {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("fileId", `cv-${Date.now()}`);
                setUploadStep(1);
                await new Promise({
                    "Home.useCallback[handleFilesAdded]": (r)=>setTimeout(r, 300)
                }["Home.useCallback[handleFilesAdded]"]);
                setUploadStep(2);
                const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3001/api") || "http://localhost:3001/api";
                const response = await fetch(`${apiUrl}/cv/parse`, {
                    method: "POST",
                    body: formData
                });
                setUploadStep(3);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to parse CV");
                }
                const { cv, tokenUsage } = await response.json();
                setCvs({
                    "Home.useCallback[handleFilesAdded]": (prev)=>[
                            cv,
                            ...prev
                        ]
                }["Home.useCallback[handleFilesAdded]"]);
                setSelectedCV(cv);
                setView("workspace");
                const tokens = tokenUsage?.totalTokens || cv.tokenUsage?.totalTokens || 0;
                showSnackbar(`CV parsed successfully!${tokens > 0 ? ` (${tokens} tokens)` : ""}`, "success");
            } catch (error) {
                console.error("Error parsing CV:", error);
                showSnackbar(`Error parsing CV: ${error}`, "error");
            } finally{
                setIsProcessing(false);
                setUploadStep(0);
                pendingFileRef.current = null;
            }
        }
    }["Home.useCallback[handleFilesAdded]"], []);
    const handleSelectCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSelectCV]": (cv)=>{
            setSelectedCV(cv);
            setView("workspace");
        }
    }["Home.useCallback[handleSelectCV]"], []);
    const handleDeleteCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleDeleteCV]": (id)=>{
            setCvs({
                "Home.useCallback[handleDeleteCV]": (prev)=>prev.filter({
                        "Home.useCallback[handleDeleteCV]": (cv)=>cv.id !== id
                    }["Home.useCallback[handleDeleteCV]"])
            }["Home.useCallback[handleDeleteCV]"]);
            if (selectedCV?.id === id) {
                setSelectedCV(null);
            }
            showSnackbar("CV deleted", "info");
        }
    }["Home.useCallback[handleDeleteCV]"], [
        selectedCV
    ]);
    const handleDuplicateCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleDuplicateCV]": (cv)=>{
            const duplicate = {
                ...cv,
                id: `cv-${Date.now()}`,
                name: `${cv.name} (Copy)`,
                uploadedAt: new Date()
            };
            setCvs({
                "Home.useCallback[handleDuplicateCV]": (prev)=>[
                        duplicate,
                        ...prev
                    ]
            }["Home.useCallback[handleDuplicateCV]"]);
            showSnackbar("CV duplicated", "success");
        }
    }["Home.useCallback[handleDuplicateCV]"], []);
    const handleUpdateCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleUpdateCV]": (updatedCV)=>{
            setCvs({
                "Home.useCallback[handleUpdateCV]": (prev)=>prev.map({
                        "Home.useCallback[handleUpdateCV]": (cv)=>cv.id === updatedCV.id ? updatedCV : cv
                    }["Home.useCallback[handleUpdateCV]"])
            }["Home.useCallback[handleUpdateCV]"]);
            setSelectedCV(updatedCV);
        }
    }["Home.useCallback[handleUpdateCV]"], []);
    const handleBackToDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleBackToDashboard]": ()=>{
            setView("dashboard");
        }
    }["Home.useCallback[handleBackToDashboard]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            minHeight: "100vh",
            bgcolor: "background.default"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                activeItem: activeMenuItem,
                onItemClick: handleMenuItemClick
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SteppedProgress"], {
                            steps: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPLOAD_STEPS"],
                            currentStep: uploadStep,
                            title: "Processing Your CV",
                            estimatedTime: "Usually takes 10-30 seconds"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1,
                            overflow: "auto"
                        },
                        children: [
                            view === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {
                                cvs: cvs,
                                onUploadNew: handleUploadNew,
                                onSelectCV: handleSelectCV,
                                onDeleteCV: handleDeleteCV,
                                onDuplicateCV: handleDuplicateCV
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            view === "workspace" && selectedCV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CVWorkspace"], {
                                cv: selectedCV,
                                onBack: handleBackToDashboard,
                                onUpdateCV: handleUpdateCV
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: uploadDialogOpen,
                onClose: ()=>setUploadDialogOpen(false),
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        sx: {
                            fontWeight: 600
                        },
                        children: "Upload Your Resume"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    mb: 2
                                },
                                children: "Upload a PDF, DOCX, DOC, or TXT file to get started."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadDropzone"], {
                                onFilesAdded: handleFilesAdded,
                                disabled: isProcessing
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: ()=>setUploadDialogOpen(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
                open: snackbar.open,
                autoHideDuration: 4000,
                onClose: ()=>setSnackbar((s)=>({
                            ...s,
                            open: false
                        })),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    onClose: ()=>setSnackbar((s)=>({
                                ...s,
                                open: false
                            })),
                    severity: snackbar.severity,
                    variant: "filled",
                    children: snackbar.message
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(Home, "1sNoCInImeXIaXHkuPnh6W1gwKo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_36e70a95._.js.map