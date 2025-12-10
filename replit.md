# CV Intelligence Parser

## Overview

CV Intelligence Parser is a web application for uploading, parsing, and exporting resumes/CVs. Users can upload PDF, DOCX, DOC, or TXT files, and the system extracts structured data including contact information, work experience, education, and skills. The application provides multiple viewing modes (preview, raw text, JSON), template selection for CV presentation, and batch processing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Bifurcated Architecture

The application uses a **bifurcated architecture** with two separate services:

1. **Next.js Frontend (Port 5000)**: Handles UI rendering and proxies API requests
2. **NestJS Backend (Port 3001)**: REST API for CV parsing, storage, and orchestration

This architecture supports complex features like queues, real-time processing, and service orchestration.

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
- Next.js API routes proxy to NestJS backend for external accessibility

### Backend Architecture

**Framework**: NestJS with TypeScript
- Modular architecture with separate modules for CV, Database, and Configuration
- File uploads handled via Multer with memory storage (10MB limit)
- Dependency injection using explicit `@Inject()` decorators (required for tsx runtime)

**NestJS Modules**:
- `CvModule`: CV parsing and CRUD operations
- `DatabaseModule`: MongoDB connection management
- `ConfigModule`: Environment configuration

**CV Parsing** (`nest/cv/parse.service.ts`):
- `mammoth` for DOCX parsing
- `pdf-parse` for PDF text extraction
- **AI-powered extraction** using OpenAI GPT-4o-mini for intelligent parsing
- Regex-based fallback for emails, phones, LinkedIn profiles

**API Endpoints** (NestJS on port 3001):
- `POST /api/cv/parse` - Single file parsing
- `POST /api/cv/parse/batch` - Batch file parsing
- `GET /api/cv/list` - List all CVs
- `DELETE /api/cv` - Delete a CV

**Next.js Proxy Routes** (port 5000):
- `POST /api/parse` → NestJS `/api/cv/parse`
- `POST /api/parse/batch` → NestJS `/api/cv/parse/batch`
- `GET /api/cvs` → NestJS `/api/cv/list`
- `DELETE /api/cvs` → NestJS `/api/cv`

### Data Storage

**Current Implementation**: MongoDB
- Connection managed by NestJS `DatabaseService`
- CV documents stored with parsed data and raw text
- Persistence across server restarts
- Fallback to in-memory storage if MongoDB unavailable

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
    /parse/route.ts          - Proxy to NestJS parse endpoint
    /parse/batch/route.ts    - Proxy to NestJS batch endpoint
    /cvs/route.ts            - Proxy to NestJS CV operations
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
/nest
  start.ts                    - NestJS application entry point
  app.module.ts               - Root NestJS module
  /cv
    cv.module.ts              - CV feature module
    cv.controller.ts          - REST API controller
    cv.service.ts             - CV CRUD operations
    parse.service.ts          - CV parsing logic
  /database
    database.module.ts        - Database module
    database.service.ts       - MongoDB connection service
/lib
  /db/mongodb.ts              - Legacy MongoDB utility (for reference)
  /parse/parseCv.ts           - Original parsing logic (now in NestJS)
/types
  cv.ts                       - TypeScript interfaces (shared)
```

## Running the Application

The application requires both services to run:

1. **Start NestJS Backend**: 
   ```bash
   cd nest && npx tsx --tsconfig tsconfig.json start.ts
   ```
   Runs on port 3001

2. **Start Next.js Frontend** (via workflow):
   ```bash
   npm run dev
   ```
   Runs on port 5000

## Important Technical Notes

### NestJS Dependency Injection with tsx
When running NestJS with `tsx` instead of `ts-node`, decorator metadata is not emitted properly. This requires explicit `@Inject()` decorators:

```typescript
constructor(
  @Inject(CvService) private readonly cvService: CvService,
  @Inject(ParseService) private readonly parseService: ParseService
) {}
```

### tsconfig.json Configuration
The NestJS tsconfig must NOT extend the root tsconfig (which has `noEmit: true`). It needs its own configuration with:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "target": "ES2021",
    "module": "commonjs"
  }
}
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
- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express` - NestJS framework
- `@nestjs/config` - Configuration management
- `multer` - File upload handling
- `mongodb` - MongoDB driver for data persistence

### Build Tools
- `next` - Next.js 15 framework
- `typescript` - Type checking
- `tsx` - TypeScript execution for development
