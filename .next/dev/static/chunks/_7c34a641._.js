(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HomeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/HomeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FolderOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FolderOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BusinessCenterOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BusinessCenterOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatBubbleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChatBubbleOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccessTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccessTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/InboxOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarTodayOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CalendarTodayOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EventOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/EventOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GroupOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GroupOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridViewOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GridViewOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PublicOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PublicOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronLeft.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
const mainMenuItems = [
    {
        id: "home",
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HomeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "opportunities",
        label: "Opportunities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "my-work",
        label: "My Work",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FolderOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "jobs",
        label: "Jobs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BusinessCenterOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "ai-career-chat",
        label: "AI career chat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatBubbleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
const communicationItems = [
    {
        id: "timeline",
        label: "Timeline",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccessTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "inbox",
        label: "Inbox",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarTodayOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "events",
        label: "Events",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EventOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "my-communities",
        label: "My Communities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GroupOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
const defaultSpacesItems = [
    {
        id: "department-wall",
        label: "Department Wall",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridViewOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "national-network",
        label: "National Network",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PublicOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
function Sidebar({ activeItem, onItemClick }) {
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const EXPANDED_WIDTH = 240;
    const COLLAPSED_WIDTH = 64;
    const renderMenuItem = (item)=>{
        const Icon = item.icon;
        const isActive = activeItem === item.id;
        const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
            onClick: ()=>onItemClick(item.id),
            sx: {
                borderRadius: 2,
                py: 1,
                px: collapsed ? 1.5 : 1.5,
                justifyContent: collapsed ? "center" : "flex-start",
                bgcolor: isActive ? "rgba(79, 70, 229, 0.08)" : "transparent",
                "&:hover": {
                    bgcolor: isActive ? "rgba(79, 70, 229, 0.12)" : "action.hover"
                }
            },
            "data-testid": `menu-${item.id}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                    sx: {
                        minWidth: collapsed ? 0 : 36,
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        sx: {
                            color: isActive ? "primary.main" : "text.secondary",
                            fontSize: 22
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                    primary: item.label,
                    primaryTypographyProps: {
                        fontSize: 14,
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "primary.main" : "text.primary"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
            disablePadding: true,
            sx: {
                mb: 0.5
            },
            children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                title: item.label,
                placement: "right",
                arrow: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 90,
                columnNumber: 11
            }, this) : button
        }, item.id, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
            minWidth: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
            height: "100vh",
            bgcolor: "background.paper",
            borderRight: 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            transition: "width 0.2s ease, min-width 0.2s ease"
        },
        "data-testid": "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: collapsed ? "center" : "flex-end",
                    p: 1,
                    borderBottom: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    onClick: ()=>setCollapsed(!collapsed),
                    size: "small",
                    "data-testid": "button-toggle-sidebar",
                    children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 129,
                        columnNumber: 24
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 129,
                        columnNumber: 39
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflow: "auto",
                    px: collapsed ? 0.5 : 1.5,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        disablePadding: true,
                        children: mainMenuItems.map(renderMenuItem)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            display: "block",
                            px: 1.5,
                            pt: 2,
                            pb: 1,
                            color: "text.secondary",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: 11
                        },
                        children: "Communication"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        disablePadding: true,
                        children: communicationItems.map(renderMenuItem)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            display: "block",
                            px: 1.5,
                            pt: 2,
                            pb: 1,
                            color: "text.secondary",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: 11
                        },
                        children: "Default Spaces"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        disablePadding: true,
                        children: defaultSpacesItems.map(renderMenuItem)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "v9q8u3mX6e8FrJZVev9WfYlHYUo=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NotificationsNone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NotificationsNone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BookmarkBorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatBubbleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChatBubbleOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PersonOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Tune$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Tune.js [app-client] (ecmascript)");
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
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
        position: "static",
        elevation: 0,
        sx: {
            bgcolor: "background.paper",
            borderBottom: 1,
            borderColor: "divider"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
            sx: {
                gap: 2,
                justifyContent: "space-between",
                minHeight: 56,
                px: 2
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: 32,
                                height: 32,
                                background: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 18
                                },
                                children: "E"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h6",
                            sx: {
                                fontWeight: 700,
                                color: "primary.main",
                                fontSize: 18
                            },
                            "data-testid": "header-logo",
                            children: "EduNatives"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flex: 1,
                        maxWidth: 500,
                        mx: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                            placeholder: "What are You looking for?",
                            size: "small",
                            fullWidth: true,
                            InputProps: {
                                startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                    position: "start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            color: "text.secondary",
                                            fontSize: 20
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, void 0),
                                sx: {
                                    borderRadius: 2,
                                    bgcolor: "grey.50",
                                    "& fieldset": {
                                        border: "none"
                                    },
                                    fontSize: 14
                                }
                            },
                            "data-testid": "input-search"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "text",
                            size: "small",
                            sx: {
                                color: "text.secondary",
                                textTransform: "none",
                                whiteSpace: "nowrap",
                                minWidth: "auto",
                                px: 1
                            },
                            children: "People"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "outlined",
                            size: "small",
                            startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Tune$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 18
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 24
                            }, void 0),
                            sx: {
                                borderColor: "divider",
                                color: "text.primary",
                                textTransform: "none",
                                borderRadius: 2,
                                whiteSpace: "nowrap"
                            },
                            "data-testid": "button-filter",
                            children: "Filter"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            sx: {
                                bgcolor: "primary.main",
                                color: "white",
                                width: 32,
                                height: 32,
                                "&:hover": {
                                    bgcolor: "primary.dark"
                                }
                            },
                            "data-testid": "button-add",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            "data-testid": "button-bookmarks",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    color: "text.secondary",
                                    fontSize: 22
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            "data-testid": "button-messages",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatBubbleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    color: "text.secondary",
                                    fontSize: 22
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            "data-testid": "button-notifications",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                badgeContent: 3,
                                color: "error",
                                variant: "dot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NotificationsNone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "text.secondary",
                                        fontSize: 22
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            "data-testid": "button-user-menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    width: 32,
                                    height: 32,
                                    bgcolor: "grey.200"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 20,
                                        color: "grey.500"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    y = 65;
    const addSection = (title)=>{
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
                after: 300
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
                before: 400,
                after: 150
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
"[project]/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardActions/CardActions.js [app-client] (ecmascript) <export default as CardActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ContentCopy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileDownload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FileDownload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccessTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccessTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$exportCV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/exportCV.ts [app-client] (ecmascript)");
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
function Dashboard({ cvs, onUploadNew, onSelectCV, onDeleteCV, onDuplicateCV }) {
    const formatDate = (dateValue)=>{
        if (!dateValue) return "Just now";
        const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;
        return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const handleDownload = async (cv)=>{
        const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.pdf`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$exportCV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToPDF"])(cv, filename, "modern-dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            p: 4,
            maxWidth: 1400,
            mx: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h4",
                sx: {
                    mb: 4,
                    fontWeight: 600
                },
                children: "My Resumes"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                sx: {
                    mb: 2,
                    fontWeight: 500
                },
                children: "Upload your resume"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    mb: 4,
                    border: "2px dashed",
                    borderColor: "primary.light",
                    bgcolor: "rgba(47, 84, 235, 0.04)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(47, 84, 235, 0.08)"
                    }
                },
                onClick: onUploadNew,
                "data-testid": "card-upload-new",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        py: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: 140,
                                height: 180,
                                border: "2px dashed",
                                borderColor: "primary.light",
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "rgba(47, 84, 235, 0.06)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 48,
                                    color: "primary.main"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 1
                                    },
                                    children: "Upload your resume"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: "Create a customized resume for each job application to increase your chances of success."
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            cvs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    flex: 1,
                                    height: "1px",
                                    bgcolor: "divider"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                children: "OR"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    flex: 1,
                                    height: "1px",
                                    bgcolor: "divider"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            mb: 2,
                            fontWeight: 500
                        },
                        children: "Use existing resume"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        container: true,
                        spacing: 3,
                        children: cvs.map((cv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: {
                                    xs: 12,
                                    sm: 6,
                                    lg: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    sx: {
                                        height: "100%",
                                        display: "flex",
                                        transition: "box-shadow 0.2s ease",
                                        "&:hover": {
                                            boxShadow: 4
                                        }
                                    },
                                    "data-testid": `card-cv-${cv.id}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                width: 140,
                                                minHeight: 180,
                                                bgcolor: "grey.100",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                borderRight: "1px solid",
                                                borderColor: "divider"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    textAlign: "center",
                                                    color: "text.secondary"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            fontSize: 40,
                                                            opacity: 0.5
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        display: "block",
                                                        children: "Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                                    sx: {
                                                        flex: 1,
                                                        pb: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "subtitle1",
                                                            sx: {
                                                                fontWeight: 600,
                                                                mb: 0.5
                                                            },
                                                            children: cv.name || "Untitled Resume"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 0.5,
                                                                mb: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccessTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 14,
                                                                        color: "text.secondary"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    variant: "caption",
                                                                    color: "text.secondary",
                                                                    children: [
                                                                        "Modified: ",
                                                                        formatDate(cv.uploadedAt)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                            label: "Resume",
                                                            size: "small",
                                                            sx: {
                                                                bgcolor: "primary.main",
                                                                color: "white",
                                                                fontWeight: 500,
                                                                fontSize: "0.7rem"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActions$3e$__["CardActions"], {
                                                    sx: {
                                                        pt: 0,
                                                        flexDirection: "column",
                                                        alignItems: "flex-start",
                                                        gap: 0.5,
                                                        px: 2,
                                                        pb: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            onClick: ()=>onSelectCV(cv),
                                                            sx: {
                                                                color: "text.primary",
                                                                justifyContent: "flex-start",
                                                                p: 0,
                                                                minWidth: "auto"
                                                            },
                                                            "data-testid": `button-edit-cv-${cv.id}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 16,
                                                                        mr: 0.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Edit"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            onClick: ()=>onDuplicateCV(cv),
                                                            sx: {
                                                                color: "text.primary",
                                                                justifyContent: "flex-start",
                                                                p: 0,
                                                                minWidth: "auto"
                                                            },
                                                            "data-testid": `button-copy-cv-${cv.id}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 16,
                                                                        mr: 0.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Make a copy"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            onClick: ()=>handleDownload(cv),
                                                            sx: {
                                                                color: "text.primary",
                                                                justifyContent: "flex-start",
                                                                p: 0,
                                                                minWidth: "auto"
                                                            },
                                                            "data-testid": `button-download-cv-${cv.id}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileDownload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 16,
                                                                        mr: 0.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Download"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            onClick: ()=>onDeleteCV(cv.id),
                                                            sx: {
                                                                color: "error.main",
                                                                justifyContent: "flex-start",
                                                                p: 0,
                                                                minWidth: "auto"
                                                            },
                                                            "data-testid": `button-delete-cv-${cv.id}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 16,
                                                                        mr: 0.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Delete"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            }, cv.id, false, {
                                fileName: "[project]/components/Dashboard.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SectionRearrangeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionRearrangeModal",
    ()=>SectionRearrangeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Lock.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SECTION_LABELS = {
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    certifications: "Certifications",
    strengths: "Key Strengths"
};
function SectionRearrangeModal({ open, onClose, sectionOrder, onApply }) {
    _s();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sectionOrder);
    const [draggedIndex, setDraggedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverIndex, setDragOverIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionRearrangeModal.useEffect": ()=>{
            if (open) {
                setOrder(sectionOrder);
            }
        }
    }["SectionRearrangeModal.useEffect"], [
        open,
        sectionOrder
    ]);
    const handleDragStart = (index)=>{
        setDraggedIndex(index);
    };
    const handleDragOver = (e, index)=>{
        e.preventDefault();
        if (draggedIndex !== null && draggedIndex !== index) {
            setDragOverIndex(index);
        }
    };
    const handleDragEnd = ()=>{
        if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
            const newOrder = [
                ...order
            ];
            const [removed] = newOrder.splice(draggedIndex, 1);
            newOrder.splice(dragOverIndex, 0, removed);
            setOrder(newOrder);
        }
        setDraggedIndex(null);
        setDragOverIndex(null);
    };
    const handleDragLeave = ()=>{
        setDragOverIndex(null);
    };
    const handleApply = ()=>{
        onApply(order);
        onClose();
    };
    const handleClose = ()=>{
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: handleClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            sx: {
                borderRadius: 2
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        fontWeight: 600,
                        children: "Hold & Drag the boxes to rearrange the sections"
                    }, void 0, false, {
                        fileName: "[project]/components/SectionRearrangeModal.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: handleClose,
                        size: "small",
                        "data-testid": "button-close-rearrange",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/SectionRearrangeModal.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SectionRearrangeModal.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SectionRearrangeModal.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                sx: {
                    pt: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                    variant: "outlined",
                    sx: {
                        p: 2,
                        bgcolor: "grey.50",
                        borderRadius: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                p: 1.5,
                                mb: 1,
                                bgcolor: "#e3e8f0",
                                borderRadius: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                opacity: 0.7
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 18,
                                        color: "text.secondary"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/SectionRearrangeModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    fontWeight: 500,
                                    color: "text.secondary",
                                    children: "Header (Name & Contact)"
                                }, void 0, false, {
                                    fileName: "[project]/components/SectionRearrangeModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SectionRearrangeModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        order.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                draggable: true,
                                onDragStart: ()=>handleDragStart(index),
                                onDragOver: (e)=>handleDragOver(e, index),
                                onDragEnd: handleDragEnd,
                                onDragLeave: handleDragLeave,
                                "data-testid": `draggable-section-${section}`,
                                sx: {
                                    p: 1.5,
                                    mb: 1,
                                    bgcolor: dragOverIndex === index ? "primary.light" : "#e3e8f0",
                                    borderRadius: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    cursor: "grab",
                                    transition: "all 0.15s ease",
                                    transform: draggedIndex === index ? "scale(1.02)" : "scale(1)",
                                    boxShadow: draggedIndex === index ? 2 : 0,
                                    opacity: draggedIndex === index ? 0.8 : 1,
                                    "&:hover": {
                                        bgcolor: "#d5dce8"
                                    },
                                    "&:active": {
                                        cursor: "grabbing"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 20,
                                            color: "text.secondary"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/SectionRearrangeModal.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        fontWeight: 500,
                                        children: SECTION_LABELS[section]
                                    }, void 0, false, {
                                        fileName: "[project]/components/SectionRearrangeModal.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, section, true, {
                                fileName: "[project]/components/SectionRearrangeModal.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SectionRearrangeModal.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SectionRearrangeModal.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    px: 3,
                    pb: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "contained",
                    color: "primary",
                    onClick: handleApply,
                    fullWidth: true,
                    sx: {
                        textTransform: "none",
                        fontWeight: 600,
                        py: 1.2
                    },
                    "data-testid": "button-apply-rearrange",
                    children: "Apply Changes"
                }, void 0, false, {
                    fileName: "[project]/components/SectionRearrangeModal.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SectionRearrangeModal.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionRearrangeModal.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(SectionRearrangeModal, "aD5oSvrEQ+NdKQ8o4IxoDpDmyM4=");
_c = SectionRearrangeModal;
var _c;
__turbopack_context__.k.register(_c, "SectionRearrangeModal");
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
    "JD_MATCH_WEIGHTS",
    ()=>JD_MATCH_WEIGHTS,
    "RESPONSE_GUIDELINES",
    ()=>RESPONSE_GUIDELINES,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
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
- skills: Array of technical and soft skills as strings
- strengths: Array of key professional strengths (e.g., "Strategic Leadership", "Cross-functional Collaboration", "Results-Driven Execution"). Extract 3-5 high-level strengths that summarize the candidate's core value proposition.

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
    hardSkills: 40,
    experience: 25,
    responsibilities: 20,
    softSkills: 10,
    education: 5
};
function buildJDMatchPrompt(cvSummary, jobDescription) {
    const sanitizedJD = sanitizeAIInput(jobDescription, TOKEN_LIMITS.maxJobDescriptionLength);
    // Check for injection attempts
    if (containsInjectionAttempt(sanitizedJD)) {
        throw new Error("Security: Suspicious content detected in job description");
    }
    return `You are the EduNatives Recruitment Match Engine.

Act as an ATS (Applicant Tracking System) and Senior Recruiter to determine the fit.

--- INPUTS ---
CANDIDATE CV:
"""
${cvSummary}
"""

JOB DESCRIPTION:
"""
${sanitizedJD}
"""

--- SCORING RUBRIC (Strict) ---
Calculate 'overall_match_score' based on these ranges:
- 85-100: Excellent Match
- 70-84: Good Match
- 55-69: Partial Match
- Below 55: Limited Match

Weights: Hard Skills (${JD_MATCH_WEIGHTS.hardSkills}%), Experience (${JD_MATCH_WEIGHTS.experience}%), Responsibilities (${JD_MATCH_WEIGHTS.responsibilities}%), Soft Skills (${JD_MATCH_WEIGHTS.softSkills}%), Education (${JD_MATCH_WEIGHTS.education}%).

--- OUTPUT SCHEMA ---
Return ONLY a valid JSON object:
{
  "jd_parsing": {
    "role_title": "<extracted job title>",
    "company": "<company name if mentioned>",
    "mandatory_skills": ["<required skill 1>", "<skill 2>", ...],
    "nice_to_have_skills": ["<preferred skill 1>", "<skill 2>", ...]
  },
  "match_analysis": {
    "overall_match_score": <number 0-100>,
    "verdict": "<Excellent Match / Good Match / Partial Match / Limited Match>",
    "summary": "<2-3 sentences explaining the fit>",
    "matched_skills": ["<skill from CV that matches>", ...],
    "missing_skills": ["<required skill not in CV>", ...],
    "experience_match": {
        "score": <0-100>,
        "feedback": "<specific feedback about experience alignment>"
    },
    "education_match": {
        "score": <0-100>,
        "feedback": "<specific feedback about education requirements>"
    },
    "keyword_optimizations": [
        "<keyword from JD to add to CV for ATS>",
        "<keyword 2>",
        "<keyword 3>"
    ],
    "suggestions": [
        "<actionable advice 1>",
        "<advice 2>",
        "<advice 3>"
    ]
  },
  "evidence_map": [
    {
      "jd_requirement": "<e.g., '5+ years React'>",
      "cv_evidence": "<e.g., 'Senior Frontend Dev 2018-2023'>",
      "status": "Match"
    },
    {
      "jd_requirement": "<requirement from JD>",
      "cv_evidence": "<partial evidence or 'Not found'>",
      "status": "Weak"
    },
    {
      "jd_requirement": "<missing requirement>",
      "cv_evidence": "Not found in CV",
      "status": "Missing"
    }
  ]
}

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks
- Parse the JD to extract mandatory vs nice-to-have skills
- Build evidence_map with at least 5 key requirement-to-evidence mappings
- Be specific about which skills match and which are missing
- Consider both hard skills and soft skills
- Provide actionable suggestions for improving the match`;
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
    return cleaned.trim();
}
function repairJSON(jsonStr) {
    let repaired = jsonStr.trim();
    // Fix unterminated strings by finding the last proper JSON structure
    // Count quotes to detect unterminated strings (outside of escaped quotes)
    let inString = false;
    let lastValidPos = 0;
    let i = 0;
    while(i < repaired.length){
        const char = repaired[i];
        const prevChar = i > 0 ? repaired[i - 1] : "";
        if (char === '"' && prevChar !== "\\") {
            inString = !inString;
            if (!inString) {
                lastValidPos = i + 1;
            }
        } else if (!inString && (char === "}" || char === "]" || char === ",")) {
            lastValidPos = i + 1;
        }
        i++;
    }
    // If we're still in a string at the end, truncate to last valid position and close
    if (inString && lastValidPos > 0) {
        repaired = repaired.slice(0, lastValidPos);
    } else if (inString) {
        // Try to close the string by adding a quote
        repaired = repaired.replace(/,?\s*"[^"]*$/, "");
    }
    // Remove trailing incomplete key-value pairs and dangling structures
    repaired = repaired.replace(/,?\s*"[^"]*":\s*$/, ""); // key with no value
    repaired = repaired.replace(/,?\s*"[^"]*":\s*"[^"]*$/, ""); // key with unterminated string value
    repaired = repaired.replace(/,?\s*"[^"]*$/, ""); // incomplete key
    repaired = repaired.replace(/:\s*$/, ": null"); // dangling colon
    // Count brackets to detect truncation
    const openBraces = (repaired.match(/{/g) || []).length;
    const closeBraces = (repaired.match(/}/g) || []).length;
    const openBrackets = (repaired.match(/\[/g) || []).length;
    const closeBrackets = (repaired.match(/]/g) || []).length;
    // Add missing closing brackets/braces
    const missingBrackets = openBrackets - closeBrackets;
    const missingBraces = openBraces - closeBraces;
    if (missingBrackets > 0 || missingBraces > 0) {
        // Remove trailing comma if present
        repaired = repaired.replace(/,\s*$/, "");
        // Add missing closures
        repaired += "]".repeat(Math.max(0, missingBrackets));
        repaired += "}".repeat(Math.max(0, missingBraces));
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
    },
    "hr_view": {
      "executive_summary": {
        "candidate_name": "String",
        "target_role": "String",
        "overall_assessment": "String",
        "recommendation": "Strong Recommend|Recommend|Consider|Do Not Recommend",
        "confidence": Number (0-1)
      },
      "scores": {"raw_score": Number, "risk_score": Number, "validation_rate": "String", "integrity_rating": "String", "nature_fit_score": Number},
      "risk_summary": {"critical_flags": ["String"], "high_flags": ["String"], "medium_flags": ["String"], "low_flags": ["String"], "nature_flags": ["String"]},
      "verification_suggestions": [{"area": "String", "question": "String", "why": "String"}],
      "hiring_notes": "String"
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Edit.js [app-client] (ecmascript)");
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
function SectionHeader({ title, style, rightContent }) {
    const isUnderline = style.sectionHeaderVariant === "underline";
    const isCenteredLines = style.sectionHeaderVariant === "centeredLines";
    const isLeftBorder = style.sectionHeaderVariant === "leftBorder";
    if (isLeftBorder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: 1.5,
                mt: 2
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
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    rightContent
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            mb: 1
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
                        lineNumber: 150,
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
                        lineNumber: 151,
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
                        lineNumber: 164,
                        columnNumber: 29
                    }, this),
                    !isCenteredLines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 165,
                        columnNumber: 30
                    }, this),
                    rightContent
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 149,
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
                lineNumber: 169,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c2 = SectionHeader;
function EditableField({ value, onChange, multiline = false, placeholder = "(click to edit)", rows = 3, showBulletTool = false }) {
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
                position: "relative"
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
                        my: 0.5,
                        "& .MuiInputBase-input": {
                            fontSize: "0.8rem"
                        }
                    },
                    slotProps: showBulletTool && multiline ? {
                        input: {
                            startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                position: "start",
                                sx: {
                                    alignSelf: "flex-start",
                                    mt: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: "Add bullet point (new line)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: insertBullet,
                                        "data-action-btn": "true",
                                        "data-testid": "button-insert-bullet",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 276,
                                            columnNumber: 23
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 270,
                                        columnNumber: 21
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, void 0)
                        }
                    } : undefined
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this),
                multiline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 1,
                        mt: 0.5
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
                                    lineNumber: 294,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 286,
                            columnNumber: 13
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
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 237,
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    whiteSpace: multiline ? "pre-wrap" : "normal",
                    display: multiline ? "block" : "inline"
                },
                children: value || placeholder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    fontSize: 14,
                    opacity: 0.5,
                    position: multiline ? "absolute" : "static",
                    top: multiline ? 4 : undefined,
                    right: multiline ? 4 : undefined
                }
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 322,
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
                    fontSize: "small"
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 369,
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
                            fontSize: "0.875rem"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(255,255,255,0.3)"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 368,
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
                fontSize: "small"
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body2",
                children: value || placeholder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    fontSize: 12,
                    opacity: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_s1(EditableContactField, "SJ+HDEV6k7f5FaedjXhs9FZDLYA=");
_c4 = EditableContactField;
function CVPreview({ cv, template, onUpdateCV, onTemplateChange }) {
    _s2();
    const templateOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateOptions"])();
    const sectionOrder = cv.sectionOrder || __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SECTION_ORDER"];
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
    const HEADER_HEIGHT_PX = 130; // Header height with contact info (increased for accuracy)
    const PAGE_PADDING_PX = 24; // p: 3 = 24px padding
    const BOTTOM_GUTTER = 12; // Minimal gutter to maximize content space
    // Calculate page assignments with entry-level splitting
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CVPreview.useMemo[pages]": ()=>{
            const AVAILABLE_FIRST = A4_HEIGHT_PX - HEADER_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER;
            const AVAILABLE_SUBSEQUENT = A4_HEIGHT_PX - PAGE_PADDING_PX * 2 - BOTTOM_GUTTER - 32; // 32 for PageBadge
            const SECTION_HEADER = 36; // Reduced from 48 - actual header with margin
            const LINE_HEIGHT = 20; // More accurate line height
            const CHARS_PER_LINE = 80; // More chars fit per line at body2 font size
            // Height estimation functions - tighter estimates to minimize white space
            const estimateSummaryHeight = {
                "CVPreview.useMemo[pages].estimateSummaryHeight": ()=>{
                    const text = cv.summary || "";
                    const lines = Math.ceil(text.length / CHARS_PER_LINE);
                    // Account for boxed summary padding if applicable
                    const boxPadding = style.summaryBoxed ? 24 : 0;
                    return SECTION_HEADER + lines * LINE_HEIGHT + boxPadding + 8;
                }
            }["CVPreview.useMemo[pages].estimateSummaryHeight"];
            const estimateExperienceEntryHeight = {
                "CVPreview.useMemo[pages].estimateExperienceEntryHeight": (exp)=>{
                    const headerHeight = 64; // Title, company, date lines - tighter
                    const desc = exp.description || "";
                    // Count actual newlines for bullet points
                    const bulletLines = (desc.match(/\n/g) || []).length + 1;
                    const textLines = Math.ceil(desc.length / CHARS_PER_LINE);
                    const lines = Math.max(bulletLines, textLines);
                    return headerHeight + lines * LINE_HEIGHT + 8;
                }
            }["CVPreview.useMemo[pages].estimateExperienceEntryHeight"];
            const estimateEducationEntryHeight = {
                "CVPreview.useMemo[pages].estimateEducationEntryHeight": ()=>{
                    return 56; // Fixed height per education entry
                }
            }["CVPreview.useMemo[pages].estimateEducationEntryHeight"];
            const estimateSkillsHeight = {
                "CVPreview.useMemo[pages].estimateSkillsHeight": ()=>{
                    const count = cv.skills?.length || 0;
                    // Compact chips: ~8 skills per row at 28px height per row
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
            const estimateCertificationsHeight = {
                "CVPreview.useMemo[pages].estimateCertificationsHeight": ()=>{
                    // Certifications now displayed as compact inline chips, ~4 per row
                    const count = cv.certifications?.length || 0;
                    const rows = Math.ceil(count / 4);
                    return SECTION_HEADER + rows * 28 + 16;
                }
            }["CVPreview.useMemo[pages].estimateCertificationsHeight"];
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
                        lineNumber: 825,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 818,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "subtitle1",
                    fontWeight: 600,
                    sx: {
                        color: style.bodyText
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: exp.role,
                        onChange: (v)=>updateExperience(index, "role", v),
                        placeholder: "Job Title"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 828,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 827,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    sx: {
                        color: style.companyColor,
                        fontWeight: 500
                    },
                    component: "div",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: exp.company,
                        onChange: (v)=>updateExperience(index, "company", v),
                        placeholder: "Company Name"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 835,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 834,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        flexWrap: "wrap",
                        mt: 0.25
                    },
                    children: [
                        style.showMetaIcons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 14,
                                color: style.bodyTextSecondary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 842,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary,
                                ml: style.showMetaIcons ? -1.5 : 0
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: exp.duration,
                                onChange: (v)=>updateExperience(index, "duration", v),
                                placeholder: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this),
                        style.showMetaIcons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocationOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 14,
                                color: style.bodyTextSecondary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 850,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary,
                                ml: style.showMetaIcons ? -1.5 : 0
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: exp.location || "",
                                onChange: (v)=>updateExperience(index, "location", v),
                                placeholder: "Location"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 851,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 841,
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
                        showBulletTool: true
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 860,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 859,
                    columnNumber: 9
                }, this),
                !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                    sx: {
                        mt: 2
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 869,
                    columnNumber: 21
                }, this)
            ]
        }, `exp-${exp.id}`, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 817,
            columnNumber: 7
        }, this);
    };
    // Render individual education entry
    const renderEducationEntry = (index, isLast)=>{
        const edu = cv.education?.[index];
        if (!edu) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: isLast ? 0 : 1,
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
                        lineNumber: 888,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 881,
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
                        lineNumber: 891,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 890,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: edu.institution,
                                onChange: (v)=>updateEducation(index, "institution", v),
                                placeholder: "Institution"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 899,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary
                            },
                            component: "span",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 905,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                color: style.bodyTextSecondary
                            },
                            component: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                                value: edu.year,
                                onChange: (v)=>updateEducation(index, "year", v),
                                placeholder: "Year"
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 907,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 906,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 897,
                    columnNumber: 9
                }, this)
            ]
        }, `edu-${edu.id}`, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 880,
            columnNumber: 7
        }, this);
    };
    // Helper function to render a page item
    const renderItem = (item, isLast, pageItems)=>{
        switch(item.type){
            case "summary":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mb: isLast ? 0 : 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "Summary",
                            style: style
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 924,
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
                                    showBulletTool: true
                                }, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 933,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 932,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 925,
                            columnNumber: 13
                        }, this)
                    ]
                }, "summary", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 923,
                    columnNumber: 11
                }, this);
            case "experience-header":
                {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: item.continued ? "Experience (continued)" : "Experience",
                            style: style,
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
                                    lineNumber: 955,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 954,
                                columnNumber: 19
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 949,
                            columnNumber: 13
                        }, this)
                    }, "experience-header", false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 948,
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
                                    lineNumber: 980,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 979,
                                columnNumber: 19
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 974,
                            columnNumber: 13
                        }, this)
                    }, "education-header", false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 973,
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
                            title: "Skills",
                            style: style,
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
                                    lineNumber: 1004,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1003,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 999,
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
                                    lineNumber: 1010,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1008,
                            columnNumber: 13
                        }, this)
                    ]
                }, "skills", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 998,
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
                                    lineNumber: 1033,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1032,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1028,
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
                                    lineNumber: 1039,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1037,
                            columnNumber: 13
                        }, this)
                    ]
                }, "strengths", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1027,
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
                                    lineNumber: 1062,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1061,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1057,
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
                                    lineNumber: 1068,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CVPreview.tsx",
                            lineNumber: 1066,
                            columnNumber: 13
                        }, this)
                    ]
                }, "certifications", true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1056,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    // Render CV header (only on first page)
    const renderHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                bgcolor: style.headerBg,
                py: 2,
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
                        fontWeight: 700,
                        fontSize: "1.85rem",
                        color: style.headerText,
                        display: style.headerCentered ? "block" : "inline-block",
                        letterSpacing: "0.01em",
                        lineHeight: 1.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: cv.name,
                        onChange: (v)=>updateField("name", v),
                        placeholder: "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1115,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1106,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "subtitle1",
                    component: "div",
                    sx: {
                        color: effectiveColors.secondary,
                        mt: 0.25,
                        fontWeight: 500,
                        fontSize: "1rem",
                        lineHeight: 1.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableField, {
                        value: cv.title,
                        onChange: (v)=>updateField("title", v),
                        placeholder: "Your Title"
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1124,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1117,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mt: 1,
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
                            lineNumber: 1134,
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
                            lineNumber: 1141,
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
                            lineNumber: 1148,
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
                            lineNumber: 1156,
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
                            lineNumber: 1165,
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
                            lineNumber: 1174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1127,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1098,
            columnNumber: 5
        }, this);
    const handleTemplateChange = (event)=>{
        if (onTemplateChange) {
            onTemplateChange(event.target.value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            py: 2,
            px: 1.5,
            bgcolor: "#e8e8e8",
            "@media print": {
                bgcolor: "transparent",
                padding: 0
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                elevation: 1,
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    px: 2,
                    py: 1,
                    mb: 2,
                    bgcolor: "#fff",
                    borderRadius: 1,
                    maxWidth: A4_WIDTH,
                    ml: 0,
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
                            lineNumber: 1225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1224,
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
                                    lineNumber: 1234,
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
                                lineNumber: 1231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                size: "small",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1246,
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
                                lineNumber: 1243,
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
                                            lineNumber: 1263,
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
                                                                lineNumber: 1283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    flex: 1,
                                                                    bgcolor: scheme.secondary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CVPreview.tsx",
                                                                lineNumber: 1284,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CVPreview.tsx",
                                                        lineNumber: 1269,
                                                        columnNumber: 21
                                                    }, this)
                                                }, scheme.id, false, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1268,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                            sx: {
                                                my: 1.5
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1289,
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
                                            lineNumber: 1290,
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
                                                            lineNumber: 1295,
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
                                                                    lineNumber: 1299,
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
                                                                    lineNumber: 1306,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1298,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1294,
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
                                                            lineNumber: 1312,
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
                                                                    lineNumber: 1316,
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
                                                                    lineNumber: 1323,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CVPreview.tsx",
                                                            lineNumber: 1315,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CVPreview.tsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CVPreview.tsx",
                                            lineNumber: 1293,
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
                                            lineNumber: 1329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CVPreview.tsx",
                                    lineNumber: 1262,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1255,
                                columnNumber: 11
                            }, this),
                            onTemplateChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                size: "small",
                                sx: {
                                    minWidth: 130
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
                                        lineNumber: 1343,
                                        columnNumber: 15
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
                                        children: templateOptions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: t.value,
                                                children: t.label
                                            }, t.value, false, {
                                                fileName: "[project]/components/CVPreview.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVPreview.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1342,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVPreview.tsx",
                        lineNumber: 1230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 1204,
                columnNumber: 7
            }, this),
            pages.map((page, pageIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                    elevation: 3,
                    sx: {
                        ...a4PageStyle,
                        overflow: "visible",
                        mb: pageIdx < pages.length - 1 ? 3 : 0
                    },
                    "data-testid": pageIdx === 0 ? "cv-preview" : `cv-page-${page.pageNumber}`,
                    children: page.isFirstPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            renderHeader(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    p: 3,
                                    color: style.bodyText,
                                    pb: `${BOTTOM_GUTTER}px`
                                },
                                children: page.items.map((item, idx)=>renderItem(item, idx === page.items.length - 1, page.items))
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1382,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageBadge, {
                                pageNumber: page.pageNumber,
                                totalPages: totalPages
                            }, void 0, false, {
                                fileName: "[project]/components/CVPreview.tsx",
                                lineNumber: 1390,
                                columnNumber: 15
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
                                lineNumber: 1391,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, page.pageNumber, false, {
                    fileName: "[project]/components/CVPreview.tsx",
                    lineNumber: 1369,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionRearrangeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionRearrangeModal"], {
                open: rearrangeModalOpen,
                onClose: ()=>setRearrangeModalOpen(false),
                sectionOrder: sectionOrder,
                onApply: applySectionOrder
            }, void 0, false, {
                fileName: "[project]/components/CVPreview.tsx",
                lineNumber: 1401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVPreview.tsx",
        lineNumber: 1193,
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
            lineNumber: 1431,
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
        lineNumber: 1460,
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
                    lineNumber: 1515,
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
                    lineNumber: 1522,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVPreview.tsx",
            lineNumber: 1514,
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
        lineNumber: 1555,
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
            lineNumber: 1599,
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
        lineNumber: 1628,
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
"[project]/components/V211AssessmentPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "V211AssessmentPanel",
    ()=>V211AssessmentPanel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript) <export default as LinearProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$circular$2d$progressbar$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-circular-progressbar/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CheckCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Lightbulb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TrendingUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/TrendingUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Verified$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Verified.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/EmojiEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Star.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AutoAwesome.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RocketLaunch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/RocketLaunch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$School$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/School.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Work.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
const getScoreColor = (score)=>{
    if (score >= 90) return "#22c55e";
    if (score >= 80) return "#84cc16";
    if (score >= 70) return "#eab308";
    if (score >= 60) return "#f97316";
    return "#ef4444";
};
const getLevelColor = (level)=>{
    switch(level){
        case "Exceptional":
            return "#22c55e";
        case "Strong":
            return "#22c55e";
        case "Good":
            return "#84cc16";
        case "Fair":
            return "#f97316";
        default:
            return "#ef4444";
    }
};
const getSeverityColor = (severity)=>{
    switch(severity){
        case "critical":
            return "#dc2626";
        case "high":
            return "#ea580c";
        case "medium":
            return "#eab308";
        case "low":
            return "#6b7280";
        default:
            return "#6b7280";
    }
};
const getPriorityColor = (priority)=>{
    switch(priority){
        case "high":
            return "#ea580c";
        case "medium":
            return "#eab308";
        case "low":
            return "#6b7280";
        default:
            return "#6b7280";
    }
};
const getHighlightColor = (color)=>{
    switch(color){
        case "green":
            return "#22c55e";
        case "blue":
            return "#3b82f6";
        case "yellow":
            return "#eab308";
        case "red":
            return "#ef4444";
        case "purple":
            return "#a855f7";
        default:
            return "#6b7280";
    }
};
const getHighlightBgColor = (color)=>{
    switch(color){
        case "green":
            return "rgba(34, 197, 94, 0.1)";
        case "blue":
            return "rgba(59, 130, 246, 0.1)";
        case "yellow":
            return "rgba(234, 179, 8, 0.1)";
        case "red":
            return "rgba(239, 68, 68, 0.1)";
        case "purple":
            return "rgba(168, 85, 247, 0.1)";
        default:
            return "rgba(107, 114, 128, 0.1)";
    }
};
const getStrengthIcon = (iconName)=>{
    switch(iconName){
        case "trophy":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmojiEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: "#eab308"
                }
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 96,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0));
        case "star":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: "#eab308"
                }
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 97,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0));
        case "sparkle":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: "#a855f7"
                }
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 98,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0));
        case "rocket":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RocketLaunch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: "#3b82f6"
                }
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 99,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: "#22c55e"
                }
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 100,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
    }
};
function V211AssessmentPanel({ analysis, loading, error, candidateName, candidateTitle, candidateLocation, candidateEmail }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 8
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                    size: 48
                }, void 0, false, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        mt: 2,
                        color: "text.secondary"
                    },
                    children: "Analyzing CV with Engine v2.11..."
                }, void 0, false, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/V211AssessmentPanel.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
            severity: "error",
            sx: {
                m: 2
            },
            children: error
        }, void 0, false, {
            fileName: "[project]/components/V211AssessmentPanel.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    if (!analysis) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 8
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        fontSize: 48,
                        color: "text.disabled",
                        mb: 2
                    }
                }, void 0, false, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    color: "text.secondary",
                    children: 'Click "Run Assessment" to analyze this CV'
                }, void 0, false, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/V211AssessmentPanel.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    }
    const { ui_output, analysis_metadata, reports } = analysis;
    const hrRec = reports?.hr_view?.executive_summary;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden"
        },
        "data-testid": "v211-assessment-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    px: 2,
                    py: 1.5,
                    borderBottom: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h5",
                                    fontWeight: 600,
                                    "data-testid": "text-candidate-name",
                                    children: candidateName || analysis_metadata?.cv_name || "Candidate"
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        candidateTitle || "",
                                        " ",
                                        candidateLocation ? `• ${candidateLocation}` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    color: "text.disabled",
                                    children: [
                                        candidateEmail,
                                        " • Engine v",
                                        analysis.version
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                gap: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    label: ui_output.level,
                                    size: "small",
                                    sx: {
                                        bgcolor: getLevelColor(ui_output.level),
                                        color: "white",
                                        fontWeight: 600
                                    },
                                    "data-testid": "chip-level"
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                !ui_output.inflation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Verified$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 14
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 23
                                    }, void 0),
                                    label: "No Inflation Detected",
                                    size: "small",
                                    variant: "outlined",
                                    sx: {
                                        fontSize: "0.7rem"
                                    },
                                    "data-testid": "chip-inflation"
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                ui_output.inflation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 14
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 183,
                                        columnNumber: 23
                                    }, void 0),
                                    label: "Possible Inflation",
                                    size: "small",
                                    color: "warning",
                                    sx: {
                                        fontSize: "0.7rem"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    mx: 2,
                    mt: 2,
                    bgcolor: "#f8fafc"
                },
                "data-testid": "card-overall-assessment",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                    sx: {
                        py: 2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            gap: 3,
                            alignItems: "center",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 100,
                                    height: 100,
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$circular$2d$progressbar$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircularProgressbar"], {
                                        value: ui_output.overallScore,
                                        text: `${ui_output.overallScore}`,
                                        styles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$circular$2d$progressbar$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildStyles"])({
                                            textSize: "28px",
                                            textColor: "#1e293b",
                                            pathColor: getScoreColor(ui_output.overallScore),
                                            trailColor: "#e2e8f0"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        sx: {
                                            display: "block",
                                            textAlign: "center",
                                            mt: 0.5
                                        },
                                        children: "/100"
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    flex: 1,
                                    minWidth: 200
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle1",
                                        fontWeight: 600,
                                        color: "primary",
                                        children: "Overall Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mb: 1.5
                                        },
                                        "data-testid": "text-verdict",
                                        children: ui_output.verdict
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            gap: 3,
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h6",
                                                        fontWeight: 600,
                                                        children: ui_output.quickStats?.professionalYears || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "Years Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h6",
                                                        fontWeight: 600,
                                                        children: ui_output.quickStats?.validatedSkills || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "Validated Skills"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h6",
                                                        fontWeight: 600,
                                                        children: [
                                                            ui_output.quickStats?.validationRate || 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "Validation Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h6",
                                                        fontWeight: 600,
                                                        children: [
                                                            ui_output.quickStats?.quantificationRate || 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "Quantified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            hrRec && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                sx: {
                                    p: 1.5,
                                    bgcolor: "#f0fdf4",
                                    minWidth: 140
                                },
                                elevation: 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        color: "text.secondary",
                                        children: "HR Recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle1",
                                        fontWeight: 600,
                                        sx: {
                                            color: hrRec.recommendation === "Recommend" || hrRec.recommendation === "Strong Recommend" ? "#16a34a" : "#6b7280"
                                        },
                                        children: hrRec.recommendation
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        color: "text.secondary",
                                        children: [
                                            "Confidence: ",
                                            Math.round((hrRec.confidence || 0) * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            analysis.cv_nature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$School$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 16,
                            color: "text.disabled"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        children: "Classification:"
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                        label: analysis.cv_nature.industry_nature?.current_industry || "Industry",
                        size: "small",
                        variant: "outlined",
                        sx: {
                            fontSize: "0.7rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.disabled",
                        children: ">"
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                        label: analysis.cv_nature.domain_nature?.specialization || "Specialization",
                        size: "small",
                        variant: "outlined",
                        sx: {
                            fontSize: "0.7rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.disabled",
                        children: ">"
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        fontWeight: 600,
                        children: analysis_metadata?.inferred_seniority || "Role"
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                value: activeTab,
                onChange: (_, v)=>setActiveTab(v),
                sx: {
                    px: 2,
                    borderBottom: 1,
                    borderColor: "divider"
                },
                "data-testid": "tabs-assessment",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: "Overview",
                        value: "overview",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 277,
                            columnNumber: 54
                        }, void 0),
                        iconPosition: "start",
                        sx: {
                            minHeight: 48,
                            textTransform: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: "Strengths",
                        value: "strengths",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 278,
                            columnNumber: 56
                        }, void 0),
                        iconPosition: "start",
                        sx: {
                            minHeight: 48,
                            textTransform: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: "Issues",
                        value: "issues",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 279,
                            columnNumber: 50
                        }, void 0),
                        iconPosition: "start",
                        sx: {
                            minHeight: 48,
                            textTransform: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: "Actions",
                        value: "actions",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 280,
                            columnNumber: 52
                        }, void 0),
                        iconPosition: "start",
                        sx: {
                            minHeight: 48,
                            textTransform: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: "Highlights",
                        value: "highlights",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 281,
                            columnNumber: 58
                        }, void 0),
                        iconPosition: "start",
                        sx: {
                            minHeight: 48,
                            textTransform: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflow: "auto",
                    p: 2
                },
                children: [
                    activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewTab, {
                        ui_output: ui_output
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 286,
                        columnNumber: 38
                    }, this),
                    activeTab === "strengths" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthsTab, {
                        strengths: ui_output.strengths
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 287,
                        columnNumber: 39
                    }, this),
                    activeTab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IssuesTab, {
                        weaknesses: ui_output.weaknesses
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 288,
                        columnNumber: 36
                    }, this),
                    activeTab === "actions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionsTab, {
                        recommendations: ui_output.recommendations,
                        currentScore: ui_output.overallScore
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 289,
                        columnNumber: 37
                    }, this),
                    activeTab === "highlights" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightsTab, {
                        highlights: ui_output.highlights
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 290,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(V211AssessmentPanel, "0RhE9c0qkQp+3CR2mJOCewxRmMU=");
_c = V211AssessmentPanel;
// Overview Tab Component
function OverviewTab({ ui_output }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
        container: true,
        spacing: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                size: {
                    xs: 12,
                    md: 7
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle2",
                        sx: {
                            mb: 1.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 18
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            " Category Scores"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5
                        },
                        children: ui_output.sections?.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 0.5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        component: "span",
                                                        sx: {
                                                            fontWeight: 600,
                                                            color: "text.secondary",
                                                            mr: 1
                                                        },
                                                        children: section.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this),
                                                    section.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                fontWeight: 600,
                                                sx: {
                                                    color: getScoreColor(section.score)
                                                },
                                                children: section.score
                                            }, void 0, false, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                                        variant: "determinate",
                                        value: section.score,
                                        sx: {
                                            height: 8,
                                            borderRadius: 4,
                                            bgcolor: "#e2e8f0",
                                            "& .MuiLinearProgress-bar": {
                                                bgcolor: getScoreColor(section.score),
                                                borderRadius: 4
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, section.code || idx, true, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                size: {
                    xs: 12,
                    md: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle2",
                        sx: {
                            mb: 1.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 18
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            " Quick Stats"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                    sx: {
                                        p: 1.5,
                                        textAlign: "center",
                                        bgcolor: "#f0fdf4"
                                    },
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "h5",
                                            fontWeight: 600,
                                            color: "success.main",
                                            children: ui_output.quickStats?.validatedSkills || 0
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            color: "text.secondary",
                                            children: "Validated Skills"
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                    sx: {
                                        p: 1.5,
                                        textAlign: "center",
                                        bgcolor: "#fef2f2"
                                    },
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "h5",
                                            fontWeight: 600,
                                            color: "error.main",
                                            children: ui_output.quickStats?.ghostSkills || 0
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            color: "text.secondary",
                                            children: "Ghost Skills"
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                    sx: {
                                        p: 1.5,
                                        textAlign: "center",
                                        bgcolor: "#fef3c7"
                                    },
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "h5",
                                            fontWeight: 600,
                                            sx: {
                                                color: "#d97706"
                                            },
                                            children: ui_output.quickStats?.issueCount?.high || 0
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            color: "text.secondary",
                                            children: "High Priority Issues"
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                    sx: {
                                        p: 1.5,
                                        textAlign: "center",
                                        bgcolor: "#f1f5f9"
                                    },
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "h5",
                                            fontWeight: 600,
                                            color: "text.secondary",
                                            children: (ui_output.quickStats?.issueCount?.medium || 0) + (ui_output.quickStats?.issueCount?.low || 0)
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            color: "text.secondary",
                                            children: "Other Issues"
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c1 = OverviewTab;
// Strengths Tab Component
function StrengthsTab({ strengths }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "subtitle2",
                sx: {
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 18,
                            color: "#22c55e"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    "Identified Strengths (",
                    strengths?.length || 0,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5
                },
                children: strengths?.map((strength, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            bgcolor: "#f0fdf4"
                        },
                        elevation: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                            sx: {
                                py: 1.5,
                                px: 2,
                                display: "flex",
                                gap: 2,
                                alignItems: "flex-start"
                            },
                            children: [
                                getStrengthIcon(strength.icon),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                            label: strength.code,
                                            size: "small",
                                            sx: {
                                                mb: 0.5,
                                                fontSize: "0.7rem",
                                                height: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            children: strength.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
_c2 = StrengthsTab;
// Issues Tab Component
function IssuesTab({ weaknesses }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "subtitle2",
                sx: {
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 18,
                            color: "#f59e0b"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    "Issues Found (",
                    weaknesses?.length || 0,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5
                },
                children: weaknesses?.map((weakness, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            borderLeft: 3,
                            borderColor: getSeverityColor(weakness.severity)
                        },
                        elevation: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                            sx: {
                                py: 1.5,
                                px: 2,
                                display: "flex",
                                gap: 2,
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: getSeverityColor(weakness.severity),
                                        mt: 0.3
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center",
                                                mb: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                    label: weakness.code,
                                                    size: "small",
                                                    sx: {
                                                        fontSize: "0.7rem",
                                                        height: 20
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                    label: weakness.severity,
                                                    size: "small",
                                                    sx: {
                                                        fontSize: "0.65rem",
                                                        height: 18,
                                                        bgcolor: getSeverityColor(weakness.severity),
                                                        color: "white"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            children: weakness.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_c3 = IssuesTab;
// Actions Tab Component
function ActionsTab({ recommendations, currentScore }) {
    const totalImpact = recommendations?.reduce((sum, r)=>{
        const match = r.impact?.match(/\+(\d+)/);
        return sum + (match ? parseInt(match[1]) : 0);
    }, 0) || 0;
    const potentialScore = Math.min(100, currentScore + totalImpact);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "subtitle2",
                sx: {
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 18,
                            color: "#eab308"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    "Recommended Actions (",
                    recommendations?.length || 0,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5
                },
                children: recommendations?.map((rec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        sx: {
                            borderLeft: 3,
                            borderColor: getPriorityColor(rec.priority)
                        },
                        elevation: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                            sx: {
                                py: 1.5,
                                px: 2,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "flex-start",
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: getPriorityColor(rec.priority),
                                                mt: 0.3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                    label: `${rec.priority} priority`,
                                                    size: "small",
                                                    sx: {
                                                        fontSize: "0.65rem",
                                                        height: 18,
                                                        mb: 0.5,
                                                        bgcolor: getPriorityColor(rec.priority),
                                                        color: "white"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    children: rec.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    fontWeight: 600,
                                    sx: {
                                        color: "#22c55e",
                                        whiteSpace: "nowrap"
                                    },
                                    children: rec.impact
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    mt: 3,
                    bgcolor: "#f0fdf4"
                },
                elevation: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                    sx: {
                        py: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TrendingUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "#22c55e"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    color: "success.main",
                                    children: "Potential Score After Fixes"
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "baseline",
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h4",
                                    fontWeight: 600,
                                    children: currentScore
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h5",
                                    color: "text.secondary",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h4",
                                    fontWeight: 600,
                                    color: "success.main",
                                    children: [
                                        potentialScore,
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "caption",
                            color: "text.secondary",
                            children: [
                                "Complete all recommendations to achieve ",
                                potentialScore >= 90 ? "Exceptional" : potentialScore >= 80 ? "Strong" : "Good",
                                " level"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/V211AssessmentPanel.tsx",
                    lineNumber: 480,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_c4 = ActionsTab;
// Highlights Tab Component
function HighlightsTab({ highlights }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "subtitle2",
                sx: {
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 18,
                            color: "#a855f7"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this),
                    "CV Highlights (",
                    highlights?.length || 0,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                container: true,
                spacing: 1.5,
                children: highlights?.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            xs: 12,
                            md: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                bgcolor: getHighlightBgColor(highlight.color),
                                borderLeft: 3,
                                borderColor: getHighlightColor(highlight.color),
                                height: "100%"
                            },
                            elevation: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    py: 1.5,
                                    px: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center",
                                            mb: 0.5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                sx: {
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    color: getHighlightColor(highlight.color),
                                                    letterSpacing: 0.5
                                                },
                                                children: highlight.type
                                            }, void 0, false, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                children: [
                                                    "• ",
                                                    highlight.source
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                                lineNumber: 532,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        children: highlight.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 534,
                                        columnNumber: 17
                                    }, this),
                                    highlight.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "caption",
                                        color: "text.secondary",
                                        sx: {
                                            fontStyle: "italic",
                                            display: "block",
                                            mt: 0.5
                                        },
                                        children: highlight.note
                                    }, void 0, false, {
                                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                                        lineNumber: 536,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/V211AssessmentPanel.tsx",
                                lineNumber: 519,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/V211AssessmentPanel.tsx",
                            lineNumber: 510,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/V211AssessmentPanel.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/V211AssessmentPanel.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/V211AssessmentPanel.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, this);
}
_c5 = HighlightsTab;
const __TURBOPACK__default__export__ = V211AssessmentPanel;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "V211AssessmentPanel");
__turbopack_context__.k.register(_c1, "OverviewTab");
__turbopack_context__.k.register(_c2, "StrengthsTab");
__turbopack_context__.k.register(_c3, "IssuesTab");
__turbopack_context__.k.register(_c4, "ActionsTab");
__turbopack_context__.k.register(_c5, "HighlightsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AIAnalysisPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAnalysisPanel",
    ()=>AIAnalysisPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript) <export default as LinearProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CheckCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Lightbulb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AutoAwesome.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Work.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FormatListBulleted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$V211AssessmentPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/V211AssessmentPanel.tsx [app-client] (ecmascript)");
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
;
;
;
;
// Normalize assessment response to handle v9.3 structure and snake_case
function normalizeAssessment(raw) {
    const sections = raw.sections || raw.section_scores || [];
    const tokenUsageRaw = raw.tokenUsage || raw.token_usage || {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0
    };
    const highlightsRaw = raw.highlights || [];
    return {
        overallScore: raw.overallScore ?? raw.overall_score ?? 0,
        level: raw.level ?? "",
        inflation: raw.inflation ?? false,
        verdict: raw.verdict ?? "",
        sections: sections.map((s)=>({
                name: s.name ?? s.section ?? "",
                score: s.score ?? 0,
                feedback: s.feedback ?? ""
            })),
        strengths: raw.strengths ?? [],
        weaknesses: raw.weaknesses ?? [],
        recommendations: raw.recommendations ?? [],
        highlights: highlightsRaw.map((h)=>({
                snippet: h.snippet ?? "",
                type: h.type ?? "yellow",
                comment: h.comment ?? ""
            })),
        tokenUsage: normalizeTokenUsage(tokenUsageRaw)
    };
}
// Normalize JD match response to handle v9.3 structure
function normalizeJDMatch(raw) {
    const expMatch = raw.experienceMatch || raw.experience_match || {
        score: 0,
        feedback: ""
    };
    const eduMatch = raw.educationMatch || raw.education_match || {
        score: 0,
        feedback: ""
    };
    const tokenUsageRaw = raw.tokenUsage || raw.token_usage || {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0
    };
    const jdParsingRaw = raw.jd_parsing || null;
    const evidenceMapRaw = raw.evidenceMap || raw.evidence_map || [];
    return {
        jd_parsing: jdParsingRaw ? {
            role_title: jdParsingRaw.role_title ?? "",
            company: jdParsingRaw.company ?? "",
            mandatory_skills: jdParsingRaw.mandatory_skills ?? [],
            nice_to_have_skills: jdParsingRaw.nice_to_have_skills ?? []
        } : undefined,
        matchScore: raw.matchScore ?? raw.match_score ?? 0,
        verdict: raw.verdict ?? "",
        summary: raw.summary ?? "",
        matchedSkills: raw.matchedSkills ?? raw.matched_skills ?? [],
        missingSkills: raw.missingSkills ?? raw.missing_skills ?? [],
        experienceMatch: {
            score: expMatch.score ?? 0,
            feedback: expMatch.feedback ?? ""
        },
        educationMatch: {
            score: eduMatch.score ?? 0,
            feedback: eduMatch.feedback ?? ""
        },
        overallFeedback: raw.overallFeedback ?? raw.overall_feedback ?? raw.summary ?? "",
        suggestions: raw.suggestions ?? [],
        keywordOptimizations: raw.keywordOptimizations ?? raw.keyword_optimizations ?? [],
        evidenceMap: evidenceMapRaw.map((e)=>({
                jd_requirement: e.jd_requirement ?? "",
                cv_evidence: e.cv_evidence ?? "",
                status: e.status ?? "Missing"
            })),
        tokenUsage: normalizeTokenUsage(tokenUsageRaw)
    };
}
// Normalize token usage
function normalizeTokenUsage(raw) {
    return {
        promptTokens: raw.promptTokens ?? raw.prompt_tokens ?? 0,
        completionTokens: raw.completionTokens ?? raw.completion_tokens ?? 0,
        totalTokens: raw.totalTokens ?? raw.total_tokens ?? 0
    };
}
function AIAnalysisPanel({ cv, activeTrack }) {
    _s();
    const [jdText, setJdText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatMessage, setChatMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [assessment, setAssessment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [v211Analysis, setV211Analysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [useV211, setUseV211] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [jdMatch, setJdMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [promptComparison, setPromptComparison] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comparingPrompts, setComparingPrompts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const jdInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const insertBullet = ()=>{
        const textarea = jdInputRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const bullet = "\u2022 ";
        const newText = jdText.substring(0, start) + bullet + jdText.substring(end);
        setJdText(newText);
        setTimeout(()=>{
            textarea.focus();
            textarea.setSelectionRange(start + bullet.length, start + bullet.length);
        }, 0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAnalysisPanel.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AIAnalysisPanel.useEffect"], [
        chatHistory
    ]);
    const runAssessment = async (version = "2.11")=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/assess", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cv,
                    version
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to assess CV");
            }
            const data = await response.json();
            if (version === "2.11" && data.analysis) {
                setV211Analysis(data.analysis);
                setUseV211(true);
            } else if (data.assessment) {
                const normalized = normalizeAssessment(data.assessment);
                setAssessment(normalized);
                setUseV211(false);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to run assessment");
        } finally{
            setLoading(false);
        }
    };
    const runPromptComparison = async ()=>{
        setComparingPrompts(true);
        setError(null);
        setPromptComparison(null);
        try {
            const response = await fetch("/api/assess/compare", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cv
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to compare prompts");
            }
            const { comparison } = await response.json();
            setPromptComparison({
                oldPrompt: {
                    label: comparison.oldPrompt.label,
                    assessment: normalizeAssessment(comparison.oldPrompt.assessment)
                },
                newPrompt: {
                    label: comparison.newPrompt.label,
                    assessment: normalizeAssessment(comparison.newPrompt.assessment)
                },
                scoreDifference: comparison.scoreDifference
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to compare prompts");
        } finally{
            setComparingPrompts(false);
        }
    };
    const sendChatMessage = async ()=>{
        if (!chatMessage.trim()) return;
        const userMessage = {
            role: "user",
            content: chatMessage
        };
        setChatHistory((prev)=>[
                ...prev,
                userMessage
            ]);
        setChatMessage("");
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/advisor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cv,
                    message: chatMessage,
                    history: chatHistory
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to get advice");
            }
            const { response: aiResponse } = await response.json();
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: aiResponse
                    }
                ]);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to get advice");
        } finally{
            setLoading(false);
        }
    };
    const analyzeJDMatch = async ()=>{
        if (!jdText.trim()) return;
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/jd-match", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cv,
                    jobDescription: jdText
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to analyze match");
            }
            const { match: rawMatch } = await response.json();
            const normalized = normalizeJDMatch(rawMatch);
            setJdMatch(normalized);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to analyze job match");
        } finally{
            setLoading(false);
        }
    };
    const getScoreColor = (score)=>{
        if (score >= 80) return "success.main";
        if (score >= 60) return "warning.main";
        return "error.main";
    };
    if (activeTrack === "assessment") {
        // v2.11 Forensic Engine UI
        if (useV211 && (v211Analysis || loading || error)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$V211AssessmentPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V211AssessmentPanel"], {
                        analysis: v211Analysis,
                        loading: loading,
                        error: error,
                        candidateName: cv.name,
                        candidateTitle: cv.title,
                        candidateLocation: cv.location,
                        candidateEmail: cv.email
                    }, void 0, false, {
                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this),
                    v211Analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 2,
                            borderTop: 1,
                            borderColor: "divider"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "outlined",
                            fullWidth: true,
                            startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 336,
                                columnNumber: 28
                            }, void 0),
                            onClick: ()=>runAssessment("2.11"),
                            disabled: loading,
                            "data-testid": "button-rerun-assessment",
                            children: "Re-run Analysis (v2.11)"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 333,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                        lineNumber: 332,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AIAnalysisPanel.tsx",
                lineNumber: 321,
                columnNumber: 9
            }, this);
        }
        // v9.3 Legacy UI
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 3,
                height: "100%",
                overflow: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                color: "primary.main"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h6",
                            sx: {
                                fontWeight: 600
                            },
                            children: "AI Resume Analysis"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    severity: "error",
                    sx: {
                        mb: 2
                    },
                    onClose: ()=>setError(null),
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 360,
                    columnNumber: 11
                }, this),
                assessment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                mb: 2,
                                bgcolor: getScoreColor(assessment.overallScore),
                                color: "white"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    py: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            mb: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "subtitle2",
                                                        sx: {
                                                            fontWeight: 600,
                                                            mb: 1
                                                        },
                                                        children: "Overall Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "baseline",
                                                            gap: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "h3",
                                                                sx: {
                                                                    fontWeight: 700
                                                                },
                                                                children: assessment.overallScore
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this),
                                                            assessment.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                label: assessment.level,
                                                                size: "small",
                                                                sx: {
                                                                    bgcolor: "rgba(255,255,255,0.3)",
                                                                    color: "white",
                                                                    fontWeight: 600
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 0.5,
                                                    alignItems: "flex-end"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                fontSize: 14
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 29
                                                        }, void 0),
                                                        label: `${assessment.tokenUsage.totalTokens} tokens`,
                                                        size: "small",
                                                        sx: {
                                                            bgcolor: "rgba(255,255,255,0.2)",
                                                            color: "white"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this),
                                                    assessment.inflation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                fontSize: 14
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 31
                                                        }, void 0),
                                                        label: "Inflation Detected",
                                                        size: "small",
                                                        sx: {
                                                            bgcolor: "rgba(255,100,100,0.4)",
                                                            color: "white"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this),
                                    assessment.verdict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        sx: {
                                            mt: 1.5,
                                            opacity: 0.95,
                                            fontStyle: "italic"
                                        },
                                        children: assessment.verdict
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 405,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mb: 2,
                                color: "text.secondary"
                            },
                            children: "Section Scores"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        assessment.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                sx: {
                                    mb: 1.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                    sx: {
                                        py: 1.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                mb: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1
                                                    },
                                                    children: [
                                                        section.score >= 70 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                color: "success.main",
                                                                fontSize: 18
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this) : section.score >= 50 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                color: "warning.main",
                                                                fontSize: 18
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                color: "error.main",
                                                                fontSize: 18
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "subtitle2",
                                                            sx: {
                                                                fontWeight: 600
                                                            },
                                                            children: section.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        fontWeight: 700,
                                                        color: getScoreColor(section.score)
                                                    },
                                                    children: [
                                                        section.score,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                                            variant: "determinate",
                                            value: section.score,
                                            sx: {
                                                height: 4,
                                                borderRadius: 1,
                                                mb: 1,
                                                bgcolor: "grey.200"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: section.feedback
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 441,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 417,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: "success.main"
                            },
                            children: "Strengths"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this),
                        assessment.strengths.map((strength, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            color: "success.main",
                                            fontSize: 16,
                                            mt: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 453,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        children: strength
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 454,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: "error.main"
                            },
                            children: "Areas for Improvement"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this),
                        assessment.weaknesses.map((weakness, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            color: "error.main",
                                            fontSize: 16,
                                            mt: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 463,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        children: weakness
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: "primary.main"
                            },
                            children: "Recommendations"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 468,
                            columnNumber: 13
                        }, this),
                        assessment.recommendations.map((rec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            color: "primary.main",
                                            fontSize: 16,
                                            mt: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        children: rec
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 474,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, this)),
                        assessment.highlights && assessment.highlights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mt: 3,
                                        mb: 1,
                                        color: "text.secondary"
                                    },
                                    children: "CV Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this),
                                assessment.highlights.map((highlight, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                        sx: {
                                            mb: 1,
                                            borderLeft: 4,
                                            borderColor: highlight.type === "green" ? "success.main" : highlight.type === "red" ? "error.main" : "warning.main"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                            sx: {
                                                py: 1,
                                                px: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        fontStyle: "italic",
                                                        mb: 0.5,
                                                        color: highlight.type === "green" ? "success.dark" : highlight.type === "red" ? "error.dark" : "warning.dark"
                                                    },
                                                    children: [
                                                        '"',
                                                        highlight.snippet,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    color: "text.secondary",
                                                    children: highlight.comment
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 492,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 484,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "outlined",
                            fullWidth: true,
                            startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 515,
                                columnNumber: 26
                            }, void 0),
                            onClick: ()=>runAssessment("9.3"),
                            sx: {
                                mt: 3
                            },
                            disabled: loading,
                            children: "Re-run Analysis (v9.3)"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            sx: {
                                my: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "text",
                            fullWidth: true,
                            size: "small",
                            onClick: runPromptComparison,
                            disabled: comparingPrompts,
                            sx: {
                                color: "text.secondary"
                            },
                            "data-testid": "button-compare-prompts",
                            children: comparingPrompts ? "Comparing..." : "Compare Old vs New Prompt"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this),
                        promptComparison && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mt: 2,
                                p: 2,
                                bgcolor: "grey.50",
                                borderRadius: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 2
                                    },
                                    children: "Prompt Comparison Results"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 539,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        gap: 2,
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                            sx: {
                                                flex: 1,
                                                bgcolor: "grey.200"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                                sx: {
                                                    py: 1.5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "OLD Prompt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h5",
                                                        sx: {
                                                            fontWeight: 700
                                                        },
                                                        children: promptComparison.scoreDifference.oldScore
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 545,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                            sx: {
                                                flex: 1,
                                                bgcolor: "primary.main",
                                                color: "white"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                                sx: {
                                                    py: 1.5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "caption",
                                                        sx: {
                                                            opacity: 0.8
                                                        },
                                                        children: "NEW Prompt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h5",
                                                        sx: {
                                                            fontWeight: 700
                                                        },
                                                        children: promptComparison.scoreDifference.newScore
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 553,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 543,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    color: "text.secondary",
                                    sx: {
                                        display: "block",
                                        mb: 1
                                    },
                                    children: [
                                        "Score difference: ",
                                        promptComparison.scoreDifference.diff > 0 ? "+" : "",
                                        promptComparison.scoreDifference.diff
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 562,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mt: 2,
                                        mb: 1
                                    },
                                    children: "OLD Prompt Feedback:"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 566,
                                    columnNumber: 17
                                }, this),
                                promptComparison.oldPrompt.assessment.sections?.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            mb: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                sx: {
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    s.name,
                                                    ": ",
                                                    s.score
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 571,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                sx: {
                                                    display: "block"
                                                },
                                                children: s.feedback
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 572,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `old-${i}`, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 570,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                    sx: {
                                        my: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 576,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 1
                                    },
                                    children: "NEW Prompt Feedback:"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                promptComparison.newPrompt.assessment.sections?.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            mb: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                sx: {
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    s.name,
                                                    ": ",
                                                    s.score
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 583,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "caption",
                                                color: "text.secondary",
                                                sx: {
                                                    display: "block"
                                                },
                                                children: s.feedback
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `new-${i}`, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 582,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 538,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                mb: 2,
                                bgcolor: "grey.100"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    py: 2,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 48,
                                            color: "grey.400",
                                            mb: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle1",
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "Ready to Analyze"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: "Get AI-powered insights about your resume's strengths, weaknesses, and areas for improvement."
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 598,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mb: 2,
                                color: "text.secondary"
                            },
                            children: "Quick Preview"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            },
                            children: [
                                cv.email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "success.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 609,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "error.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 609,
                                    columnNumber: 94
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    children: "Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 610,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 608,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            },
                            children: [
                                cv.summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "success.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 613,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "warning.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 613,
                                    columnNumber: 96
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    children: "Professional Summary"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            },
                            children: [
                                cv.experience?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "success.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 617,
                                    columnNumber: 40
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "error.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 617,
                                    columnNumber: 107
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    children: [
                                        "Work Experience (",
                                        cv.experience?.length || 0,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            },
                            children: [
                                cv.skills?.length >= 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "success.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 621,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "warning.main",
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 621,
                                    columnNumber: 108
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    children: [
                                        "Skills (",
                                        cv.skills?.length || 0,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 620,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "contained",
                            fullWidth: true,
                            startIcon: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                size: 16,
                                color: "inherit"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 628,
                                columnNumber: 36
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 628,
                                columnNumber: 85
                            }, void 0),
                            onClick: ()=>runAssessment("2.11"),
                            sx: {
                                mt: 3
                            },
                            disabled: loading,
                            "data-testid": "button-run-analysis",
                            children: loading ? "Analyzing..." : "Run Full AI Analysis (v2.11)"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 625,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AIAnalysisPanel.tsx",
            lineNumber: 351,
            columnNumber: 7
        }, this);
    }
    if (activeTrack === "advisor") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                height: "100%",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        p: 3,
                        flex: 1,
                        overflow: "auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "secondary.main"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "AI Career Advisor"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                            severity: "error",
                            sx: {
                                mb: 2
                            },
                            onClose: ()=>setError(null),
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this),
                        chatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    sx: {
                                        mb: 3,
                                        bgcolor: "secondary.main",
                                        color: "white"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "subtitle2",
                                                sx: {
                                                    fontWeight: 600,
                                                    mb: 1
                                                },
                                                children: "Get personalized advice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 663,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                sx: {
                                                    opacity: 0.9
                                                },
                                                children: "Ask questions about your resume, get suggestions for improvements, or learn how to tailor your CV for specific roles."
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "text.secondary"
                                    },
                                    children: "Suggested prompts"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 673,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1
                                    },
                                    children: [
                                        "How can I improve my professional summary?",
                                        "What skills should I add for my target role?",
                                        "How can I make my experience more impactful?",
                                        "Review my resume for ATS optimization"
                                    ].map((prompt, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "outlined",
                                            size: "small",
                                            sx: {
                                                justifyContent: "flex-start",
                                                textAlign: "left",
                                                textTransform: "none"
                                            },
                                            onClick: ()=>{
                                                setChatMessage(prompt);
                                            },
                                            "data-testid": `button-prompt-${index}`,
                                            children: prompt
                                        }, index, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 677,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2
                            },
                            children: [
                                chatHistory.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                                            maxWidth: "85%"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                            sx: {
                                                bgcolor: msg.role === "user" ? "primary.main" : "grey.100",
                                                color: msg.role === "user" ? "white" : "text.primary"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                                sx: {
                                                    py: 1.5,
                                                    px: 2,
                                                    "&:last-child": {
                                                        pb: 1.5
                                                    }
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        whiteSpace: "pre-wrap"
                                                    },
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 713,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 709,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 702,
                                        columnNumber: 17
                                    }, this)),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        alignSelf: "flex-start"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                        sx: {
                                            bgcolor: "grey.100"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                            sx: {
                                                py: 1.5,
                                                px: 2,
                                                "&:last-child": {
                                                    pb: 1.5
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 725,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 724,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 723,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 722,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: chatEndRef
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        p: 2,
                        bgcolor: "background.paper"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                size: "small",
                                placeholder: "Ask about your resume...",
                                value: chatMessage,
                                onChange: (e)=>setChatMessage(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        sendChatMessage();
                                    }
                                },
                                disabled: loading,
                                "data-testid": "input-chat-message"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                color: "primary",
                                onClick: sendChatMessage,
                                disabled: !chatMessage.trim() || loading,
                                "data-testid": "button-send-message",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                        lineNumber: 738,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 737,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AIAnalysisPanel.tsx",
            lineNumber: 644,
            columnNumber: 7
        }, this);
    }
    if (activeTrack === "jd-match") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 3,
                height: "100%",
                overflow: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                color: "primary.main"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 772,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h6",
                            sx: {
                                fontWeight: 600
                            },
                            children: "Job Description Match"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 773,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 771,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    severity: "error",
                    sx: {
                        mb: 2
                    },
                    onClose: ()=>setError(null),
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 779,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    sx: {
                        mb: 3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle2",
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "Paste Job Description"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 787,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: insertBullet,
                                        disabled: loading,
                                        title: "Insert bullet point",
                                        "data-testid": "button-insert-bullet",
                                        color: "primary",
                                        sx: {
                                            border: 1,
                                            borderColor: "primary.main",
                                            borderRadius: 1,
                                            bgcolor: "primary.50",
                                            "&:hover": {
                                                bgcolor: "primary.100"
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FormatListBulleted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 805,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 790,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                multiline: true,
                                rows: 6,
                                fullWidth: true,
                                placeholder: "Paste the job description here to see how well your resume matches...",
                                value: jdText,
                                onChange: (e)=>setJdText(e.target.value),
                                disabled: loading,
                                inputRef: jdInputRef,
                                "data-testid": "input-job-description"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 808,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                fullWidth: true,
                                sx: {
                                    mt: 2
                                },
                                disabled: !jdText.trim() || loading,
                                onClick: analyzeJDMatch,
                                startIcon: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                    size: 16,
                                    color: "inherit"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 825,
                                    columnNumber: 36
                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 825,
                                    columnNumber: 85
                                }, void 0),
                                "data-testid": "button-analyze-match",
                                children: loading ? "Analyzing..." : "Analyze Match"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 784,
                    columnNumber: 9
                }, this),
                !jdMatch && !jdText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        textAlign: "center",
                        py: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Work$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 64,
                                color: "grey.300",
                                mb: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 835,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body1",
                            color: "text.secondary",
                            children: "Paste a job description above to see your match rate and get optimization tips"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 836,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                    lineNumber: 834,
                    columnNumber: 11
                }, this),
                jdMatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                mb: 2,
                                bgcolor: getScoreColor(jdMatch.matchScore),
                                color: "white"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    textAlign: "center",
                                    py: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            mb: -2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 14
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 848,
                                                columnNumber: 27
                                            }, void 0),
                                            label: `${jdMatch.tokenUsage.totalTokens} tokens`,
                                            size: "small",
                                            sx: {
                                                bgcolor: "rgba(255,255,255,0.2)",
                                                color: "white"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 847,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 846,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h2",
                                        sx: {
                                            fontWeight: 700
                                        },
                                        children: [
                                            jdMatch.matchScore,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 854,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle1",
                                        children: jdMatch.verdict || "Match Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 857,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 845,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 844,
                            columnNumber: 13
                        }, this),
                        jdMatch.jd_parsing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            sx: {
                                mb: 2,
                                bgcolor: "grey.50"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    py: 1.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "subtitle2",
                                        sx: {
                                            fontWeight: 600,
                                            mb: 1
                                        },
                                        children: [
                                            jdMatch.jd_parsing.role_title,
                                            jdMatch.jd_parsing.company && ` at ${jdMatch.jd_parsing.company}`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 866,
                                        columnNumber: 19
                                    }, this),
                                    jdMatch.jd_parsing.mandatory_skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 0.5,
                                            mb: 1
                                        },
                                        children: jdMatch.jd_parsing.mandatory_skills.slice(0, 5).map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                label: skill,
                                                size: "small",
                                                color: "primary",
                                                variant: "filled",
                                                sx: {
                                                    fontSize: "0.7rem"
                                                }
                                            }, i, false, {
                                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                lineNumber: 873,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 871,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 865,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 864,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body2",
                            sx: {
                                mb: 3
                            },
                            children: jdMatch.summary || jdMatch.overallFeedback
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 881,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: "Experience Match"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 887,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: getScoreColor(jdMatch.experienceMatch.score)
                                            },
                                            children: [
                                                jdMatch.experienceMatch.score,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 888,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 886,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                                    variant: "determinate",
                                    value: jdMatch.experienceMatch.score,
                                    sx: {
                                        height: 8,
                                        borderRadius: 1,
                                        mb: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: jdMatch.experienceMatch.feedback
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 893,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 885,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: "Education Match"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: getScoreColor(jdMatch.educationMatch.score)
                                            },
                                            children: [
                                                jdMatch.educationMatch.score,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 897,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {
                                    variant: "determinate",
                                    value: jdMatch.educationMatch.score,
                                    color: "secondary",
                                    sx: {
                                        height: 8,
                                        borderRadius: 1,
                                        mb: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: jdMatch.educationMatch.feedback
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 896,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: "success.main"
                            },
                            children: [
                                "Matched Skills (",
                                jdMatch.matchedSkills.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 907,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                                mb: 2
                            },
                            children: jdMatch.matchedSkills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    label: skill,
                                    size: "small",
                                    color: "success",
                                    variant: "outlined"
                                }, index, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 912,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 910,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 2,
                                mb: 1,
                                color: "error.main"
                            },
                            children: [
                                "Missing Skills (",
                                jdMatch.missingSkills.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 916,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                                mb: 2
                            },
                            children: jdMatch.missingSkills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    label: skill,
                                    size: "small",
                                    color: "error",
                                    variant: "outlined"
                                }, index, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 921,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 919,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: "primary.main"
                            },
                            children: "Suggestions to Improve Match"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 925,
                            columnNumber: 13
                        }, this),
                        jdMatch.suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            color: "primary.main",
                                            fontSize: 16,
                                            mt: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 930,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        children: suggestion
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 931,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/AIAnalysisPanel.tsx",
                                lineNumber: 929,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            sx: {
                                fontWeight: 600,
                                mt: 3,
                                mb: 1
                            },
                            children: "Keywords to Add for ATS"
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 935,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5
                            },
                            children: jdMatch.keywordOptimizations.map((keyword, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                    label: keyword,
                                    size: "small",
                                    variant: "outlined"
                                }, index, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 940,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                            lineNumber: 938,
                            columnNumber: 13
                        }, this),
                        jdMatch.evidenceMap && jdMatch.evidenceMap.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle2",
                                    sx: {
                                        fontWeight: 600,
                                        mt: 3,
                                        mb: 1,
                                        color: "text.secondary"
                                    },
                                    children: "Evidence Map"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                    lineNumber: 946,
                                    columnNumber: 17
                                }, this),
                                jdMatch.evidenceMap.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                        sx: {
                                            mb: 1,
                                            borderLeft: 4,
                                            borderColor: entry.status === "Match" ? "success.main" : entry.status === "Weak" ? "warning.main" : "error.main"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                            sx: {
                                                py: 1,
                                                px: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        mb: 0.5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "body2",
                                                            sx: {
                                                                fontWeight: 600
                                                            },
                                                            children: entry.jd_requirement
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                            label: entry.status,
                                                            size: "small",
                                                            color: entry.status === "Match" ? "success" : entry.status === "Weak" ? "warning" : "error",
                                                            sx: {
                                                                fontSize: "0.65rem",
                                                                height: 20
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                            lineNumber: 963,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    color: "text.secondary",
                                                    children: entry.cv_evidence
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AIAnalysisPanel.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AIAnalysisPanel.tsx",
                                            lineNumber: 958,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/AIAnalysisPanel.tsx",
                                        lineNumber: 950,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AIAnalysisPanel.tsx",
            lineNumber: 770,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(AIAnalysisPanel, "e99nBqTYntP2FuaP70xZQVuGQrM=");
_c = AIAnalysisPanel;
var _c;
__turbopack_context__.k.register(_c, "AIAnalysisPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CVWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CVWorkspace",
    ()=>CVWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowBack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileDownload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FileDownload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PictureAsPdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PictureAsPdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CVPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAnalysisPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AIAnalysisPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$exportCV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/export/exportCV.ts [app-client] (ecmascript)");
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
;
;
function CVWorkspace({ cv, onBack, onUpdateCV }) {
    _s();
    const [template, setTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("business");
    const [activeTrack, setActiveTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("assessment");
    const [exportMenuAnchor, setExportMenuAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleExportClick = (event)=>{
        setExportMenuAnchor(event.currentTarget);
    };
    const handleExportClose = ()=>{
        setExportMenuAnchor(null);
    };
    const handleExportPDF = async ()=>{
        const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.pdf`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$exportCV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToPDF"])(cv, filename, template);
        handleExportClose();
    };
    const handleExportDOCX = async ()=>{
        const filename = `${cv.name || "resume"}_${new Date().toISOString().split("T")[0]}.docx`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$export$2f$exportCV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToDOCX"])(cv, filename, template);
        handleExportClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.default"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    px: 3,
                    py: 1.5,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: onBack,
                                size: "small",
                                "data-testid": "button-back-dashboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/CVWorkspace.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h6",
                                        sx: {
                                            fontWeight: 600,
                                            lineHeight: 1.2
                                        },
                                        children: cv.name || "Untitled Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVWorkspace.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    cv.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: cv.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/CVWorkspace.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVWorkspace.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        },
                        children: [
                            cv.tokenUsage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CVWorkspace.tsx",
                                    lineNumber: 82,
                                    columnNumber: 21
                                }, void 0),
                                label: `${cv.tokenUsage.totalTokens.toLocaleString()} tokens`,
                                size: "small",
                                variant: "outlined",
                                "data-testid": "chip-token-usage"
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                size: "small",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileDownload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/CVWorkspace.tsx",
                                    lineNumber: 92,
                                    columnNumber: 24
                                }, void 0),
                                onClick: handleExportClick,
                                "data-testid": "button-export",
                                children: "Export"
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                anchorEl: exportMenuAnchor,
                                open: Boolean(exportMenuAnchor),
                                onClose: handleExportClose,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "right"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        onClick: handleExportPDF,
                                        "data-testid": "menu-export-pdf",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PictureAsPdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CVWorkspace.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVWorkspace.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                                children: "Export as PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVWorkspace.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CVWorkspace.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        onClick: handleExportDOCX,
                                        "data-testid": "menu-export-docx",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CVWorkspace.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVWorkspace.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                                children: "Export as DOCX"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CVWorkspace.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CVWorkspace.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVWorkspace.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVWorkspace.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    display: "flex",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: "1 1 auto",
                            minWidth: 0,
                            borderRight: "1px solid",
                            borderColor: "divider",
                            display: "flex",
                            flexDirection: "column",
                            bgcolor: "#e8e8e8"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                flex: 1,
                                overflow: "auto"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CVPreview"], {
                                cv: cv,
                                template: template,
                                onUpdateCV: onUpdateCV,
                                onTemplateChange: setTemplate
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CVWorkspace.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CVWorkspace.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: "440px",
                            minWidth: "440px",
                            display: "flex",
                            flexDirection: "column",
                            bgcolor: "background.default"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    px: 2,
                                    borderBottom: "1px solid",
                                    borderColor: "divider",
                                    bgcolor: "background.paper"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                                    value: activeTrack,
                                    onChange: (_, v)=>setActiveTrack(v),
                                    sx: {
                                        "& .MuiTab-root": {
                                            textTransform: "none",
                                            fontWeight: 500,
                                            minHeight: 48
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                            value: "assessment",
                                            label: "CV Assessment",
                                            "data-testid": "tab-cv-assessment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVWorkspace.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                            value: "advisor",
                                            label: "AI Advisor",
                                            "data-testid": "tab-ai-advisor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVWorkspace.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                            value: "jd-match",
                                            label: "JD Match",
                                            "data-testid": "tab-jd-match"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CVWorkspace.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CVWorkspace.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    flex: 1,
                                    overflow: "auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAnalysisPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAnalysisPanel"], {
                                    cv: cv,
                                    activeTrack: activeTrack
                                }, void 0, false, {
                                    fileName: "[project]/components/CVWorkspace.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CVWorkspace.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CVWorkspace.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CVWorkspace.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVWorkspace.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(CVWorkspace, "MNd60WMCoTlC8SNByGI5umWFapI=");
_c = CVWorkspace;
var _c;
__turbopack_context__.k.register(_c, "CVWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UploadDropzone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadDropzone",
    ()=>UploadDropzone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
function UploadDropzone({ onFilesAdded, disabled }) {
    _s();
    const [sizeError, setSizeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadDropzone.useCallback[onDrop]": (acceptedFiles)=>{
            setSizeError(null);
            onFilesAdded(acceptedFiles);
        }
    }["UploadDropzone.useCallback[onDrop]"], [
        onFilesAdded
    ]);
    const onDropRejected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadDropzone.useCallback[onDropRejected]": (rejections)=>{
            const oversizedFiles = rejections.filter({
                "UploadDropzone.useCallback[onDropRejected].oversizedFiles": (r)=>r.errors.some({
                        "UploadDropzone.useCallback[onDropRejected].oversizedFiles": (e)=>e.code === "file-too-large"
                    }["UploadDropzone.useCallback[onDropRejected].oversizedFiles"])
            }["UploadDropzone.useCallback[onDropRejected].oversizedFiles"]);
            if (oversizedFiles.length > 0) {
                const names = oversizedFiles.map({
                    "UploadDropzone.useCallback[onDropRejected].names": (r)=>r.file.name
                }["UploadDropzone.useCallback[onDropRejected].names"]).join(", ");
                setSizeError(`File(s) too large: ${names}. Maximum size is 3MB.`);
            }
        }
    }["UploadDropzone.useCallback[onDropRejected]"], []);
    const { getRootProps, getInputProps, isDragActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop,
        onDropRejected,
        accept: {
            "application/pdf": [
                ".pdf"
            ],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
                ".docx"
            ],
            "text/plain": [
                ".txt"
            ]
        },
        maxSize: MAX_FILE_SIZE,
        disabled,
        multiple: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            sizeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                severity: "warning",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/UploadDropzone.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, void 0),
                onClose: ()=>setSizeError(null),
                sx: {
                    mb: 2
                },
                "data-testid": "alert-file-size-error",
                children: sizeError
            }, void 0, false, {
                fileName: "[project]/components/UploadDropzone.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                ...getRootProps(),
                "data-testid": "dropzone-upload",
                sx: {
                    p: 4,
                    border: 2,
                    borderStyle: "dashed",
                    borderColor: isDragActive ? "primary.main" : "divider",
                    bgcolor: isDragActive ? "action.hover" : "background.paper",
                    cursor: disabled ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                        borderColor: disabled ? "divider" : "primary.main",
                        bgcolor: disabled ? "background.paper" : "action.hover"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps(),
                        "data-testid": "input-file-upload"
                    }, void 0, false, {
                        fileName: "[project]/components/UploadDropzone.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 48,
                                    color: "primary.main",
                                    mb: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/UploadDropzone.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body1",
                                color: "text.primary",
                                gutterBottom: true,
                                children: isDragActive ? "Drop files here" : "Drag & drop CV files here"
                            }, void 0, false, {
                                fileName: "[project]/components/UploadDropzone.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                children: "or click to browse (PDF, DOCX, TXT)"
                            }, void 0, false, {
                                fileName: "[project]/components/UploadDropzone.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                color: "text.secondary",
                                sx: {
                                    display: "block",
                                    mt: 1
                                },
                                children: "Maximum file size: 3MB"
                            }, void 0, false, {
                                fileName: "[project]/components/UploadDropzone.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UploadDropzone.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/UploadDropzone.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UploadDropzone.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(UploadDropzone, "fiWmJAcGnXH0Y6BH0YdUr6GbMB4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = UploadDropzone;
var _c;
__turbopack_context__.k.register(_c, "UploadDropzone");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript) <export default as LinearProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CVWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadDropzone.tsx [app-client] (ecmascript)");
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
function Home() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [activeMenuItem, setActiveMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ai-career-chat");
    const [cvs, setCvs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCV, setSelectedCV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadDialogOpen, setUploadDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            setUploadDialogOpen(false);
            try {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("fileId", `cv-${Date.now()}`);
                const response = await fetch("/api/parse", {
                    method: "POST",
                    body: formData
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to parse CV");
                }
                const { cv } = await response.json();
                setCvs({
                    "Home.useCallback[handleFilesAdded]": (prev)=>[
                            cv,
                            ...prev
                        ]
                }["Home.useCallback[handleFilesAdded]"]);
                setSelectedCV(cv);
                setView("workspace");
                showSnackbar("CV parsed successfully!", "success");
            } catch (error) {
                console.error("Error parsing CV:", error);
                showSnackbar(`Error parsing CV: ${error}`, "error");
            } finally{
                setIsProcessing(false);
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
                lineNumber: 128,
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
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    textAlign: "center",
                                    py: 1
                                },
                                children: "Processing your CV..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 134,
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
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            view === "workspace" && selectedCV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CVWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CVWorkspace"], {
                                cv: selectedCV,
                                onBack: handleBackToDashboard,
                                onUpdateCV: handleUpdateCV
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 130,
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
                        lineNumber: 169,
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
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadDropzone"], {
                                onFilesAdded: handleFilesAdded,
                                disabled: isProcessing
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: ()=>setUploadDialogOpen(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 163,
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
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(Home, "UMQx2uyKcfKy/C+lvPqQX8nWvOY=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7c34a641._.js.map