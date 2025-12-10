"use client";

import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

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
      <Toolbar sx={{ gap: 1 }}>
        <DescriptionIcon sx={{ color: "primary.main" }} />
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontWeight: 600,
            color: "text.primary"
          }}
        >
          CV Intelligence
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small" data-testid="button-user-menu">
          <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
            <PersonOutlineIcon sx={{ fontSize: 20 }} />
          </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
