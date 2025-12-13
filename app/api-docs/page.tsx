"use client";

import dynamic from "next/dynamic";
import { Box, Typography, Container, Paper } from "@mui/material";
import { swaggerSpec } from "@/lib/swagger";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(
  () => import("swagger-ui-react"),
  { ssr: false }
);

export default function ApiDocsPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
          color: "white",
          py: 4,
          mb: 3
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom data-testid="text-api-docs-title">
            API Documentation
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            CV Intelligence Parser - Complete API Reference
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <SwaggerUI spec={swaggerSpec} />
        </Paper>
      </Container>
    </Box>
  );
}
