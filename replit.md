# CV Intelligence Parser

## Overview
The CV Intelligence Parser is a web application designed to streamline the process of uploading, parsing, and exporting resumes/CVs. It supports various file formats (PDF, DOCX, DOC, TXT) and extracts structured data such as contact information, work experience, education, and skills. The application offers multiple viewing options (preview, raw text, JSON), customizable CV templates, and batch processing. Its core purpose is to provide intelligent CV assessment, job description matching, and personalized career advice, aiming to empower users with tools for career advancement and efficient recruitment.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with React and TypeScript, utilizing Server-Side Rendering (SSR) via the App Router.
- **Role**: Pure frontend - no API routes. All backend calls go directly to NestJS.
- **UI/UX**: Material UI (MUI) with custom theming (Cormorant Garamond for headings, Source Sans 3 for body), featuring a light theme with indigo and cyan accents, soft shadows, and rounded corners.
- **Design System**: Includes a modular registry for nine CV template styles (modern-dark, classic-light, executive, student-modern, etc.) and EduNatives branding.
- **Student Template Features**: The student-modern template includes:
    - Circular photo placeholder in header
    - Forced education-first section ordering (projects → summary → education → experience → skills → certifications → strengths)
    - Featured Projects section with editable technology badges (add/remove)
    - Left-bordered section headers with accent color
- **API Configuration**: Uses `NEXT_PUBLIC_API_URL` environment variable to point to NestJS backend (default: `http://localhost:3001/api`).
- **UX Flow**: A two-pane workspace with a left-sidebar navigation, a dashboard for CV management, and a right-pane for AI Analysis featuring three assessment tracks: CV Assessment, AI Advisor, and JD Match.

### Backend Architecture
- **Framework**: NestJS backend (port 3001) handles all API logic. Next.js (port 5000) is purely frontend.
- **NestJS Backend** (`nest/` folder):
    - `nest/start.ts`: Bootstrap entry point on port 3001 with `/api` prefix, CORS enabled
    - `nest/app.module.ts`: Root module importing AssessmentModule, CvModule, DatabaseModule
    - `nest/assessment/`: CV assessment, JD matching, prompt comparison, and AI advisor
    - `nest/cv/`: CV parsing with file upload support
    - `nest/database/`: MongoDB connection service
- **API Endpoints** (NestJS - all prefixed with `/api`):
    - `POST /api/cv/parse`: Single CV parsing with file upload
    - `POST /api/cv/parse/batch`: Batch CV parsing
    - `GET /api/cv/list`: List parsed CVs
    - `DELETE /api/cv`: Delete CV
    - `GET /api/assess/providers`: Available LLM providers
    - `POST /api/assess/langchain`: CV assessment with structured output
    - `POST /api/assess/jd-match`: JD matching with three-score system
    - `POST /api/assess/compare`: Compare old vs new assessment prompts
    - `POST /api/assess/advisor`: AI career advisor chat
- **CV Parsing**: Implemented using `mammoth` (DOCX), `pdf-parse` (PDF), and AI-powered extraction via Gemini 2.5 Flash. The NestJS ParseService now uses AI for comprehensive CV parsing (all experiences, education, skills) with regex-based fallback when AI is unavailable.
- **CV Type Detection**: During parsing, the system automatically detects CV classification displayed in progress bar:
    - AI analysis of experience, education indicators, and keywords
    - Heuristic fallback: regex patterns for research/academic indicators, experience count, years of experience
    - CVType values: `student` (enrolled), `fresh_grad` (0-2 years), `researcher` (PhD/postdoc/academic), `professional` (3+ years industry)
- **Template Selector Logic**: Based on detected cvType, template dropdowns are conditionally enabled:
    - Student/Fresh Grad CVs: Students Templates enabled, Professional Templates disabled
    - Researcher/Professional CVs: Professional Templates enabled, Students Templates disabled
- **AI-Powered Features**: All AI operations use a multi-provider LLM abstraction layer supporting Gemini and OpenAI. The v2.3 CV Intelligence Engine provides consistent, type-safe structured output via Zod schemas.
- **Multi-Provider Support**: 
    - Gemini: GOOGLE_API_KEY (user's direct key) or AI_INTEGRATIONS_GEMINI_API_KEY (Replit integration)
    - OpenAI: AI_INTEGRATIONS_OPENAI_API_KEY (Replit integration) - uses gpt-4o by default
    - Provider selection via `/api/assess/providers` endpoint and `provider` parameter in assessment APIs
    - CV parsing prefers OpenAI when available, falls back to Gemini
- **API Key Priority**: GOOGLE_API_KEY takes precedence for Gemini. Both providers can be used simultaneously.
- **Startup**: `server/index.ts` starts both Next.js (frontend) and NestJS (backend) servers together.

### Data Storage
- **Database**: MongoDB for persistent storage of CV documents and parsed data.

## Environment Variables
- `NEXT_PUBLIC_API_URL`: NestJS API base URL (default: `http://localhost:3001/api`)
- `GOOGLE_API_KEY` or `AI_INTEGRATIONS_GEMINI_API_KEY`: Gemini API key
- `AI_INTEGRATIONS_OPENAI_API_KEY`: OpenAI API key

## External Dependencies

### Document Processing
- `mammoth`: DOCX file parsing.
- `pdf-parse`: PDF text extraction.

### Frontend Libraries
- `@mui/material`: Core Material UI components.
- `@mui/icons-material`: Material UI icons.
- `@mui/material-nextjs`: Integration for Next.js App Router.
- `@emotion/react`, `@emotion/styled`: Styling engine for MUI.

### Backend Libraries
- `mongodb`: MongoDB driver for database interaction.
- `@langchain/google-genai`: LangChain Gemini integration (ChatGoogleGenerativeAI).
- `@langchain/openai`: LangChain OpenAI integration (ChatOpenAI).
- `@langchain/core`: LangChain core utilities (prompts, messages, chains).
- `langchain`: LangChain base utilities.
- `@nestjs/common`, `@nestjs/core`: NestJS framework.

### Build Tools
- `next`: Next.js framework.
- `typescript`: Type checking.
- `tsx`: TypeScript execution for development.
