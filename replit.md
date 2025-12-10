# CV Intelligence Parser

## Overview

CV Intelligence Parser is a web application for uploading, parsing, and exporting resumes/CVs. Users can upload PDF, DOCX, DOC, or TXT files, and the system extracts structured data including contact information, work experience, education, and skills. The application provides multiple viewing modes (preview, raw text, JSON), template selection for CV presentation, and batch processing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with React and TypeScript
- Server-side rendering with App Router architecture
- Client components for interactive UI elements
- Component library: Material UI (MUI) with custom theming
- Styling: MUI theme system with Cormorant Garamond (headings) and Source Sans 3 (body) fonts

**Key Design Decisions**:
- App Router structure with `/app` directory
- Client components marked with "use client" directive for interactive features
- MUI Grid v2 with `size` prop syntax for responsive layouts
- AppRouterCacheProvider for proper MUI hydration with Next.js 15

### Backend Architecture

**Framework**: Next.js API Routes
- API routes in `/app/api/` directory
- File uploads handled via FormData with memory storage (10MB limit)
- CV parsing implemented in `/lib/parse/parseCv.ts` using:
  - `mammoth` for DOCX parsing
  - `pdf-parse` for PDF text extraction
  - **AI-powered extraction** using Gemini 2.5 Flash for intelligent parsing
  - Regex-based fallback for emails, phones, LinkedIn profiles

**API Endpoints**:
- `POST /api/parse` - Single file parsing
- `POST /api/parse/batch` - Batch file parsing
- `GET/DELETE /api/cvs` - CV CRUD operations

**AI-Powered Extraction**:
- Uses **Gemini 2.5 Flash** via Replit AI Integrations (no API key required, charges billed to credits)
- Structured JSON extraction for all CV sections
- Fallback to regex-based extraction if AI unavailable

### NestJS Backend (Alternative Architecture)

A NestJS backend is also available in the `/nest` directory for future expansion to support complex features like:
- Job queues and background processing
- Real-time processing with WebSockets
- Service orchestration
- Microservices architecture

**NestJS Modules**:
- `CvModule`: CV parsing and CRUD operations
- `DatabaseModule`: MongoDB connection management
- `ConfigModule`: Environment configuration

**Important Note**: Running NestJS alongside Next.js in Replit requires manual startup:
```bash
cd nest && npx tsx --tsconfig tsconfig.json start.ts
```

### Data Storage

**Current Implementation**: MongoDB
- Connection utility in `/lib/db/mongodb.ts`
- CV documents stored with parsed data and raw text
- Persistence across server restarts

### Design System

Custom MUI theme with:
- Dark theme with gold accents as primary palette
- Typography: Cormorant Garamond for headings, Source Sans 3 for body
- Compact spacing scale optimized for data-dense interfaces
- Six CV template styles (modern-dark, classic-light, executive, minimal, creative, professional)

## Project Structure

```
/app
  /api
    /parse/route.ts          - Single CV parsing endpoint
    /parse/batch/route.ts    - Batch CV parsing endpoint
    /cvs/route.ts            - CV CRUD operations
  layout.tsx                  - Root layout with MUI providers
  page.tsx                    - Main CV parser page (client component)
/components
  Header.tsx                  - App header with branding
  UploadDropzone.tsx          - File upload component
  FileList.tsx                - Uploaded files list
  CVPreview.tsx               - Parsed CV preview with templates
  TemplateSelector.tsx        - CV template picker
  RawTextView.tsx             - Raw extracted text view
  JsonView.tsx                - JSON data view
  ThemeProvider.tsx           - MUI theme configuration
/nest                         - NestJS backend (for future expansion)
  start.ts                    - NestJS application entry point
  app.module.ts               - Root NestJS module
  /cv                         - CV feature module
  /database                   - Database module
/lib
  /db/mongodb.ts              - MongoDB connection utility
  /parse/parseCv.ts           - CV parsing logic with AI extraction
  /parse/normalize.ts         - Deterministic normalization functions
/types
  cv.ts                       - TypeScript interfaces
```

## External Dependencies

### Document Processing
- `mammoth` - DOCX to text conversion
- `pdf-parse` - PDF text extraction

### Frontend Libraries
- `@mui/material` - Material UI components
- `@mui/icons-material` - Material UI icons
- `@mui/material-nextjs` - MUI integration for Next.js App Router
- `@emotion/react` and `@emotion/styled` - Styling engine for MUI

### Backend Libraries
- `mongodb` - MongoDB driver for data persistence
- `@google/genai` - Gemini API for AI-powered CV parsing (via Replit AI Integrations)

### Build Tools
- `next` - Next.js 15 framework
- `typescript` - Type checking
- `tsx` - TypeScript execution for development
