"use client";

import { AppBar, Toolbar, Box, Avatar, IconButton, Badge, Typography, TextField, InputAdornment, Button, Select, MenuItem } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

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
      <Toolbar sx={{ gap: 2, justifyContent: "space-between", minHeight: 56, px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box 
            sx={{ 
              width: 32, 
              height: 32, 
              background: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: 700, fontSize: 18 }}>E</Typography>
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              color: "primary.main",
              fontSize: 18,
            }}
            data-testid="header-logo"
          >
            EduNatives
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, maxWidth: 500, mx: 2 }}>
          <TextField
            placeholder="What are You looking for?"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
                bgcolor: "grey.50",
                "& fieldset": { border: "none" },
                fontSize: 14,
              }
            }}
            data-testid="input-search"
          />
          <Button
            variant="text"
            size="small"
            sx={{ 
              color: "text.secondary", 
              textTransform: "none",
              whiteSpace: "nowrap",
              minWidth: "auto",
              px: 1,
            }}
          >
            People
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<TuneIcon sx={{ fontSize: 18 }} />}
            sx={{ 
              borderColor: "divider",
              color: "text.primary",
              textTransform: "none",
              borderRadius: 2,
              whiteSpace: "nowrap",
            }}
            data-testid="button-filter"
          >
            Filter
          </Button>
        </Box>

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
          
          <IconButton size="small" data-testid="button-bookmarks">
            <BookmarkBorderIcon sx={{ color: "text.secondary", fontSize: 22 }} />
          </IconButton>
          
          <IconButton size="small" data-testid="button-messages">
            <ChatBubbleOutlineIcon sx={{ color: "text.secondary", fontSize: 22 }} />
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
