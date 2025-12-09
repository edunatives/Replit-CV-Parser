# CV Intelligence Parser

## Overview

CV Intelligence Parser is a web application for uploading, parsing, and exporting resumes/CVs. Users can upload PDF, DOCX, DOC, or TXT files, and the system extracts structured data including contact information, work experience, education, and skills. The application provides multiple viewing modes (preview, raw text, JSON), template selection for CV presentation, and batch processing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, bundled using Vite
- Single-page application with client-side routing via `wouter`
- State management through React hooks and TanStack Query for server state
- Component library: shadcn/ui with Radix UI primitives
- Styling: Tailwind CSS with CSS variables for theming (light/dark mode support)

**Key Design Decisions**:
- Component-based architecture with clear separation between UI components (`/components/ui`), feature components (`/components`), and pages (`/pages`)
- Theme system using CSS custom properties allows runtime theme switching
- File handling uses browser File API with refs to maintain file data between uploads and processing

### Backend Architecture

**Framework**: Express.js with TypeScript
- HTTP server serves both API routes and static frontend assets
- File uploads handled via Multer with memory storage (10MB limit)
- CV parsing implemented in `/server/cvParser.ts` using:
  - `mammoth` for DOCX parsing
  - `pdf-parse` for PDF text extraction
  - Regex-based pattern matching for extracting emails, phones, LinkedIn profiles

**API Endpoints**:
- `POST /api/parse-cv` - Single file parsing
- `POST /api/parse-cvs` - Batch file parsing (up to 50 files)

**Build System**:
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Selective dependency bundling for faster cold starts

### Data Storage

**Current Implementation**: In-memory storage (`MemStorage` class)
- User data stored in JavaScript Map
- No persistence between server restarts

**Database Schema** (Drizzle ORM with PostgreSQL):
- `users` table with id, username, password fields
- Schema defined in `/shared/schema.ts`
- Drizzle-zod integration for type-safe validation
- Database URL configured via `DATABASE_URL` environment variable

### Design System

Custom design system documented in `/design_guidelines.md`:
- Dark theme with gold accents as primary palette
- Typography: Cormorant Garamond for headings, Source Sans 3 for body
- Compact spacing scale optimized for data-dense interfaces
- Six CV template styles (modern-dark, classic-light, executive, minimal, creative, professional)

## External Dependencies

### Document Processing
- `mammoth` - DOCX to text conversion
- `pdf-parse` - PDF text extraction

### Frontend Libraries
- `@tanstack/react-query` - Server state management
- `@radix-ui/*` - Accessible UI primitives
- `react-hook-form` with `@hookform/resolvers` - Form handling
- `lucide-react` - Icon library
- `class-variance-authority` + `clsx` + `tailwind-merge` - Styling utilities

### Backend Libraries
- `express` - HTTP server
- `multer` - Multipart file upload handling
- `drizzle-orm` with `pg` - Database ORM and PostgreSQL driver
- `express-session` with `connect-pg-simple` - Session management

### Build Tools
- `vite` - Frontend bundling and dev server
- `esbuild` - Server bundling
- `tsx` - TypeScript execution for development
- `drizzle-kit` - Database migrations

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner