"use client";

import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Tooltip } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const mainMenuItems = [
  { id: "home", label: "Home", icon: HomeOutlinedIcon },
  { id: "opportunities", label: "Opportunities", icon: SearchIcon },
  { id: "my-work", label: "My Work", icon: FolderOutlinedIcon },
  { id: "jobs", label: "Jobs", icon: BusinessCenterOutlinedIcon },
  { id: "ai-career-chat", label: "AI career chat", icon: ChatBubbleOutlineIcon },
];

const communicationItems = [
  { id: "timeline", label: "Timeline", icon: AccessTimeIcon },
  { id: "inbox", label: "Inbox", icon: InboxOutlinedIcon },
  { id: "calendar", label: "Calendar", icon: CalendarTodayOutlinedIcon },
  { id: "events", label: "Events", icon: EventOutlinedIcon },
  { id: "my-communities", label: "My Communities", icon: GroupOutlinedIcon },
];

const defaultSpacesItems = [
  { id: "department-wall", label: "Department Wall", icon: GridViewOutlinedIcon },
  { id: "national-network", label: "National Network", icon: PublicOutlinedIcon },
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true);

  const EXPANDED_WIDTH = 240;
  const COLLAPSED_WIDTH = 64;

  const renderMenuItem = (item: { id: string; label: string; icon: React.ElementType }) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;
    
    const button = (
      <ListItemButton
        onClick={() => onItemClick(item.id)}
        sx={{
          borderRadius: 2,
          py: 1,
          px: collapsed ? 1.5 : 1.5,
          justifyContent: collapsed ? "center" : "flex-start",
          bgcolor: isActive ? "rgba(79, 70, 229, 0.08)" : "transparent",
          "&:hover": {
            bgcolor: isActive ? "rgba(79, 70, 229, 0.12)" : "action.hover",
          },
        }}
        data-testid={`menu-${item.id}`}
      >
        <ListItemIcon sx={{ minWidth: collapsed ? 0 : 36, justifyContent: "center" }}>
          <Icon sx={{ color: isActive ? "primary.main" : "text.secondary", fontSize: 22 }} />
        </ListItemIcon>
        {!collapsed && (
          <ListItemText 
            primary={item.label} 
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: isActive ? 500 : 400,
              color: isActive ? "primary.main" : "text.primary",
            }}
          />
        )}
      </ListItemButton>
    );

    return (
      <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
        {collapsed ? (
          <Tooltip title={item.label} placement="right" arrow>
            {button}
          </Tooltip>
        ) : (
          button
        )}
      </ListItem>
    );
  };

  return (
    <Box
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        minWidth: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        height: "100vh",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "width 0.2s ease, min-width 0.2s ease",
      }}
      data-testid="sidebar"
    >
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: collapsed ? "center" : "flex-end",
        p: 1,
        borderBottom: 1,
        borderColor: "divider",
      }}>
        <IconButton 
          onClick={() => setCollapsed(!collapsed)} 
          size="small"
          data-testid="button-toggle-sidebar"
        >
          {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflow: "auto", px: collapsed ? 0.5 : 1.5, py: 2 }}>
        <List disablePadding>
          {mainMenuItems.map(renderMenuItem)}
        </List>

        {!collapsed && (
          <Typography 
            variant="caption" 
            sx={{ 
              display: "block",
              px: 1.5,
              pt: 2,
              pb: 1,
              color: "text.secondary",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              fontSize: 11,
            }}
          >
            Communication
          </Typography>
        )}
        <List disablePadding>
          {communicationItems.map(renderMenuItem)}
        </List>

        {!collapsed && (
          <Typography 
            variant="caption" 
            sx={{ 
              display: "block",
              px: 1.5,
              pt: 2,
              pb: 1,
              color: "text.secondary",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              fontSize: 11,
            }}
          >
            Default Spaces
          </Typography>
        )}
        <List disablePadding>
          {defaultSpacesItems.map(renderMenuItem)}
        </List>
      </Box>
    </Box>
  );
}
