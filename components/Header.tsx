"use client";

import { AppBar, Toolbar, Box, Avatar, IconButton, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";

export function Header() {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        bgcolor: "background.paper",
        borderBottom: 1, 
        borderColor: "divider" 
      }}
    >
      <Toolbar sx={{ gap: 2, justifyContent: "flex-end", minHeight: 56 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton 
            size="small" 
            sx={{ 
              bgcolor: "primary.main", 
              color: "white",
              width: 32,
              height: 32,
              "&:hover": { bgcolor: "primary.dark" }
            }}
            data-testid="button-add"
          >
            <AddIcon sx={{ fontSize: 20 }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-messages">
            <ChatBubbleOutlineIcon sx={{ color: "text.secondary", fontSize: 22 }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-bookmarks">
            <BookmarkBorderIcon sx={{ color: "text.secondary", fontSize: 22 }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-notifications">
            <Badge badgeContent={3} color="error" variant="dot">
              <NotificationsNoneIcon sx={{ color: "text.secondary", fontSize: 22 }} />
            </Badge>
          </IconButton>
          
          <IconButton size="small" data-testid="button-user-menu">
            <Avatar sx={{ width: 32, height: 32, bgcolor: "grey.200" }}>
              <PersonOutlineIcon sx={{ fontSize: 20, color: "grey.500" }} />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
