# CV Intelligence Parser - Design Guidelines

## Design Approach
**System Selected**: Custom Design System with Material Design principles for data-heavy applications
**Rationale**: Utility-focused CV parsing tool requiring clarity, information hierarchy, and professional aesthetics. The existing dark theme with gold accents creates a premium, focused experience suitable for professional document processing.

## Core Design Elements

### Typography
**Font Families**:
- Headings: 'Cormorant Garamond', serif (elegant, professional)
- Body/UI: 'Source Sans 3', sans-serif (readable, clean)

**Scale**:
- Application Title: 32px (2rem), weight 600
- Section Headers: 18px, weight 500, uppercase, 0.08em letter-spacing
- UI Labels: 14px (9-11px for compact areas), uppercase, 0.05em letter-spacing
- Body Text: 11px base, 14px for readable content
- Metadata: 9-10px, muted color

### Color System
**Background Palette**:
- Primary: #0a0a0b (deep black)
- Secondary: #141416 (elevated surfaces)
- Card: #1a1a1e (content containers)
- Input: #0d0d0f (form fields)

**Accent & Status**:
- Primary Accent: #c9a227 (gold)
- Accent Light: #e8c547 (hover states)
- Accent Transparent: rgba(201, 162, 39, 0.15) (backgrounds)
- Success: #34d399
- Warning: #fbbf24
- Error: #f87171

**Text Hierarchy**:
- Primary: #f5f5f5 (headings, important text)
- Secondary: #a0a0a5 (labels)
- Body: #909095 (content)
- Muted: #606065 (metadata)

**Borders**:
- Accent Border: rgba(201, 162, 39, 0.2)
- Light Border: rgba(255, 255, 255, 0.06)

### Layout System
**Spacing Units**: Tailwind scale focused on 2, 4, 6, 8, 12, 16, 20, 24, 32
- Compact spacing: p-2, p-4 (form elements, tight UI)
- Standard spacing: p-8, p-12 (cards, sections)
- Generous spacing: p-16, p-24 (page containers)

**Grid Structure**:
- Desktop: Sidebar (280px fixed) + Main Content (flex 1)
- Tablet/Mobile: Single column stack
- Maximum container width: 1500px
- Gap between major sections: 16px

## Component Library

### Navigation & Structure
**Sidebar File List**:
- Fixed width, scrollable content area
- File items with icon (32x32), name, metadata, status indicator
- Drag-and-drop upload zone at top
- Action buttons at bottom
- Active state: gold accent border-left, transparent gold background

**Top Configuration Bar**:
- Horizontal layout with dropdowns and inputs
- Status indicator on right
- Template thumbnails (40x28px) with active state borders

### Data Display
**CV Preview Cards**:
- Sections: Contact, Experience, Education, Skills
- Each section with header, editable fields, inline icons
- Two-column grid for compact info (contact details)
- Timeline layout for experience/education

**Editable Fields**:
- Inline editing on click
- Input fields match background with subtle border
- Focus state: gold border
- Save/cancel micro-actions

### Forms & Controls
**Upload Dropzone**:
- Dashed border (2px)
- Hover/dragover states with gold accent
- Format badges below description
- Center-aligned content

**Buttons**:
- Primary: Solid gold background, dark text
- Secondary: Transparent with light border
- Sizing: 8-14px vertical padding, 10px uppercase text
- Rounded corners: 6px

**Dropdowns & Inputs**:
- Dark input background with light border
- 6-10px padding
- Rounded: 4px
- Gold border on focus

### Template Previews
**Six Template Thumbnails**:
1. Modern Dark: #1a1a1e background
2. Classic Light: White background
3. Executive: Gradient (dark blue tones)
4. Minimal: Light gray (#fafafa)
5. Creative: White with colored accent border
6. Professional: Blue gradient

Active template: 2px gold border with soft glow

### Status Indicators
**File Processing States**:
- Pending: Gray dot (6px)
- Processing: Warning yellow with pulse animation
- Done: Success green
- Error: Error red

**Status Display**: Small dots (6-8px) with corresponding colors

### Interactive Elements
**File Item Interactions**:
- Hover: Subtle background shift
- Active: Gold accent border-left (3px)
- Remove button: Appears on hover, red on hover

**Tab Navigation**:
- Uppercase 10px text
- Active: Dark background with gold text
- Inactive: Transparent with muted text

## Animations
**Minimal & Purposeful**:
- Pulse animation for processing status (1s infinite)
- Smooth transitions: 0.2s ease for hover states
- Scale transforms: 1.05 for thumbnail hovers
- No scroll-based or complex animations

## Application-Specific Patterns

### Dual-Pane Layout
Left pane (sidebar): File management and upload
Right pane (main): Preview and editing interface
Responsive: Stack on mobile/tablet

### Information Density
High-density interface with small font sizes (9-11px base)
Compact spacing for data-heavy sections
Clear visual hierarchy through weight and color, not space

### Professional Aesthetic
Dark theme conveys focus and sophistication
Gold accents suggest premium quality
Serif headings add elegance while sans-serif body ensures readability
Clean, minimal borders maintain refinement