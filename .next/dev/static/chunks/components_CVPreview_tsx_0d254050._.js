(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CVPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CVPreview",
    ()=>CVPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Email$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Email.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Phone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LocationOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LinkedIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GitHub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GitHub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FormatListBulleted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SwapVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SwapVert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Palette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionRearrangeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionRearrangeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/cv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/rules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CalendarMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertPageBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/InsertPageBreak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LineEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LineEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
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
;
;
;
function PageBadge({ pageNumber, totalPages }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            bgcolor: "#f5f5f5",
            borderBottom: "1px solid #e0e0e0"
        },
        "data-testid": `page-badge-${pageNumber}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 16,
                            color: "#757575"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            color: "#757575",
                            fontWeight: 600
                        },
                        children: [
                            "Page ",
                            pageNumber,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "caption",
                sx: {
                    color: "#9e9e9e",
                    fontStyle: "italic"
                },
                children: "(continued)"
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = PageBadge;
function PageBreakIndicator({ pageNumber }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: "calc(100% + 48px)",
            mx: -3,
            my: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 1.5,
            bgcolor: "#f0f0f0",
            borderTop: "2px dashed #bdbdbd",
            borderBottom: "2px dashed #bdbdbd",
            position: "relative",
            "@media print": {
                display: "none",
                pageBreakBefore: "always"
            }
        },
        "data-testid": `page-break-${pageNumber}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: 1,
                border: "1px solid #e0e0e0"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertPageBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        fontSize: 16,
                        color: "#757575"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    sx: {
                        color: "#757575",
                        fontWeight: 500
                    },
                    children: [
                        "Page ",
                        pageNumber
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = PageBreakIndicator;
function SectionHeader({ title, style, rightContent, isStudentTemplate = false }) {
    const isUnderline = style.sectionHeaderVariant === "underline";
    const isCenteredLines = style.sectionHeaderVariant === "centeredLines";
    const isLeftBorder = style.sectionHeaderVariant === "leftBorder";
    if (isStudentTemplate) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: 1.5,
                mt: 2
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    borderLeft: `3px solid ${style.accent}`,
                    pl: 1.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            color: style.accent,
                            fontFamily: "'Arial', sans-serif",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            fontSize: "0.9rem"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    rightContent
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    }
    if (isLeftBorder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: 1.5,
                mt: 0.5
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    borderLeft: `4px solid ${style.accent}`,
                    pl: 1.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            color: style.accent,
                            fontFamily: "'Arial', sans-serif",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            fontSize: "1rem"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    rightContent
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            mb: 1,
            mt: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    isCenteredLines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1,
                            height: "1px",
                            bgcolor: style.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 182,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            color: style.accent,
                            mx: isCenteredLines ? 2 : 0,
                            fontFamily: "'Arial', sans-serif",
                            textTransform: isUnderline ? "uppercase" : "none",
                            fontWeight: isUnderline ? 600 : 500,
                            letterSpacing: isUnderline ? "0.05em" : "normal"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    isCenteredLines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1,
                            height: "1px",
                            bgcolor: style.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 196,
                        columnNumber: 29
                    }, this),
                    !isCenteredLines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 197,
                        columnNumber: 30
                    }, this),
                    rightContent
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            isUnderline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    height: "2px",
                    width: "100%",
                    bgcolor: style.accent,
                    mt: 0.5,
                    mb: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_c2 = SectionHeader;
