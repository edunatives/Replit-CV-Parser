# CV Intelligence Parser

## Overview

CV Intelligence Parser is a web application for uploading, parsing, and exporting resumes/CVs. Users can upload PDF, DOCX, DOC, or TXT files, and the system extracts structured data including contact information, work experience, education, and skills. The application provides multiple viewing modes (preview, raw text, JSON), template selection for CV presentation, and batch processing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **JD Match v2.2 - Experience Factors + Nature Fit** (Student View Only):
  - **Experience Factors (H1-H9)**: Years analysis, depth analysis, and growth areas with encouraging student messages
    - Years: total_years, relevant_domain_years, recency_score, meets_requirement, student_message
    - Depth: depth_level (Entry/Developing/Proficient/Expert), scope_score, impact_score, complexity_handled
    - Issue codes: H1 (Years Gap), H2 (Domain Gap), H3 (Industry Gap), H4 (Recency), H5 (Scope), H6 (Complexity), H7 (Impact), H8 (Progression), H9 (Depth/Breadth)
  - **Nature Fit (G1-G9)**: Profile alignment with transferable value highlighting
    - overall_fit (Excellent/Good/Partial/Challenging), fit_score, strengths array
    - Issue codes: G1-G9 for education, domain, industry, work style, career path mismatches
  - **JD Nature Parsing**: role_level, domain_required, years_required, work_arrangement, company_stage
  - **Student Summary**: headline, encouragement message, quick_wins array
  - Token-optimized prompt with student-friendly messaging throughout
  - Security reuses existing: containsInjectionAttempt(), sanitizeAIInput(), TOKEN_LIMITS
- **Entry-Level Pagination**: CVPreview now splits large sections at individual entry boundaries:
  - PageItem types: `experience-header`, `experience-entry`, `education-header`, `education-entry`, `summary`, `skills`, `strengths`, `certifications`
  - Each entry has its own height estimate (80px base + description lines x 24px for experience)
  - Page breaks occur between entries, not just between sections
  - Continuation headers ("Experience (continued)") appear when sections span multiple pages
  - Headers always stay paired with at least one entry to prevent orphan headers
  - `renderItem()` dispatches to dedicated render functions based on item type
- **Multi-Paper Pagination**: CVPreview now renders discrete Paper components for each page:
  - `pages.map()` iterates over calculated pages array
  - First page includes header (`renderHeader()`) + items
  - Subsequent pages show `PageBadge` with page number + items
  - `BOTTOM_GUTTER` (48px) spacing applied to each page's content
  - A4 dimensions (210mm x 297mm) with max content height ~1000px
- **Forensic CV Engine v9.3 Upgrade**: Enhanced assessment and JD match prompts:
  - **Assessment Output**: `overallScore`, `level` (Exceptional/Strong/Good/Fair/Needs Work), `inflation` flag, `verdict` (2-3 sentence summary), `sections`, `strengths`, `weaknesses`, `recommendations`, `highlights` (inline CV annotations with red/green/yellow types)
  - **JD Match Output**: `jd_parsing` (role_title, company, mandatory_skills, nice_to_have_skills), `match_analysis` (overall_match_score, verdict, summary, matched_skills, missing_skills), `evidence_map` (jd_requirement -> cv_evidence with Match/Weak/Missing status)
  - Security: All existing checks preserved (`containsInjectionAttempt()`, `sanitizeAIInput()`, `DANGEROUS_PATTERNS`, unicode normalization)
  - Weighted scoring: AUDIT_WEIGHTS (experience 30%, summary 20%, education 15%, skills 15%, contact 10%, presentation 10%)
  - JD Match weights: Hard Skills 40%, Experience 25%, Responsibilities 20%, Soft Skills 10%, Education 5%
  - UI updated to display: level badge, inflation warning chip, verdict text, highlights with color-coded borders, evidence map with status chips
- **A4 page layout**: CV preview now renders in proper A4 dimensions (210mm x 297mm) with gray background and white page with shadow
- **Section rearrange modal**: Drag-and-drop modal for reordering CV sections (summary, experience, education, skills, strengths, certifications). Replaces inline up/down arrows with cleaner modal UX via SectionRearrangeModal component
- **Dynamic section ordering**: CV sections render based on `sectionOrder` array stored in CV data
- **Header layout**: EduNatives logo moved from sidebar to header bar, with centered search bar and People/Filter buttons
- **Bullet point preservation**: `normalizeDescription()` function preserves newlines in experience descriptions for proper bullet formatting
- **Skills/Certifications styling**: Consistent chip style with muted accent background, bold text, and delete icons
- **Template registry**: Added corporate and business templates to exportCV.ts for complete export support

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
- File uploads handled via FormData with memory storage (3MB limit)
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
- Eight CV template styles managed via modular registry (`lib/templates/index.ts`):
  - modern-dark, classic-light, executive, minimal, creative, professional, corporate, business
- Template registry supports: header variants (default, centeredLines, underline), meta icons, company color customization
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
  /templates/index.ts         - CV template registry with TemplateStyle interface
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
