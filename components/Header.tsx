"use client";

import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export function Header() {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        bgcolor: "background.paper",
        borderBottom: 2, 
        borderColor: "primary.main" 
      }}
    >
      <Toolbar sx={{ gap: 2, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box 
            sx={{ 
              width: 28, 
              height: 28, 
              background: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: 700, fontSize: 16 }}>E</Typography>
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              color: "text.primary",
              fontSize: 18,
            }}
            data-testid="text-logo"
          >
            Edu<span style={{ color: "#4F46E5" }}>Natives</span>
          </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton 
            size="small" 
            sx={{ 
              bgcolor: "primary.main", 
              color: "white",
              "&:hover": { bgcolor: "primary.dark" }
            }}
            data-testid="button-add"
          >
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>+</Typography>
          </IconButton>
          
          <IconButton size="small" data-testid="button-messages">
            <ChatBubbleOutlineIcon sx={{ color: "text.secondary" }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-bookmarks">
            <BookmarkBorderIcon sx={{ color: "text.secondary" }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-notifications">
            <Badge badgeContent={3} color="error" variant="dot">
              <NotificationsNoneIcon sx={{ color: "text.secondary" }} />
            </Badge>
          </IconButton>
          
          <IconButton size="small" data-testid="button-user-menu">
            <Avatar sx={{ width: 32, height: 32, bgcolor: "grey.300" }}>
              <PersonOutlineIcon sx={{ fontSize: 20, color: "grey.600" }} />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
