# 🌟 Next-Gen Dynamic Wedding Invitation Blueprint

Welcome to the architectural specification for the next-generation, premium, and fully dynamic **Digital Wedding Invitation Framework**. 

This document serves as the master guide for building, styling, and customizing modular, high-end invitation templates. Designed for **vibe coders** and **modern developers**, it translates the patterns of your original template into a production-ready, type-safe, and visually stunning framework using the **Frontend Expert** specifications.

---

## 🎨 The Next-Gen Vibe: Editorial Minimal & Warm Glassmorphism

To elevate the previous iteration from a standard mobile layout to a high-end, premium experience, the next generation adopts a **Warm Editorial Glassmorphic** aesthetic:

*   **Premium Typography**: Headings use high-end serifs like *Playfair Display* or *Cinzel* for english, paired with elegant geometric humanists like *Tajawal* for Arabic. Body text utilizes modern sans-serifs like *Inter* or *Plus Jakarta Sans* for perfect readability.
*   **Aesthetic Overlays**: Instead of flat dark colors, sections use semi-transparent backdrop filters (`backdrop-filter: blur(12px)`) with razor-thin borders (`1px solid rgba(255, 255, 255, 0.06)`) that blend seamlessly into the background video or parallax imagery.
*   **Tailored HSL Color System**: Colors are defined dynamically using CSS Custom Properties backed by HSL values, allowing developers to implement dynamic contrast adjustments, dark/light variations, and custom glow effects effortlessly.
*   **Micro-Interactions**: Subtle, organic hover effects on buttons, interactive elements (like the rotating vinyl disc), and form inputs create a responsive and alive user experience.

---

## 🏗️ Folder Structure Blueprint

To organize the templates cleanly and make them easily maintainable, we suggest adopting the **Feature-Sliced Architecture** pattern from your **Frontend Expert** skill:

```markdown
wedding-template/
├── .agent/                 # Agent config and skills
├── docs/                   # Architectural blueprints and guides
├── public/                 # Static assets (MP4s, SVGs, static pictures)
├── src/
│   ├── assets/             # Shared media, logos, global icons
│   ├── components/         # Global reusable UI components
│   │   ├── SuspenseLoader.tsx
│   │   ├── GlassCard.tsx
│   │   └── LanguageProvider.tsx
│   ├── config/             # Configuration engine
│   │   ├── config.ts       # Main dynamic wedding configuration
│   │   └── types.ts        # TypeScript schemas for strict safety
│   ├── features/           # Domain-specific dynamic features
│   │   ├── hero/           # Hero section (with dynamic background video)
│   │   ├── countdown/      # Real-time countdown timer
│   │   ├── story/          # Interactive bride & groom timeline
│   │   ├── music/          # Rotating vinyl disc audio controller
│   │   ├── rsvp/           # Full interactive RSVP modal & forms
│   │   └── upload/         # Serverless Google Drive upload integration
│   ├── styles/             # Modular CSS theme system
│   │   ├── theme.css       # HSL custom properties & typography
│   │   └── main.css        # Layout, utilities, and global animations
│   ├── App.tsx             # Master shell orchestration
│   └── main.tsx            # Mounting entrypoint
```

---

## 📖 Blueprint Document Directory

The framework is documented across four specialized guides located in this folder:

1.  **[1. Configuration Specification (config-specification.md)](file:///e:/Websites/template-blueprint/config-specification.md)**  
    *Declares the type-safe, fully toggleable config schema (`types.ts`) mapping colors, toggles, language content, and media paths.*
2.  **[2. Interactive Component Blueprints (component-blueprints.md)](file:///e:/Websites/template-blueprint/component-blueprints.md)**  
    *Complete blueprints for the Loading Screen, Hero Video, Countdown, RSVP Modal, and Serverless Google Drive Uploader.*
3.  **[3. Animation & Audio System (animation-system.md)](file:///e:/Websites/template-blueprint/animation-system.md)**  
    *Deep-dive into high-performance animations, scroll reveals, SVG heart-drawing paths, and the dynamic rotating vinyl music disc.*
4.  **[4. Sequence of Implementation Tasks (tasks-roadmap.md)](file:///e:/Websites/template-blueprint/tasks-roadmap.md)**  
    *A step-by-step roadmap designed for developers (or AI coders) to scaffold, implement, style, test, and deploy a brand-new template.*

---

> [!TIP]
> **Why this works:** By separating the configuration structure (`config.ts`) from the visual components and layout styling, you can instantly swap styles, font pairings, and animation sets to launch **unlimited, unique templates** for different couples in a matter of seconds!
