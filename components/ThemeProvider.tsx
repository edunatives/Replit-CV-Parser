"use client";

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d4af37",
    },
    secondary: {
      main: "#1a1a2e",
    },
    background: {
      default: "#0f0f1a",
      paper: "#1a1a2e",
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
