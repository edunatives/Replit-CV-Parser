"use client";

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f54eb",
      light: "#597ef7",
      dark: "#1d39c4",
    },
    secondary: {
      main: "#13c2c2",
      light: "#36cfc9",
      dark: "#08979c",
    },
    background: {
      default: "#f7f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#434343",
    },
    divider: "#e5e7eb",
    success: {
      main: "#52c41a",
      light: "#73d13d",
    },
    error: {
      main: "#f5222d",
      light: "#ff4d4f",
    },
    warning: {
      main: "#faad14",
      light: "#ffc53d",
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.08)",
    "0px 2px 6px rgba(0, 0, 0, 0.08)",
    "0px 4px 12px rgba(0, 0, 0, 0.08)",
    "0px 6px 16px rgba(0, 0, 0, 0.1)",
    "0px 8px 24px rgba(0, 0, 0, 0.1)",
    "0px 12px 32px rgba(0, 0, 0, 0.12)",
    "0px 16px 40px rgba(0, 0, 0, 0.12)",
    "0px 20px 48px rgba(0, 0, 0, 0.14)",
    "0px 24px 56px rgba(0, 0, 0, 0.14)",
    "0px 28px 64px rgba(0, 0, 0, 0.16)",
    "0px 32px 72px rgba(0, 0, 0, 0.16)",
    "0px 36px 80px rgba(0, 0, 0, 0.18)",
    "0px 40px 88px rgba(0, 0, 0, 0.18)",
    "0px 44px 96px rgba(0, 0, 0, 0.20)",
    "0px 48px 104px rgba(0, 0, 0, 0.20)",
    "0px 52px 112px rgba(0, 0, 0, 0.22)",
    "0px 56px 120px rgba(0, 0, 0, 0.22)",
    "0px 60px 128px rgba(0, 0, 0, 0.24)",
    "0px 64px 136px rgba(0, 0, 0, 0.24)",
    "0px 68px 144px rgba(0, 0, 0, 0.26)",
    "0px 72px 152px rgba(0, 0, 0, 0.26)",
    "0px 76px 160px rgba(0, 0, 0, 0.28)",
    "0px 80px 168px rgba(0, 0, 0, 0.28)",
    "0px 84px 176px rgba(0, 0, 0, 0.30)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
      defaultProps: {
        elevation: 2,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
      defaultProps: {
        elevation: 2,
      },
    },
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
