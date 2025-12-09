"use client";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar>
        <DescriptionIcon sx={{ mr: 1, color: "primary.main" }} />
        <Typography variant="h6" component="h1" sx={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
          CV Intelligence Parser
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary">
          Upload, Parse & Export CVs
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