function EditableField({ value, onChange, multiline = false, placeholder = "(click to edit)", rows = 3, showBulletTool = false, enableLineDelete = false }) {
    _s();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempValue, setTempValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const insertBullet = ()=>{
        if (inputRef.current) {
            const start = inputRef.current.selectionStart || 0;
            const end = inputRef.current.selectionEnd || 0;
            const isAtLineStart = start === 0 || tempValue[start - 1] === "\n";
            let prefix = "";
            let cursorOffset = 2;
            if (!isAtLineStart) {
                prefix = "\n";
                cursorOffset = 3;
            }
            const newValue = tempValue.slice(0, start) + prefix + "• " + tempValue.slice(end);
            setTempValue(newValue);
            setTimeout(()=>{
                if (inputRef.current) {
                    const newPos = start + cursorOffset;
                    inputRef.current.selectionStart = newPos;
                    inputRef.current.selectionEnd = newPos;
                    inputRef.current.focus();
                }
            }, 0);
        }
    };
    const hasChanges = tempValue !== value;
    const handleSave = ()=>{
        onChange(tempValue);
        setEditing(false);
    };
    const handleCancel = ()=>{
        setTempValue(value);
        setEditing(false);
    };
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                position: "relative",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
                bgcolor: "background.paper",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                    inputRef: inputRef,
                    size: "small",
                    value: tempValue,
                    onChange: (e)=>setTempValue(e.target.value),
                    onBlur: (e)=>{
                        const target = e.relatedTarget;
                        if (target?.getAttribute("data-action-btn") === "true") {
                            return;
                        }
                        if (!multiline) {
                            handleSave();
                        }
                    },
                    onKeyDown: (e)=>{
                        if (e.key === "Enter" && !multiline) {
                            handleSave();
                        }
                        if (e.key === "Escape") {
                            handleCancel();
                        }
                    },
                    multiline: multiline,
                    rows: multiline ? rows : 1,
                    autoFocus: true,
                    fullWidth: true,
                    sx: {
                        "& .MuiInputBase-input": {
                            fontSize: "0.8rem"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this),
                multiline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 1,
                        py: 0.5,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        bgcolor: "action.hover"
                    },
                    children: [
                        showBulletTool ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                            title: "Add bullet point",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: insertBullet,
                                "data-action-btn": "true",
                                "data-testid": "button-insert-bullet",
                                sx: {
                                    color: "text.secondary"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 330,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 323,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 322,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {}, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                gap: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: "Cancel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: handleCancel,
                                        "data-action-btn": "true",
                                        "data-testid": "button-cancel-edit",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: hasChanges ? "Save changes" : "No changes",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            size: "small",
                                            onClick: handleSave,
                                            "data-action-btn": "true",
                                            "data-testid": "button-save-edit",
                                            disabled: !hasChanges,
                                            sx: {
                                                color: hasChanges ? "success.main" : "text.disabled",
                                                bgcolor: hasChanges ? "success.light" : "transparent",
                                                "&:hover": hasChanges ? {
                                                    bgcolor: "success.main",
                                                    color: "white"
                                                } : {}
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 360,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 311,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 271,
            columnNumber: 7
        }, this);
    }
    if (multiline && enableLineDelete) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            onClick: ()=>{
                setTempValue(value);
                setEditing(true);
            },
            sx: {
                cursor: "pointer",
                "&:hover": {
                    bgcolor: "action.hover",
                    borderRadius: 1
                },
                p: 0.5
            },
            "data-testid": "editable-multiline-text",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LineEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineEditor"], {
                value: value,
                onChange: onChange,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 385,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 373,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        onClick: ()=>{
            setTempValue(value);
            setEditing(true);
        },
        sx: {
            cursor: "pointer",
            "&:hover": {
                bgcolor: "action.hover",
                borderRadius: 1
            },
            p: 0.5,
            display: multiline ? "block" : "inline-flex",
            alignItems: multiline ? undefined : "center",
            gap: multiline ? undefined : 0.5,
            minWidth: 50,
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                whiteSpace: multiline ? "pre-wrap" : "normal",
                display: multiline ? "block" : "inline"
            },
            children: value || placeholder
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 411,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s(EditableField, "dg1fWDob7mHGcF68PdUjzZSt/Ec=");
_c3 = EditableField;
function EditableContactField({ icon: Icon, value, onChange, placeholder, headerText }) {
    _s1();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempValue, setTempValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    sx: {
                        fontSize: 14
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                    size: "small",
                    value: tempValue,
                    onChange: (e)=>setTempValue(e.target.value),
                    onBlur: ()=>{
                        onChange(tempValue);
                        setEditing(false);
                    },
                    onKeyDown: (e)=>{
                        if (e.key === "Enter") {
                            onChange(tempValue);
                            setEditing(false);
                        }
                        if (e.key === "Escape") {
                            setTempValue(value);
                            setEditing(false);
                        }
                    },
                    autoFocus: true,
                    sx: {
                        "& .MuiInputBase-input": {
                            color: headerText,
                            py: 0.5,
                            px: 1,
                            fontSize: "0.8125rem"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(255,255,255,0.3)"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        onClick: ()=>{
            setTempValue(value);
            setEditing(true);
        },
        sx: {
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer",
            "&:hover": {
                opacity: 0.7
            },
            p: 0.5,
            borderRadius: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                sx: {
                    fontSize: 14
                }
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body2",
                sx: {
                    fontSize: "0.8125rem"
                },
                children: value || placeholder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 472,
        columnNumber: 5
    }, this);
}
_s1(EditableContactField, "SJ+HDEV6k7f5FaedjXhs9FZDLYA=");
_c4 = EditableContactField;
function CVPreview({ cv, template, onUpdateCV, onTemplateChange, showToolbar = true }) {
    _s2();
    const allTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllTemplateOptionsWithLabels"])();
    // Compute student template flag once to avoid type narrowing issues
    const isStudentTemplate = template === "student-modern" || template === "phd-research";
    // Get template recommendation/warning based on CV type
    const cvType = cv.cvType || "professional";
    const templateRecommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateRecommendation"])(template, cvType);
    // Student/PhD templates enforce specific section orders
    const sectionOrder = template === "phd-research" ? __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHD_RESEARCH_SECTION_ORDER"] : isStudentTemplate ? __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDENT_SECTION_ORDER"] : cv.sectionOrder || __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SECTION_ORDER"];
    const [rearrangeModalOpen, setRearrangeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [colorAnchorEl, setColorAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customPrimary, setCustomPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cv.colorScheme?.primary || "#1b4f72");
    const [customSecondary, setCustomSecondary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cv.colorScheme?.secondary || "#2874a6");
    const updateField = (field, value)=>{
        onUpdateCV({
            ...cv,
            [field]: value
        });
    };
    const applySectionOrder = (newOrder)=>{
        onUpdateCV({
            ...cv,
            sectionOrder: newOrder
        });
    };
    const applyColorScheme = (scheme)=>{
        onUpdateCV({
            ...cv,
            colorScheme: scheme
        });
        setColorAnchorEl(null);
    };
    const applyCustomColors = ()=>{
        const customScheme = {
            id: "custom",
            name: "Custom",
            primary: customPrimary,
            secondary: customSecondary
        };
        onUpdateCV({
            ...cv,
            colorScheme: customScheme
        });
        setColorAnchorEl(null);
    };
    const updateExperience = (index, field, value)=>{
        const newExperience = [
            ...cv.experience
        ];
        newExperience[index] = {
            ...newExperience[index],
            [field]: value
        };
        onUpdateCV({
            ...cv,
            experience: newExperience
        });
    };
    const deleteExperience = (index)=>{
        const newExperience = cv.experience.filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            experience: newExperience
        });
    };
    const addExperience = ()=>{
        const newExp = {
            id: `exp-new-${Date.now()}`,
            role: "New Role",
            company: "Company Name",
            duration: "",
            description: "",
            location: ""
        };
        onUpdateCV({
            ...cv,
            experience: [
                ...cv.experience,
                newExp
            ]
        });
    };
    const updateEducation = (index, field, value)=>{
        const newEducation = [
            ...cv.education
        ];
        newEducation[index] = {
            ...newEducation[index],
            [field]: value
        };
        onUpdateCV({
            ...cv,
            education: newEducation
        });
    };
    const deleteEducation = (index)=>{
        const newEducation = cv.education.filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            education: newEducation
        });
    };
    const addEducation = ()=>{
        const newEdu = {
            id: `edu-new-${Date.now()}`,
            degree: "Degree",
            institution: "Institution",
            year: ""
        };
        onUpdateCV({
            ...cv,
            education: [
                ...cv.education,
                newEdu
            ]
        });
    };
    const updateSkill = (index, value)=>{
        const newSkills = [
            ...cv.skills
        ];
        newSkills[index] = value;
        onUpdateCV({
            ...cv,
            skills: newSkills
        });
    };
    const deleteSkill = (index)=>{
        const newSkills = cv.skills.filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            skills: newSkills
        });
    };
    const addSkill = ()=>{
        onUpdateCV({
            ...cv,
            skills: [
                ...cv.skills,
                "New Skill"
            ]
        });
    };
    const updateStrength = (index, value)=>{
        const newStrengths = [
            ...cv.strengths || []
        ];
        newStrengths[index] = value;
        onUpdateCV({
            ...cv,
            strengths: newStrengths
        });
    };
    const deleteStrength = (index)=>{
        const newStrengths = (cv.strengths || []).filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            strengths: newStrengths
        });
    };
    const addStrength = ()=>{
        onUpdateCV({
            ...cv,
            strengths: [
                ...cv.strengths || [],
                "New Strength"
            ]
        });
    };
    const updateCertification = (index, field, value)=>{
        const newCerts = [
            ...cv.certifications || []
        ];
        newCerts[index] = {
            ...newCerts[index],
            [field]: value
        };
        onUpdateCV({
            ...cv,
            certifications: newCerts
        });
    };
    const deleteCertification = (index)=>{
        const newCerts = (cv.certifications || []).filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            certifications: newCerts
        });
    };
    const addCertification = ()=>{
        const newCert = {
            id: `cert-new-${Date.now()}`,
            name: "Certification Name",
            issuer: "",
            year: ""
        };
        onUpdateCV({
            ...cv,
            certifications: [
                ...cv.certifications || [],
                newCert
            ]
        });
    };
    const addPublication = ()=>{
        const newPub = {
            id: `pub-new-${Date.now()}`,
            citation: "Author(s). (Year). Title. Journal/Conference.",
            status: "published"
        };
        onUpdateCV({
            ...cv,
            publications: [
                ...cv.publications || [],
                newPub
            ]
        });
    };
    const addTraining = ()=>{
        const newTraining = {
            id: `train-new-${Date.now()}`,
            title: "Training/Teaching Title",
            description: "Description of training or teaching role..."
        };
        onUpdateCV({
            ...cv,
            training: [
                ...cv.training || [],
                newTraining
            ]
        });
    };
    const addHonor = ()=>{
        const newHonor = {
            id: `honor-new-${Date.now()}`,
            title: "Honor, Award, or Activity",
            year: new Date().getFullYear().toString(),
            description: ""
        };
        onUpdateCV({
            ...cv,
            honors: [
                ...cv.honors || [],
                newHonor
            ]
        });
    };
    const updateProject = (index, field, value)=>{
        const newProjects = [
            ...cv.projects || []
        ];
        newProjects[index] = {
            ...newProjects[index],
            [field]: value
        };
        onUpdateCV({
            ...cv,
            projects: newProjects
        });
    };
    const deleteProject = (index)=>{
        const newProjects = (cv.projects || []).filter((_, i)=>i !== index);
        onUpdateCV({
            ...cv,
            projects: newProjects
        });
    };
    const addProject = ()=>{
        const newProject = {
            id: `proj-new-${Date.now()}`,
            title: "Project Title",
            role: "",
            description: "Project description",
            technologies: [
                "Tech1",
                "Tech2"
            ],
            impact: []
        };
        onUpdateCV({
            ...cv,
            projects: [
                ...cv.projects || [],
                newProject
            ]
        });
    };
    const addProjectTech = (projectIndex, tech)=>{
        const newProjects = [
            ...cv.projects || []
        ];
        const project = newProjects[projectIndex];
        if (project) {
            newProjects[projectIndex] = {
                ...project,
                technologies: [
                    ...project.technologies || [],
                    tech
                ]
            };
            onUpdateCV({
                ...cv,
                projects: newProjects
            });
        }
    };
    const removeProjectTech = (projectIndex, techIndex)=>{
        const newProjects = [
            ...cv.projects || []
        ];
        const project = newProjects[projectIndex];
        if (project) {
            newProjects[projectIndex] = {
                ...project,
                technologies: (project.technologies || []).filter((_, i)=>i !== techIndex)
            };
            onUpdateCV({
                ...cv,
                projects: newProjects
            });
        }
    };
    const updateProjectTech = (projectIndex, techIndex, value)=>{
        const newProjects = [
            ...cv.projects || []
        ];
        const project = newProjects[projectIndex];
        if (project) {
            const newTechs = [
                ...project.technologies || []
            ];
            newTechs[techIndex] = value;
            newProjects[projectIndex] = {
                ...project,
                technologies: newTechs
            };
            onUpdateCV({
                ...cv,
                projects: newProjects
            });
        }
    };
    const baseStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateStyle"])(template);
    // Merge CV colorScheme with template defaults
    const effectiveColors = {
        primary: cv.colorScheme?.primary || baseStyle.accent,
        secondary: cv.colorScheme?.secondary || baseStyle.companyColor
    };
    // Create merged style with effective colors
    const style = {
        ...baseStyle,
        accent: effectiveColors.primary,
        headerText: baseStyle.headerBg === "#ffffff" ? effectiveColors.primary : baseStyle.headerText,
        companyColor: effectiveColors.secondary
    };
    const showGitHub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeveloperRole"])(cv.title || "", cv.summary || "");
    const A4_WIDTH = "210mm";
    const A4_HEIGHT = "297mm";
    const A4_HEIGHT_PX = 1123; // 297mm at 96dpi
    const HEADER_HEIGHT_PX = 118; // Empirically measured header with contact info
    const PAGE_PADDING_PX = 24; // p: 3 = 24px padding
    const BOTTOM_GUTTER = 16; // Safety buffer for page breaks
    // Calculate page assignments with entry-level splitting
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CVPreview.useMemo[pages]": ()=>{
            const AVAILABLE_FIRST = A4_HEIGHT_PX - HEADER_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER;
            const AVAILABLE_SUBSEQUENT = A4_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER - 32; // 32 for PageBadge
            const SECTION_HEADER = 40; // Empirically measured section header with margin
            const LINE_HEIGHT = 20; // Standard line height for body text
            const CHARS_PER_LINE = 78; // Accurate chars per line at A4 width
            // Height estimation functions - balanced estimates for proper pagination
            const estimateSummaryHeight = {
                "CVPreview.useMemo[pages].estimateSummaryHeight": ()=>{
                    const text = cv.summary || "";
                    const lines = Math.ceil(text.length / CHARS_PER_LINE);
                    // Account for boxed summary padding if applicable
                    const boxPadding = style.summaryBoxed ? 24 : 0;
                    return SECTION_HEADER + lines * LINE_HEIGHT + boxPadding + 12;
                }
            }["CVPreview.useMemo[pages].estimateSummaryHeight"];
            const estimateExperienceEntryHeight = {
                "CVPreview.useMemo[pages].estimateExperienceEntryHeight": (exp)=>{
                    const headerHeight = 64; // Title, company, date lines
                    const desc = exp.description || "";
                    // Count actual newlines for bullet points
                    const bulletLines = (desc.match(/\n/g) || []).length + 1;
                    const textLines = Math.ceil(desc.length / CHARS_PER_LINE);
                    const lines = Math.max(bulletLines, textLines); // Use larger estimate for safety
                    return headerHeight + lines * LINE_HEIGHT + 12;
                }
            }["CVPreview.useMemo[pages].estimateExperienceEntryHeight"];
            const estimateEducationEntryHeight = {
                "CVPreview.useMemo[pages].estimateEducationEntryHeight": ()=>{
                    return 52; // Height per education entry
                }
            }["CVPreview.useMemo[pages].estimateEducationEntryHeight"];
            const estimateSkillsHeight = {
                "CVPreview.useMemo[pages].estimateSkillsHeight": ()=>{
                    const count = cv.skills?.length || 0;
                    // Chips: ~8 skills per row at 28px height per row
                    const rows = Math.ceil(count / 8);
                    return SECTION_HEADER + rows * 28 + 16;
                }
            }["CVPreview.useMemo[pages].estimateSkillsHeight"];
            const estimateStrengthsHeight = {
                "CVPreview.useMemo[pages].estimateStrengthsHeight": ()=>{
                    const count = cv.strengths?.length || 0;
                    const rows = Math.ceil(count / 6);
                    return SECTION_HEADER + rows * 28 + 16;
                }
            }["CVPreview.useMemo[pages].estimateStrengthsHeight"];
            const estimateProjectEntryHeight = {
                "CVPreview.useMemo[pages].estimateProjectEntryHeight": (project)=>{
                    const headerHeight = 48; // Title and role line
                    const desc = project.description || "";
                    const textLines = Math.ceil(desc.length / CHARS_PER_LINE);
                    const techCount = project.technologies?.length || 0;
                    const techRows = Math.ceil(techCount / 6); // ~6 tech badges per row
                    return headerHeight + textLines * LINE_HEIGHT + techRows * 28 + 16;
                }
            }["CVPreview.useMemo[pages].estimateProjectEntryHeight"];
            const estimateCertificationsHeight = {
                "CVPreview.useMemo[pages].estimateCertificationsHeight": ()=>{
                    // Certifications as chips, ~4 per row
                    const count = cv.certifications?.length || 0;
                    const rows = Math.ceil(count / 4);
                    return SECTION_HEADER + rows * 28 + 16;
                }
            }["CVPreview.useMemo[pages].estimateCertificationsHeight"];
            const estimatePublicationsHeight = {
                "CVPreview.useMemo[pages].estimatePublicationsHeight": ()=>{
                    const count = cv.publications?.length || 0;
                    return SECTION_HEADER + count * 48 + 16;
                }
            }["CVPreview.useMemo[pages].estimatePublicationsHeight"];
            const estimateTrainingHeight = {
                "CVPreview.useMemo[pages].estimateTrainingHeight": ()=>{
                    const count = cv.training?.length || 0;
                    return SECTION_HEADER + count * 60 + 16;
                }
            }["CVPreview.useMemo[pages].estimateTrainingHeight"];
            const estimateHonorsHeight = {
                "CVPreview.useMemo[pages].estimateHonorsHeight": ()=>{
                    const count = cv.honors?.length || 0;
                    return SECTION_HEADER + count * 32 + 16;
                }
            }["CVPreview.useMemo[pages].estimateHonorsHeight"];
            const result = [];
            let currentItems = [];
            let currentHeight = 0;
            let pageNumber = 1;
            const getAvailable = {
                "CVPreview.useMemo[pages].getAvailable": ()=>pageNumber === 1 ? AVAILABLE_FIRST : AVAILABLE_SUBSEQUENT
            }["CVPreview.useMemo[pages].getAvailable"];
            const pushPage = {
                "CVPreview.useMemo[pages].pushPage": ()=>{
                    if (currentItems.length > 0) {
                        result.push({
                            pageNumber,
                            items: [
                                ...currentItems
                            ],
                            isFirstPage: pageNumber === 1
                        });
                        pageNumber++;
                        currentItems = [];
                        currentHeight = 0;
                    }
                }
            }["CVPreview.useMemo[pages].pushPage"];
            const addItem = {
                "CVPreview.useMemo[pages].addItem": (item, height)=>{
                    if (currentHeight + height > getAvailable() && currentItems.length > 0) {
                        pushPage();
                    }
                    currentItems.push(item);
                    currentHeight += height;
                }
            }["CVPreview.useMemo[pages].addItem"];
            // Process each section in order
            for (const section of sectionOrder){
                switch(section){
                    case "summary":
                        {
                            const height = estimateSummaryHeight();
                            addItem({
                                type: "summary"
                            }, height);
                            break;
                        }
                    case "experience":
                        {
                            if (cv.experience.length === 0) break;
                            // Track if any entry has been rendered (for continuation logic)
                            let experienceEntryRendered = false;
                            cv.experience.forEach({
                                "CVPreview.useMemo[pages]": (exp, index)=>{
                                    const entryHeight = estimateExperienceEntryHeight(exp);
                                    const headerHeight = SECTION_HEADER;
                                    if (index === 0) {
                                        // First entry: header + entry must stay together
                                        const combined = headerHeight + entryHeight;
                                        if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                        }
                                        currentItems.push({
                                            type: "experience-header",
                                            continued: false
                                        });
                                        currentItems.push({
                                            type: "experience-entry",
                                            index
                                        });
                                        currentHeight += combined;
                                        experienceEntryRendered = true;
                                    } else {
                                        // Subsequent entries: may break to new page with continuation header
                                        // Calculate if we need a page break
                                        if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                            // Add continuation header + entry together (keep header with at least one entry)
                                            const combined = headerHeight + entryHeight;
                                            // If combined doesn't fit on fresh page, just add entry alone (shouldn't happen in practice)
                                            if (combined <= getAvailable()) {
                                                currentItems.push({
                                                    type: "experience-header",
                                                    continued: true
                                                });
                                                currentItems.push({
                                                    type: "experience-entry",
                                                    index
                                                });
                                                currentHeight += combined;
                                            } else {
                                                // Entry alone is too tall for a page, just add it
                                                currentItems.push({
                                                    type: "experience-entry",
                                                    index
                                                });
                                                currentHeight += entryHeight;
                                            }
                                        } else {
                                            currentItems.push({
                                                type: "experience-entry",
                                                index
                                            });
                                            currentHeight += entryHeight;
                                        }
                                        experienceEntryRendered = true;
                                    }
                                }
                            }["CVPreview.useMemo[pages]"]);
                            break;
                        }
                    case "education":
                        {
                            if (!cv.education || cv.education.length === 0) break;
                            cv.education.forEach({
                                "CVPreview.useMemo[pages]": (_, index)=>{
                                    const entryHeight = estimateEducationEntryHeight();
                                    const headerHeight = SECTION_HEADER;
                                    if (index === 0) {
                                        // First entry: header + entry must stay together
                                        const combined = headerHeight + entryHeight;
                                        if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                        }
                                        currentItems.push({
                                            type: "education-header",
                                            continued: false
                                        });
                                        currentItems.push({
                                            type: "education-entry",
                                            index
                                        });
                                        currentHeight += combined;
                                    } else {
                                        // Subsequent entries: may break to new page with continuation header
                                        if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                            // Add continuation header + entry together (keep header with at least one entry)
                                            const combined = headerHeight + entryHeight;
                                            if (combined <= getAvailable()) {
                                                currentItems.push({
                                                    type: "education-header",
                                                    continued: true
                                                });
                                                currentItems.push({
                                                    type: "education-entry",
                                                    index
                                                });
                                                currentHeight += combined;
                                            } else {
                                                currentItems.push({
                                                    type: "education-entry",
                                                    index
                                                });
                                                currentHeight += entryHeight;
                                            }
                                        } else {
                                            currentItems.push({
                                                type: "education-entry",
                                                index
                                            });
                                            currentHeight += entryHeight;
                                        }
                                    }
                                }
                            }["CVPreview.useMemo[pages]"]);
                            break;
                        }
                    case "skills":
                        {
                            const height = estimateSkillsHeight();
                            addItem({
                                type: "skills"
                            }, height);
                            break;
                        }
                    case "strengths":
                        {
                            const height = estimateStrengthsHeight();
                            addItem({
                                type: "strengths"
                            }, height);
                            break;
                        }
                    case "certifications":
                        {
                            const height = estimateCertificationsHeight();
                            addItem({
                                type: "certifications"
                            }, height);
                            break;
                        }
                    case "projects":
                        {
                            if (!cv.projects || cv.projects.length === 0) break;
                            cv.projects.forEach({
                                "CVPreview.useMemo[pages]": (project, index)=>{
                                    const entryHeight = estimateProjectEntryHeight(project);
                                    const headerHeight = SECTION_HEADER;
                                    if (index === 0) {
                                        const combined = headerHeight + entryHeight;
                                        if (currentHeight + combined > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                        }
                                        currentItems.push({
                                            type: "projects-header",
                                            continued: false
                                        });
                                        currentItems.push({
                                            type: "project-entry",
                                            index
                                        });
                                        currentHeight += combined;
                                    } else {
                                        if (currentHeight + entryHeight > getAvailable() && currentItems.length > 0) {
                                            pushPage();
                                            const combined = headerHeight + entryHeight;
                                            if (combined <= getAvailable()) {
                                                currentItems.push({
                                                    type: "projects-header",
                                                    continued: true
                                                });
                                                currentItems.push({
                                                    type: "project-entry",
                                                    index
                                                });
                                                currentHeight += combined;
                                            } else {
                                                currentItems.push({
                                                    type: "project-entry",
                                                    index
                                                });
                                                currentHeight += entryHeight;
                                            }
                                        } else {
                                            currentItems.push({
                                                type: "project-entry",
                                                index
                                            });
                                            currentHeight += entryHeight;
                                        }
                                    }
                                }
                            }["CVPreview.useMemo[pages]"]);
                            break;
                        }
                    case "publications":
                        {
                            const height = estimatePublicationsHeight();
                            addItem({
                                type: "publications"
                            }, height);
                            break;
                        }
                    case "training":
                        {
                            const height = estimateTrainingHeight();
                            addItem({
                                type: "training"
                            }, height);
                            break;
                        }
                    case "honors":
                        {
                            const height = estimateHonorsHeight();
                            addItem({
                                type: "honors"
                            }, height);
                            break;
                        }
                }
            }
            // Push final page
            pushPage();
            return result.length > 0 ? result : [
                {
                    pageNumber: 1,
                    items: [],
                    isFirstPage: true
                }
            ];
        }
    }["CVPreview.useMemo[pages]"], [
        cv,
        sectionOrder
    ]);
    const totalPages = pages.length;
    const a4PageStyle = {
        width: A4_WIDTH,
        minHeight: A4_HEIGHT,
        maxWidth: "100%",
        bgcolor: style.bodyBg,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        ml: 0,
        position: "relative",
        "@media print": {
            boxShadow: "none",
            margin: 0,
            pageBreakAfter: "always"
        }
    };
    // Render individual experience entry
    const renderExperienceEntry = (index, isLast)=>{
        const exp = cv.experience[index];
        if (!exp) return null;
        const isStudent = isStudentTemplate;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: isLast ? 0 : 2,
                position: "relative",
                "&:hover .delete-btn": {
                    visibility: "visible"
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    className: "delete-btn",
                    size: "small",
                    onClick: ()=>deleteExperience(index),
                    sx: {
                        position: "absolute",
                        right: 0,
                        top: 0,
                        visibility: "hidden",
                        color: "error.main"
                    },
                    "data-testid": `button-delete-experience-${index}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fontSize: "small"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1071,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1064,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "subtitle1",
                    fontWeight: 600,
                    sx: {
                        color: style.bodyText,
                        lineHeight: 1.2
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: exp.role,
                        onChange: (v)=>updateExperience(index, "role", v),
                        placeholder: "Job Title"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1074,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1073,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    sx: {
                        color: style.companyColor,
                        fontWeight: isStudent ? 400 : 700,
                        lineHeight: 1.2,
                        mt: 0
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: exp.company,
                        onChange: (v)=>updateExperience(index, "company", v),
                        placeholder: "Company Name"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1081,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1080,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                        flexWrap: "wrap",
                        mt: 0
                    },
                    children: [
                        style.showMetaIcons && !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 12,
                                color: style.bodyTextSecondary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1088,
                            columnNumber: 49
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "caption",
                            sx: {
                                color: isStudent ? style.accent : style.bodyTextSecondary,
                                ml: style.showMetaIcons && !isStudent ? -1 : 0,
                                fontSize: "0.75rem",
                                fontStyle: isStudent ? "italic" : "normal"
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: exp.duration,
                                onChange: (v)=>updateExperience(index, "duration", v),
                                placeholder: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1090,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1089,
                            columnNumber: 11
                        }, this),
                        style.showMetaIcons && !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 12,
                                color: style.bodyTextSecondary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1096,
                            columnNumber: 49
                        }, this),
                        !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "caption",
                            sx: {
                                color: style.bodyTextSecondary,
                                ml: style.showMetaIcons ? -1 : 0,
                                fontSize: "0.75rem"
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: exp.location || "",
                                onChange: (v)=>updateExperience(index, "location", v),
                                placeholder: "Location"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1099,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1098,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1087,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    sx: {
                        mt: 0.5,
                        color: style.bodyText,
                        whiteSpace: "pre-wrap"
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: exp.description,
                        onChange: (v)=>updateExperience(index, "description", v),
                        multiline: true,
                        rows: 6,
                        placeholder: "Describe your responsibilities and achievements...",
                        showBulletTool: true,
                        enableLineDelete: true
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1107,
                    columnNumber: 9
                }, this),
                !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    sx: {
                        mt: 2
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1118,
                    columnNumber: 21
                }, this)
            ]
        }, `exp-${exp.id}`, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1063,
            columnNumber: 7
        }, this);
    };
    // Render individual education entry
    const renderEducationEntry = (index, isLast)=>{
        const edu = cv.education?.[index];
        if (!edu) return null;
        const isStudent = isStudentTemplate;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: isLast ? 0 : 1.5,
                position: "relative",
                "&:hover .delete-btn": {
                    visibility: "visible"
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    className: "delete-btn",
                    size: "small",
                    onClick: ()=>deleteEducation(index),
                    sx: {
                        position: "absolute",
                        right: 0,
                        top: 0,
                        visibility: "hidden",
                        color: "error.main"
                    },
                    "data-testid": `button-delete-education-${index}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fontSize: "small"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "subtitle2",
                    fontWeight: 600,
                    sx: {
                        color: style.bodyText
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: edu.degree,
                        onChange: (v)=>updateEducation(index, "degree", v),
                        placeholder: "Degree"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    sx: {
                        color: style.bodyTextSecondary
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: edu.institution,
                        onChange: (v)=>updateEducation(index, "institution", v),
                        placeholder: "Institution"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    sx: {
                        color: isStudent ? style.accent : style.bodyTextSecondary,
                        fontStyle: isStudent ? "italic" : "normal"
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: edu.year,
                        onChange: (v)=>updateEducation(index, "year", v),
                        placeholder: "Year/Duration"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1155,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1154,
                    columnNumber: 9
                }, this)
            ]
        }, `edu-${edu.id}`, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1130,
            columnNumber: 7
        }, this);
    };
    // Helper function to render a page item
    const renderItem = (item, isLast, pageItems)=>{
        switch(item.type){
            case "summary":
                if (isStudentTemplate) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Summary",
                            style: style,
                            isStudentTemplate: isStudentTemplate
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: style.summaryBoxed ? {
                                border: "1px solid rgba(27, 79, 114, 0.15)",
                                borderLeft: `3px solid ${style.accent}`,
                                bgcolor: "rgba(27, 79, 114, 0.04)",
                                p: 2,
                                borderRadius: "0 4px 4px 0"
                            } : {},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                sx: {
                                    color: style.bodyText,
                                    whiteSpace: "pre-wrap",
                                    lineHeight: 1.6
                                },
                                component: "div",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                    value: cv.summary,
                                    onChange: (v)=>updateField("summary", v),
                                    multiline: true,
                                    rows: 6,
                                    placeholder: "Write a professional summary...",
                                    showBulletTool: true,
                                    enableLineDelete: true
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1173,
                            columnNumber: 13
                        }, this)
                    ]
                }, "summary", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1171,
                    columnNumber: 11
                }, this);
            case "experience-header":
                {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: item.continued ? isStudentTemplate ? "Internships (continued)" : "Experience (continued)" : isStudentTemplate ? "Internships" : "Experience",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: !item.continued ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addExperience,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-experience",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1204,
                                columnNumber: 19
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1198,
                            columnNumber: 13
                        }, this)
                    }, "experience-header", false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1197,
                        columnNumber: 11
                    }, this);
                }
            case "experience-entry":
                {
                    const isLastExp = isLast || pageItems.findIndex((i)=>i === item) === pageItems.length - 1 || pageItems[pageItems.findIndex((i)=>i === item) + 1]?.type !== "experience-entry";
                    return renderExperienceEntry(item.index, isLastExp);
                }
            case "education-header":
                {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: item.continued ? "Education (continued)" : "Education",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: !item.continued ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addEducation,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-education",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1231,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1230,
                                columnNumber: 19
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1224,
                            columnNumber: 13
                        }, this)
                    }, "education-header", false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1223,
                        columnNumber: 11
                    }, this);
                }
            case "education-entry":
                {
                    const isLastEdu = isLast || pageItems.findIndex((i)=>i === item) === pageItems.length - 1 || pageItems[pageItems.findIndex((i)=>i === item) + 1]?.type !== "education-entry";
                    return renderEducationEntry(item.index, isLastEdu);
                }
            case "skills":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: isStudentTemplate ? "Technical Skills" : "Skills",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addSkill,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-skill",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1255,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5
                            },
                            children: cv.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableSkillChip, {
                                    skill: skill,
                                    accentColor: style.accent,
                                    onUpdate: (v)=>updateSkill(index, v),
                                    onDelete: ()=>deleteSkill(index),
                                    testId: `chip-skill-${index}`,
                                    compact: true
                                }, `skill-${index}`, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1262,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1260,
                            columnNumber: 13
                        }, this)
                    ]
                }, "skills", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1249,
                    columnNumber: 11
                }, this);
            case "strengths":
                if (!cv.strengths || cv.strengths.length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Strengths",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addStrength,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-strength",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1285,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1280,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5
                            },
                            children: cv.strengths.map((strength, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableSkillChip, {
                                    skill: strength,
                                    accentColor: style.accent,
                                    onUpdate: (v)=>updateStrength(index, v),
                                    onDelete: ()=>deleteStrength(index),
                                    testId: `chip-strength-${index}`,
                                    compact: true
                                }, `strength-${index}`, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1292,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1290,
                            columnNumber: 13
                        }, this)
                    ]
                }, "strengths", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1279,
                    columnNumber: 11
                }, this);
            case "certifications":
                if (!cv.certifications || cv.certifications.length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Certifications",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addCertification,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-certification",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1316,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1315,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5
                            },
                            children: cv.certifications.map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableSkillChip, {
                                    skill: cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name,
                                    accentColor: style.accent,
                                    onUpdate: (v)=>{
                                        // Parse back the combined format
                                        const parts = v.split(" - ");
                                        if (parts.length > 1) {
                                            updateCertification(index, "name", parts[0]);
                                            updateCertification(index, "issuer", parts.slice(1).join(" - "));
                                        } else {
                                            updateCertification(index, "name", v);
                                        }
                                    },
                                    onDelete: ()=>deleteCertification(index),
                                    testId: `chip-certification-${index}`,
                                    compact: true
                                }, cert.id, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1322,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1320,
                            columnNumber: 13
                        }, this)
                    ]
                }, "certifications", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1309,
                    columnNumber: 11
                }, this);
            case "projects-header":
                {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: item.continued ? isStudentTemplate ? "Volunteer Experience (continued)" : "Featured Projects (continued)" : isStudentTemplate ? "Volunteer Experience" : "Featured Projects",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: !item.continued ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addProject,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-project",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1355,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1354,
                                columnNumber: 19
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1348,
                            columnNumber: 13
                        }, this)
                    }, "projects-header", false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1347,
                        columnNumber: 11
                    }, this);
                }
            case "project-entry":
                {
                    const project = cv.projects?.[item.index];
                    if (!project) return null;
                    const isLastProj = isLast || pageItems.findIndex((i)=>i === item) === pageItems.length - 1 || pageItems[pageItems.findIndex((i)=>i === item) + 1]?.type !== "project-entry";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: isLastProj ? 0 : 2,
                            position: "relative",
                            "&:hover .delete-btn": {
                                visibility: "visible"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                className: "delete-btn",
                                size: "small",
                                onClick: ()=>deleteProject(item.index),
                                sx: {
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    visibility: "hidden",
                                    color: "error.main"
                                },
                                "data-testid": `button-delete-project-${item.index}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1379,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle1",
                                fontWeight: 600,
                                sx: {
                                    color: style.bodyText,
                                    lineHeight: 1.2
                                },
                                component: "div",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                    value: project.title,
                                    onChange: (v)=>updateProject(item.index, "title", v),
                                    placeholder: "Project Title"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1382,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1381,
                                columnNumber: 13
                            }, this),
                            project.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                sx: {
                                    color: style.companyColor,
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    mt: 0
                                },
                                component: "div",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                    value: project.role,
                                    onChange: (v)=>updateProject(item.index, "role", v),
                                    placeholder: "Your Role"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1389,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                sx: {
                                    color: style.bodyText,
                                    whiteSpace: "pre-wrap",
                                    lineHeight: 1.5,
                                    mt: 0.5
                                },
                                component: "div",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                    value: project.description,
                                    onChange: (v)=>updateProject(item.index, "description", v),
                                    multiline: true,
                                    rows: 3,
                                    placeholder: "Project description and achievements..."
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1398,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1397,
                                columnNumber: 13
                            }, this),
                            ((project.technologies || []).length > 0 || isStudentTemplate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                    mt: 1,
                                    alignItems: "center"
                                },
                                children: [
                                    (project.technologies || []).map((tech, techIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                            label: tech,
                                            size: "small",
                                            sx: {
                                                bgcolor: `${style.accent}15`,
                                                color: style.accent,
                                                fontWeight: 600,
                                                fontSize: "0.7rem",
                                                height: 22,
                                                borderRadius: "4px",
                                                "&:hover": {
                                                    bgcolor: `${style.accent}25`
                                                }
                                            },
                                            onDelete: ()=>removeProjectTech(item.index, techIdx),
                                            "data-testid": `chip-project-${item.index}-tech-${techIdx}`
                                        }, `tech-${techIdx}`, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1409,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: ()=>addProjectTech(item.index, "NewTech"),
                                        sx: {
                                            color: style.accent,
                                            width: 22,
                                            height: 22
                                        },
                                        "data-testid": `button-add-project-tech-${item.index}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: 14
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1432,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1407,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `proj-${project.id}`, true, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1371,
                        columnNumber: 11
                    }, this);
                }
            case "publications":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Publications",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addPublication,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-publication",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1449,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1448,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1443,
                            columnNumber: 13
                        }, this),
                        !cv.publications || cv.publications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary,
                                fontStyle: "italic"
                            },
                            children: "Click + to add publications"
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1454,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            },
                            children: cv.publications.map((pub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        position: "relative",
                                        "&:hover .delete-btn": {
                                            visibility: "visible"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            className: "delete-btn",
                                            size: "small",
                                            onClick: ()=>{
                                                const newPubs = (cv.publications || []).filter((_, i)=>i !== index);
                                                onUpdateCV({
                                                    ...cv,
                                                    publications: newPubs
                                                });
                                            },
                                            sx: {
                                                position: "absolute",
                                                right: 0,
                                                top: 0,
                                                visibility: "hidden",
                                                color: "error.main"
                                            },
                                            "data-testid": `button-delete-publication-${index}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1461,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                color: style.bodyText,
                                                lineHeight: 1.5,
                                                pr: 3
                                            },
                                            component: "div",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                value: pub.citation,
                                                onChange: (v)=>{
                                                    const newPubs = [
                                                        ...cv.publications || []
                                                    ];
                                                    newPubs[index] = {
                                                        ...newPubs[index],
                                                        citation: v
                                                    };
                                                    onUpdateCV({
                                                        ...cv,
                                                        publications: newPubs
                                                    });
                                                },
                                                multiline: true,
                                                rows: 2,
                                                placeholder: "Author(s). (Year). Title. Journal/Conference."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1474,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, pub.id, true, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1460,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1458,
                            columnNumber: 13
                        }, this)
                    ]
                }, "publications", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1442,
                    columnNumber: 11
                }, this);
            case "training":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Training & Teaching",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addTraining,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-training",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1501,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1496,
                            columnNumber: 13
                        }, this),
                        !cv.training || cv.training.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary,
                                fontStyle: "italic"
                            },
                            children: "Click + to add training or teaching experience"
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1507,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5
                            },
                            children: cv.training.map((train, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        position: "relative",
                                        "&:hover .delete-btn": {
                                            visibility: "visible"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            className: "delete-btn",
                                            size: "small",
                                            onClick: ()=>{
                                                const newTraining = (cv.training || []).filter((_, i)=>i !== index);
                                                onUpdateCV({
                                                    ...cv,
                                                    training: newTraining
                                                });
                                            },
                                            sx: {
                                                position: "absolute",
                                                right: 0,
                                                top: 0,
                                                visibility: "hidden",
                                                color: "error.main"
                                            },
                                            "data-testid": `button-delete-training-${index}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1524,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1514,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "subtitle2",
                                            fontWeight: 600,
                                            sx: {
                                                color: style.bodyText,
                                                lineHeight: 1.3
                                            },
                                            component: "div",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                value: train.title,
                                                onChange: (v)=>{
                                                    const newTraining = [
                                                        ...cv.training || []
                                                    ];
                                                    newTraining[index] = {
                                                        ...newTraining[index],
                                                        title: v
                                                    };
                                                    onUpdateCV({
                                                        ...cv,
                                                        training: newTraining
                                                    });
                                                },
                                                placeholder: "Training/Teaching Title"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1527,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1526,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                color: style.bodyTextSecondary,
                                                lineHeight: 1.5,
                                                pr: 3
                                            },
                                            component: "div",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                value: train.description,
                                                onChange: (v)=>{
                                                    const newTraining = [
                                                        ...cv.training || []
                                                    ];
                                                    newTraining[index] = {
                                                        ...newTraining[index],
                                                        description: v
                                                    };
                                                    onUpdateCV({
                                                        ...cv,
                                                        training: newTraining
                                                    });
                                                },
                                                multiline: true,
                                                rows: 2,
                                                placeholder: "Description of training or teaching role..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1538,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1537,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, train.id, true, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1513,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1511,
                            columnNumber: 13
                        }, this)
                    ]
                }, "training", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1495,
                    columnNumber: 11
                }, this);
            case "honors":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Honors & Activities",
                            style: style,
                            isStudentTemplate: isStudentTemplate,
                            rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: addHonor,
                                sx: {
                                    color: style.accent
                                },
                                "data-testid": "button-add-honor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1566,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1565,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1560,
                            columnNumber: 13
                        }, this),
                        !cv.honors || cv.honors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary,
                                fontStyle: "italic"
                            },
                            children: "Click + to add honors and activities"
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1571,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            },
                            children: cv.honors.map((honor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        position: "relative",
                                        "&:hover .delete-btn": {
                                            visibility: "visible"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            className: "delete-btn",
                                            size: "small",
                                            onClick: ()=>{
                                                const newHonors = (cv.honors || []).filter((_, i)=>i !== index);
                                                onUpdateCV({
                                                    ...cv,
                                                    honors: newHonors
                                                });
                                            },
                                            sx: {
                                                position: "absolute",
                                                right: 0,
                                                top: 0,
                                                visibility: "hidden",
                                                color: "error.main"
                                            },
                                            "data-testid": `button-delete-honor-${index}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1578,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                alignItems: "baseline",
                                                gap: 1,
                                                pr: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        color: style.bodyText,
                                                        lineHeight: 1.4,
                                                        flex: 1
                                                    },
                                                    component: "div",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                        value: honor.title,
                                                        onChange: (v)=>{
                                                            const newHonors = [
                                                                ...cv.honors || []
                                                            ];
                                                            newHonors[index] = {
                                                                ...newHonors[index],
                                                                title: v
                                                            };
                                                            onUpdateCV({
                                                                ...cv,
                                                                honors: newHonors
                                                            });
                                                        },
                                                        placeholder: "Honor, Award, or Activity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CVPreview.tsx",
                                                        lineNumber: 1592,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: style.bodyTextSecondary,
                                                        whiteSpace: "nowrap"
                                                    },
                                                    component: "div",
                                                    children: [
                                                        "(",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                            value: honor.year || "",
                                                            onChange: (v)=>{
                                                                const newHonors = [
                                                                    ...cv.honors || []
                                                                ];
                                                                newHonors[index] = {
                                                                    ...newHonors[index],
                                                                    year: v
                                                                };
                                                                onUpdateCV({
                                                                    ...cv,
                                                                    honors: newHonors
                                                                });
                                                            },
                                                            placeholder: "Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 24
                                                        }, this),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1602,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                color: style.bodyTextSecondary,
                                                lineHeight: 1.4,
                                                mt: 0.25,
                                                pr: 3
                                            },
                                            component: "div",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                                value: honor.description || "",
                                                onChange: (v)=>{
                                                    const newHonors = [
                                                        ...cv.honors || []
                                                    ];
                                                    newHonors[index] = {
                                                        ...newHonors[index],
                                                        description: v
                                                    };
                                                    onUpdateCV({
                                                        ...cv,
                                                        honors: newHonors
                                                    });
                                                },
                                                placeholder: "Optional description"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1615,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1614,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, honor.id, true, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1577,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1575,
                            columnNumber: 13
                        }, this)
                    ]
                }, "honors", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1559,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    // Render Student Modern header with dark teal design
    const renderStudentHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                bgcolor: style.headerBg
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        pt: 2.5,
                        pb: 1.5,
                        px: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h4",
                            component: "div",
                            sx: {
                                fontFamily: "'Arial', sans-serif",
                                fontWeight: 700,
                                fontSize: "2rem",
                                color: style.headerText,
                                letterSpacing: "-0.01em",
                                lineHeight: 1.1,
                                mb: 0.25
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: cv.name,
                                onChange: (v)=>updateField("name", v),
                                placeholder: "Your Name"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1650,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1641,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle1",
                            component: "div",
                            sx: {
                                color: style.accent,
                                fontWeight: 500,
                                fontSize: "0.95rem",
                                lineHeight: 1.3,
                                fontStyle: "italic",
                                mb: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: cv.title,
                                onChange: (v)=>updateField("title", v),
                                placeholder: "Your Title & Career Goal"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1660,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1652,
                            columnNumber: 9
                        }, this),
                        cv.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            component: "div",
                            sx: {
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                                lineHeight: 1.5,
                                maxWidth: "100%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: cv.summary,
                                onChange: (v)=>updateField("summary", v),
                                placeholder: "Write a brief professional summary...",
                                multiline: true,
                                rows: 2
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1670,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1664,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1640,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                        px: 3,
                        py: 1,
                        bgcolor: "rgba(0,0,0,0.15)",
                        borderTop: "1px solid rgba(255,255,255,0.1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Email$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 14,
                                        color: style.headerText
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1691,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    sx: {
                                        color: style.headerText,
                                        fontSize: "0.75rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                        value: cv.email,
                                        onChange: (v)=>updateField("email", v),
                                        placeholder: "email@edu.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1693,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1692,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1690,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 14,
                                        color: style.headerText
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1697,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    sx: {
                                        color: style.headerText,
                                        fontSize: "0.75rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                        value: cv.phone,
                                        onChange: (v)=>updateField("phone", v),
                                        placeholder: "(123) 456-7890"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1696,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 14,
                                        color: style.headerText
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1703,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    sx: {
                                        color: style.headerText,
                                        fontSize: "0.75rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                        value: cv.location,
                                        onChange: (v)=>updateField("location", v),
                                        placeholder: "City, State"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1705,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1704,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1702,
                            columnNumber: 9
                        }, this),
                        (cv.linkedin || true) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 14,
                                        color: style.headerText
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1710,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    sx: {
                                        color: style.headerText,
                                        fontSize: "0.75rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                        value: cv.linkedin || "",
                                        onChange: (v)=>updateField("linkedin", v),
                                        placeholder: "linkedin.com/in/yourname"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1712,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1711,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1709,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1681,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1639,
            columnNumber: 5
        }, this);
    // Render CV header (only on first page)
    const renderHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                bgcolor: style.headerBg,
                pt: 3,
                pb: 2,
                px: 3,
                color: style.headerText,
                borderBottom: style.borderBottom,
                textAlign: style.headerCentered ? "center" : "left"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h4",
                    component: "div",
                    sx: {
                        fontFamily: "'Arial', sans-serif",
                        fontWeight: 800,
                        fontSize: "2.25rem",
                        color: style.headerText,
                        display: style.headerCentered ? "block" : "inline-block",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.1,
                        textTransform: "uppercase"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: cv.name,
                        onChange: (v)=>updateField("name", v),
                        placeholder: "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1741,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1731,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "subtitle1",
                    component: "div",
                    sx: {
                        color: effectiveColors.secondary,
                        mt: 0.25,
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        lineHeight: 1.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: cv.title,
                        onChange: (v)=>updateField("title", v),
                        placeholder: "Your Title"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1750,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1743,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mt: 0.25,
                        justifyContent: style.headerCentered ? "center" : "flex-start"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Email$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.email,
                            onChange: (v)=>updateField("email", v),
                            placeholder: "email@example.com",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1760,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.phone,
                            onChange: (v)=>updateField("phone", v),
                            placeholder: "+1 234 567 890",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1767,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.location,
                            onChange: (v)=>updateField("location", v),
                            placeholder: "City, Country",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1774,
                            columnNumber: 9
                        }, this),
                        cv.linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.linkedin,
                            onChange: (v)=>updateField("linkedin", v),
                            placeholder: "linkedin.com/in/...",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1782,
                            columnNumber: 11
                        }, this),
                        showGitHub && cv.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GitHub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.github,
                            onChange: (v)=>updateField("github", v),
                            placeholder: "github.com/...",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1791,
                            columnNumber: 11
                        }, this),
                        cv.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableContactField, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                            value: cv.website,
                            onChange: (v)=>updateField("website", v),
                            placeholder: "yourwebsite.com",
                            headerText: style.headerText
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1800,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1753,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1722,
            columnNumber: 5
        }, this);
    const handleTemplateChange = (event)=>{
        if (onTemplateChange) {
            onTemplateChange(event.target.value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            bgcolor: "#e8e8e8",
            "@media print": {
                bgcolor: "transparent"
            }
        },
        children: [
            showToolbar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    px: 2,
                    py: 1,
                    bgcolor: "#fff",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    minHeight: 48,
                    "@media print": {
                        display: "none"
                    }
                },
                "data-testid": "cv-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle1",
                            sx: {
                                fontWeight: 600,
                                color: "text.primary"
                            },
                            children: "CV Preview"
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1850,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1849,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                size: "small",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SwapVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 24
                                }, void 0),
                                onClick: ()=>setRearrangeModalOpen(true),
                                sx: {
                                    textTransform: "none"
                                },
                                "data-testid": "button-rearrange-sections",
                                children: "Rearrange Sections"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                size: "small",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1871,
                                    columnNumber: 24
                                }, void 0),
                                onClick: (e)=>setColorAnchorEl(e.currentTarget),
                                sx: {
                                    textTransform: "none"
                                },
                                "data-testid": "button-color-scheme",
                                children: "Colors"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1868,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                open: Boolean(colorAnchorEl),
                                anchorEl: colorAnchorEl,
                                onClose: ()=>setColorAnchorEl(null),
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        p: 2,
                                        width: 280
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 600,
                                                mb: 1.5
                                            },
                                            children: "Color Scheme"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1888,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 1,
                                                mb: 2
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_SCHEME_PRESETS"].map((scheme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                    title: scheme.name,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        onClick: ()=>applyColorScheme(scheme),
                                                        sx: {
                                                            width: 40,
                                                            height: 28,
                                                            borderRadius: 1,
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            overflow: "hidden",
                                                            border: cv.colorScheme?.id === scheme.id ? "2px solid #000" : "1px solid #ddd",
                                                            "&:hover": {
                                                                opacity: 0.8
                                                            }
                                                        },
                                                        "data-testid": `color-preset-${scheme.id}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    flex: 1,
                                                                    bgcolor: scheme.primary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CVPreview.tsx",
                                                                lineNumber: 1908,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    flex: 1,
                                                                    bgcolor: scheme.secondary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CVPreview.tsx",
                                                                lineNumber: 1909,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CVPreview.tsx",
                                                        lineNumber: 1894,
                                                        columnNumber: 21
                                                    }, this)
                                                }, scheme.id, false, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1893,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1891,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                            sx: {
                                                my: 1.5
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1914,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.secondary",
                                                display: "block",
                                                mb: 1
                                            },
                                            children: "Custom Colors"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1915,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                gap: 2,
                                                mb: 1.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "caption",
                                                            sx: {
                                                                color: "text.secondary",
                                                                fontSize: "0.7rem"
                                                            },
                                                            children: "Primary (Name/Headers)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1920,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 1,
                                                                mt: 0.5
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "color",
                                                                    value: customPrimary,
                                                                    onChange: (e)=>setCustomPrimary(e.target.value),
                                                                    style: {
                                                                        width: 32,
                                                                        height: 24,
                                                                        cursor: "pointer",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: 4
                                                                    },
                                                                    "data-testid": "input-custom-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CVPreview.tsx",
                                                                    lineNumber: 1924,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    variant: "caption",
                                                                    sx: {
                                                                        fontFamily: "monospace",
                                                                        fontSize: "0.7rem"
                                                                    },
                                                                    children: customPrimary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CVPreview.tsx",
                                                                    lineNumber: 1931,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1923,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "caption",
                                                            sx: {
                                                                color: "text.secondary",
                                                                fontSize: "0.7rem"
                                                            },
                                                            children: "Secondary (Subtitle)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1937,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 1,
                                                                mt: 0.5
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "color",
                                                                    value: customSecondary,
                                                                    onChange: (e)=>setCustomSecondary(e.target.value),
                                                                    style: {
                                                                        width: 32,
                                                                        height: 24,
                                                                        cursor: "pointer",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: 4
                                                                    },
                                                                    "data-testid": "input-custom-secondary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CVPreview.tsx",
                                                                    lineNumber: 1941,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    variant: "caption",
                                                                    sx: {
                                                                        fontFamily: "monospace",
                                                                        fontSize: "0.7rem"
                                                                    },
                                                                    children: customSecondary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CVPreview.tsx",
                                                                    lineNumber: 1948,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1940,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1936,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "contained",
                                            size: "small",
                                            fullWidth: true,
                                            onClick: applyCustomColors,
                                            sx: {
                                                textTransform: "none",
                                                mt: 1
                                            },
                                            "data-testid": "button-apply-custom-colors",
                                            children: "Apply Custom Colors"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1954,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1887,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1880,
                                columnNumber: 11
                            }, this),
                            onTemplateChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                        size: "small",
                                        sx: {
                                            minWidth: 220
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                id: "cv-template-label",
                                                sx: {
                                                    fontSize: "0.8rem"
                                                },
                                                children: "Template"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1969,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                labelId: "cv-template-label",
                                                value: template,
                                                label: "Template",
                                                onChange: handleTemplateChange,
                                                "data-testid": "select-cv-template",
                                                sx: {
                                                    fontSize: "0.8rem"
                                                },
                                                MenuProps: {
                                                    PaperProps: {
                                                        sx: {
                                                            "& .MuiMenuItem-root": {
                                                                fontSize: "0.8rem",
                                                                py: 0.75
                                                            }
                                                        }
                                                    }
                                                },
                                                renderValue: (value)=>{
                                                    const t = allTemplates.find((opt)=>opt.value === value);
                                                    return t?.label || value;
                                                },
                                                children: allTemplates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                        value: t.value,
                                                        children: t.label
                                                    }, t.value, false, {
                                                        fileName: "[project]/components/CVPreview.tsx",
                                                        lineNumber: 1988,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1968,
                                        columnNumber: 15
                                    }, this),
                                    !templateRecommendation.isRecommended && templateRecommendation.warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: templateRecommendation.warning,
                                        placement: "top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                color: "warning.main",
                                                cursor: "help",
                                                fontSize: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    component: "span",
                                                    sx: {
                                                        fontSize: "1rem"
                                                    },
                                                    children: "⚠"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 2006,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: "warning.main",
                                                        fontWeight: 500
                                                    },
                                                    children: "Not recommended"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 2007,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1996,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1995,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1967,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1855,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 1831,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflow: "auto",
                    py: 2,
                    pl: "50px",
                    pr: 1.5,
                    "@media print": {
                        overflow: "visible",
                        padding: 0
                    }
                },
                children: pages.map((page, pageIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                        elevation: 3,
                        sx: {
                            ...a4PageStyle,
                            overflow: "visible",
                            mb: pageIdx < pages.length - 1 ? 3 : 0
                        },
                        "data-testid": pageIdx === 0 ? "cv-preview" : `cv-page-${page.pageNumber}`,
                        children: page.isFirstPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                isStudentTemplate ? renderStudentHeader() : renderHeader(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        pt: 1.5,
                                        px: 3,
                                        pb: `${BOTTOM_GUTTER}px`,
                                        color: style.bodyText
                                    },
                                    children: page.items.map((item, idx)=>renderItem(item, idx === page.items.length - 1, page.items))
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 2044,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageBadge, {
                                    pageNumber: page.pageNumber,
                                    totalPages: totalPages
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 2052,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        p: 3,
                                        color: style.bodyText,
                                        pb: `${BOTTOM_GUTTER}px`
                                    },
                                    children: page.items.map((item, idx)=>renderItem(item, idx === page.items.length - 1, page.items))
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 2053,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, page.pageNumber, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 2031,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 2019,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionRearrangeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionRearrangeModal"], {
                open: rearrangeModalOpen,
                onClose: ()=>setRearrangeModalOpen(false),
                sectionOrder: sectionOrder,
                onApply: applySectionOrder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 2064,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 1819,
        columnNumber: 5
    }, this);
}
_s2(CVPreview, "N3iFtBR6VbSoYqaXJcoIdruJuNI=");
_c5 = CVPreview;
function EditableSkillChip({ skill, accentColor, onUpdate, onDelete, testId, compact = false }) {
    _s3();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempValue, setTempValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(skill);
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
            size: "small",
            value: tempValue,
            onChange: (e)=>setTempValue(e.target.value),
            onBlur: ()=>{
                if (tempValue.trim()) {
                    onUpdate(tempValue);
                }
                setEditing(false);
            },
            onKeyDown: (e)=>{
                if (e.key === "Enter") {
                    if (tempValue.trim()) {
                        onUpdate(tempValue);
                    }
                    setEditing(false);
                }
                if (e.key === "Escape") {
                    setTempValue(skill);
                    setEditing(false);
                }
            },
            autoFocus: true,
            sx: {
                width: compact ? 100 : 120
            }
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 2094,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
        label: skill,
        size: "small",
        onClick: ()=>{
            setTempValue(skill);
            setEditing(true);
        },
        onDelete: onDelete,
        sx: {
            bgcolor: `${accentColor}20`,
            color: accentColor,
            border: `1px solid ${accentColor}40`,
            cursor: "pointer",
            fontWeight: 500,
            fontSize: compact ? "0.7rem" : "0.8125rem",
            height: compact ? 22 : 24,
            "& .MuiChip-label": {
                px: compact ? 0.75 : 1
            },
            "& .MuiChip-deleteIcon": {
                color: accentColor,
                opacity: 0.6,
                fontSize: compact ? 14 : 16,
                "&:hover": {
                    opacity: 1
                }
            }
        },
        "data-testid": testId
    }, void 0, false, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 2123,
        columnNumber: 5
    }, this);
}
_s3(EditableSkillChip, "fCasShJYxqyR28nbB72wuUgcLlQ=");
_c6 = EditableSkillChip;
function EditableCertChip({ cert, accentColor, bodyText, onUpdateName, onUpdateIssuer, onDelete, testId }) {
    _s4();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempName, setTempName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cert.name);
    const [tempIssuer, setTempIssuer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cert.issuer);
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                gap: 0.5,
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                    size: "small",
                    value: tempName,
                    onChange: (e)=>setTempName(e.target.value),
                    placeholder: "Cert name",
                    sx: {
                        width: 120
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 2178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                    size: "small",
                    value: tempIssuer,
                    onChange: (e)=>setTempIssuer(e.target.value),
                    placeholder: "Issuer",
                    sx: {
                        width: 100
                    },
                    onBlur: ()=>{
                        if (tempName.trim()) {
                            onUpdateName(tempName);
                            onUpdateIssuer(tempIssuer);
                        }
                        setEditing(false);
                    },
                    onKeyDown: (e)=>{
                        if (e.key === "Enter") {
                            if (tempName.trim()) {
                                onUpdateName(tempName);
                                onUpdateIssuer(tempIssuer);
                            }
                            setEditing(false);
                        }
                        if (e.key === "Escape") {
                            setTempName(cert.name);
                            setTempIssuer(cert.issuer);
                            setEditing(false);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 2185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 2177,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
        label: cert.issuer ? `${cert.name} - ${cert.issuer}` : cert.name,
        size: "small",
        onClick: ()=>{
            setTempName(cert.name);
            setTempIssuer(cert.issuer);
            setEditing(true);
        },
        onDelete: onDelete,
        sx: {
            bgcolor: `${accentColor}30`,
            color: accentColor,
            border: `1px solid ${accentColor}50`,
            cursor: "pointer",
            fontWeight: 500,
            "& .MuiChip-deleteIcon": {
                color: accentColor,
                opacity: 0.7,
                "&:hover": {
                    opacity: 1
                }
            }
        },
        "data-testid": testId
    }, void 0, false, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 2218,
        columnNumber: 5
    }, this);
}
_s4(EditableCertChip, "3EdL1+m+tzEZbknrHsPmZAFVLoo=");
_c7 = EditableCertChip;
function EditableStrengthChip({ strength, accentColor, onUpdate, onDelete, testId }) {
    _s5();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempValue, setTempValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(strength);
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
            size: "small",
            value: tempValue,
            onChange: (e)=>setTempValue(e.target.value),
            onBlur: ()=>{
                if (tempValue.trim()) {
                    onUpdate(tempValue);
                }
                setEditing(false);
            },
            onKeyDown: (e)=>{
                if (e.key === "Enter") {
                    if (tempValue.trim()) {
                        onUpdate(tempValue);
                    }
                    setEditing(false);
                }
                if (e.key === "Escape") {
                    setTempValue(strength);
                    setEditing(false);
                }
            },
            autoFocus: true,
            sx: {
                width: 180
            }
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 2262,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
        label: strength,
        size: "small",
        onClick: ()=>{
            setTempValue(strength);
            setEditing(true);
        },
        onDelete: onDelete,
        sx: {
            bgcolor: `${accentColor}30`,
            color: accentColor,
            border: `1px solid ${accentColor}50`,
            cursor: "pointer",
            fontWeight: 500,
            "& .MuiChip-deleteIcon": {
                color: accentColor,
                opacity: 0.7,
                "&:hover": {
                    opacity: 1
                }
            }
        },
        "data-testid": testId
    }, void 0, false, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 2291,
        columnNumber: 5
    }, this);
}
_s5(EditableStrengthChip, "1ggdRo3PxNHLsqi22xu8QsgEMt0=");
_c8 = EditableStrengthChip;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "PageBadge");
__turbopack_context__.k.register(_c1, "PageBreakIndicator");
__turbopack_context__.k.register(_c2, "SectionHeader");
__turbopack_context__.k.register(_c3, "EditableField");
__turbopack_context__.k.register(_c4, "EditableContactField");
__turbopack_context__.k.register(_c5, "CVPreview");
__turbopack_context__.k.register(_c6, "EditableSkillChip");
__turbopack_context__.k.register(_c7, "EditableCertChip");
__turbopack_context__.k.register(_c8, "EditableStrengthChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_CVPreview_tsx_0d254050._.js.map