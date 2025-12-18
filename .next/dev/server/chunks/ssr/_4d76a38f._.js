module.exports = [
"[project]/lib/export/exportCV.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
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
    },
    "student-modern": {
        headerBg: "#f8fafc",
        accent: "#3b82f6",
        headerText: "#1e293b",
        bodyBg: "#ffffff",
        bodyText: "#1e293b",
        bodyTextSecondary: "#64748b"
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
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]();
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
    children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
        children: [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 12,
                color: accentHex
            }
        }
    }));
    if (cv.title) {
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                    size: 6,
                    color: accentHex
                }
            }
        }));
    };
    if (cv.summary) {
        addSectionHeader("Summary");
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
                children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                    children: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
        children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
            children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
                        text: "• ",
                        size: 20,
                        color: accentHex
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextRun"]({
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
    const docx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                children
            }
        ]
    });
    const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBlob(docx);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
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
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-ssr] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-ssr] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CVWorkspace.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadDropzone.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SteppedProgress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ClientOnly.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function HomeContent() {
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [activeMenuItem, setActiveMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ai-career-chat");
    const [cvs, setCvs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCV, setSelectedCV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadDialogOpen, setUploadDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadStep, setUploadStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [detectedCvType, setDetectedCvType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [snackbar, setSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: "",
        severity: "info"
    });
    const pendingFileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const handleUploadNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUploadDialogOpen(true);
    }, []);
    const handleFilesAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (files)=>{
        console.log("[handleFilesAdded] Called with files:", files.length);
        if (files.length === 0) return;
        const file = files[0];
        console.log("[handleFilesAdded] Processing file:", file.name);
        pendingFileRef.current = file;
        setIsProcessing(true);
        setUploadStep(0);
        setDetectedCvType(undefined);
        setUploadDialogOpen(false);
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("fileId", `cv-${Date.now()}`);
            setUploadStep(1);
            await new Promise((r)=>setTimeout(r, 300));
            setUploadStep(2);
            console.log("[Upload] Starting fetch to /api/cv/parse");
            const response = await fetch("/api/cv/parse", {
                method: "POST",
                body: formData
            });
            console.log("[Upload] Response status:", response.status, response.statusText);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to parse CV");
            }
            const { cv, tokenUsage } = await response.json();
            // Update detected CV type to show in progress indicator right after AI parsing
            if (cv.cvType) {
                setDetectedCvType(cv.cvType);
            }
            // Move to Finalizing step after CV type is detected
            setUploadStep(3);
            await new Promise((r)=>setTimeout(r, 800)); // Brief pause to show the detected type
            setCvs((prev)=>[
                    cv,
                    ...prev
                ]);
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
    }, []);
    const handleSelectCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cv)=>{
        setSelectedCV(cv);
        setView("workspace");
    }, []);
    const handleDeleteCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setCvs((prev)=>prev.filter((cv)=>cv.id !== id));
        if (selectedCV?.id === id) {
            setSelectedCV(null);
        }
        showSnackbar("CV deleted", "info");
    }, [
        selectedCV
    ]);
    const handleDuplicateCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cv)=>{
        const duplicate = {
            ...cv,
            id: `cv-${Date.now()}`,
            name: `${cv.name} (Copy)`,
            uploadedAt: new Date()
        };
        setCvs((prev)=>[
                duplicate,
                ...prev
            ]);
        showSnackbar("CV duplicated", "success");
    }, []);
    const handleUpdateCV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updatedCV)=>{
        setCvs((prev)=>prev.map((cv)=>cv.id === updatedCV.id ? updatedCV : cv));
        setSelectedCV(updatedCV);
    }, []);
    const handleBackToDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setView("dashboard");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            minHeight: "100vh",
            bgcolor: "background.default"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                activeItem: activeMenuItem,
                onItemClick: handleMenuItemClick
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SteppedProgress"], {
                            steps: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SteppedProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UPLOAD_STEPS"],
                            currentStep: uploadStep,
                            title: "Processing Your CV",
                            estimatedTime: "Usually takes 10-30 seconds",
                            cvType: detectedCvType
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1,
                            overflow: "auto"
                        },
                        children: [
                            view === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dashboard"], {
                                cvs: cvs,
                                onUploadNew: handleUploadNew,
                                onSelectCV: handleSelectCV,
                                onDeleteCV: handleDeleteCV,
                                onDuplicateCV: handleDuplicateCV
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            view === "workspace" && selectedCV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CVWorkspace"], {
                                cv: selectedCV,
                                onBack: handleBackToDashboard,
                                onUpdateCV: handleUpdateCV
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: uploadDialogOpen,
                onClose: ()=>setUploadDialogOpen(false),
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        sx: {
                            fontWeight: 600
                        },
                        children: "Upload Your Resume"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    mb: 2
                                },
                                children: "Upload a PDF, DOCX, DOC, or TXT file to get started."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadDropzone"], {
                                onFilesAdded: handleFilesAdded,
                                disabled: isProcessing
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: ()=>setUploadDialogOpen(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    onClose: ()=>setSnackbar((s)=>({
                                ...s,
                                open: false
                            })),
                    severity: snackbar.severity,
                    variant: "filled",
                    children: snackbar.message
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientOnly"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 234,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 233,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_4d76a38f._.js.map