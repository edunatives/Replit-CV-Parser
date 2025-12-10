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
- `POST /api/assess` - AI-powered CV assessment (scores, strengths, weaknesses, recommendations)
- `POST /api/advisor` - AI career advisor chat (personalized CV improvement advice)
- `POST /api/jd-match` - Job description match analysis (match score, skill gaps, optimization tips)

**API Documentation**:
- Interactive Swagger UI available at `/api-docs`
- OpenAPI 3.0 specification in `/lib/swagger.ts`
- All routes have comprehensive JSDoc comments with examples

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
- **Light/white theme** with indigo (#4F46E5) primary and cyan (#06B6D4) secondary accents
- Typography: Inter for UI, Arial for CV templates
- Soft shadows and rounded corners (8px border radius)
- Six CV template styles (modern-dark, classic-light, executive, minimal, creative, professional)
- EduNatives branding with gradient logo

### UX Flow

**Sidebar-Based Architecture:**
1. **Left Sidebar** (240px): EduNatives navigation with menu sections
   - Main: Home, Opportunities, My Work, Jobs, AI career chat
   - Communication: Timeline, Inbox, Calendar, Events, My Communities
   - Default Spaces: Department Wall, National Network
2. **Dashboard** (AI career chat): Shows "My Resumes" with CV grid cards and upload section
3. **CV Workspace** (after upload/selection): Two-pane layout
   - Left pane: CV template preview with inline editing
   - Right pane: AI Analysis panel with three tabs

**Three Assessment Tracks:**
1. **CV Assessment**: AI-powered resume analysis with scores and recommendations
2. **AI Advisor**: Chat interface for personalized CV improvement advice
3. **JD Match**: Paste job description to see match rate and optimization tips

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
  Header.tsx                  - App header with branding and user menu
  Dashboard.tsx               - CV grid dashboard with upload section
  CVWorkspace.tsx             - Two-pane workspace (preview + AI analysis)
  AIAnalysisPanel.tsx         - Right-pane AI analysis with 3 assessment tracks
  UploadDropzone.tsx          - File upload component
  FileList.tsx                - Uploaded files list
  CVPreview.tsx               - Parsed CV preview with templates
  TemplateSelector.tsx        - CV template picker
  RawTextView.tsx             - Raw extracted text view
  JsonView.tsx                - JSON data view
  ThemeProvider.tsx           - MUI light theme configuration
/nest                         - NestJS backend (for future expansion)
  start.ts                    - NestJS application entry point
  app.module.ts               - Root NestJS module
  /cv                         - CV feature module
  /database                   - Database module
/lib
  /ai/rules.ts                - Centralized AI rules, prompts, and scoring rubrics
  /db/mongodb.ts              - MongoDB connection utility (JSDoc documented)
  /parse/parseCv.ts           - CV parsing logic with AI extraction (JSDoc documented)
  /parse/normalize.ts         - Deterministic normalization functions (JSDoc documented)
  /export/exportCV.ts         - CV export to PDF/DOCX/TXT/JSON (JSDoc documented)
  /swagger.ts                 - OpenAPI 3.0 specification
/types
  cv.ts                       - TypeScript interfaces
/app
  /api-docs/page.tsx          - Swagger UI documentation page
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
