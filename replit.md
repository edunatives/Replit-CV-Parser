# CV Intelligence Parser

## Overview
The CV Intelligence Parser is a web application designed to streamline the process of uploading, parsing, and exporting resumes/CVs. It supports various file formats (PDF, DOCX, DOC, TXT) and extracts structured data such as contact information, work experience, education, and skills. The application offers multiple viewing options (preview, raw text, JSON), customizable CV templates, and batch processing. Its core purpose is to provide intelligent CV assessment, job description matching, and personalized career advice, aiming to empower users with tools for career advancement and efficient recruitment.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with React and TypeScript, utilizing Server-Side Rendering (SSR) via the App Router.
- **UI/UX**: Material UI (MUI) with custom theming (Cormorant Garamond for headings, Source Sans 3 for body), featuring a light theme with indigo and cyan accents, soft shadows, and rounded corners.
- **Design System**: Includes a modular registry for eight CV template styles (e.g., modern-dark, classic-light, executive) and EduNatives branding.
- **Key Design Decisions**: App Router with client components, MUI Grid v2 for responsiveness, and AppRouterCacheProvider for MUI hydration.
- **UX Flow**: A two-pane workspace with a left-sidebar navigation, a dashboard for CV management, and a right-pane for AI Analysis featuring three assessment tracks: CV Assessment, AI Advisor, and JD Match.

### Backend Architecture
- **Framework**: Next.js API Routes for core functionalities.
- **CV Parsing**: Implemented using `mammoth` (DOCX), `pdf-parse` (PDF), and LangChain-style Zod-validated AI extraction via Gemini 2.5 Flash. Regex-based fallbacks are in place for key fields.
- **API Endpoints**:
    - `/api/parse`: Single CV parsing (uses LangChain module with Zod validation).
    - `/api/parse/batch`: Batch CV parsing.
    - `/api/cvs`: CV CRUD operations.
    - `/api/assess/langchain`: LangChain-based CV assessment with Zod-validated structured output (primary endpoint).
    - `/api/jd-match/langchain`: LangChain-based JD matching with v2.2 three-score system (primary endpoint).
    - `/api/advisor`: AI career advisor chat.
    - `/api/assess`: Legacy CV assessment endpoint.
    - `/api/jd-match`: Legacy JD match endpoint.
- **AI-Powered Features**: All AI operations use a multi-provider LLM abstraction layer supporting Gemini and OpenAI. The v2.3 CV Intelligence Engine provides consistent, type-safe structured output via Zod schemas.
- **Multi-Provider Support**: 
    - Gemini: GOOGLE_API_KEY (user's direct key) or AI_INTEGRATIONS_GEMINI_API_KEY (Replit integration)
    - OpenAI: AI_INTEGRATIONS_OPENAI_API_KEY (Replit integration) - uses gpt-4o by default
    - Provider selection via `/api/providers` endpoint and `provider` parameter in assessment APIs
- **API Key Priority**: GOOGLE_API_KEY takes precedence for Gemini. Both providers can be used simultaneously.
- **API Documentation**: Interactive Swagger UI at `/api-docs` with an OpenAPI 3.0 specification.
- **NestJS Backend (Optional)**: An alternative NestJS backend is provided for future expansion, supporting advanced features like job queues, real-time processing, and microservices.

### Data Storage
- **Database**: MongoDB for persistent storage of CV documents and parsed data.

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
- `@google/genai`: Gemini API integration for AI functionalities (via Replit AI Integrations).

### Build Tools
- `next`: Next.js framework.
- `typescript`: Type checking.
- `tsx`: TypeScript execution for development.