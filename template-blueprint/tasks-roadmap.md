# 🗺️ Sequence of Implementation Tasks

This step-by-step roadmap divides the creation of a dynamic, modular, and beautiful digital wedding invitation template framework into structured sprints. Use this sequence of tasks to systematically build any new template or upgrade the current one.

---

## 🏁 Phase 1: Environment Scaffolding

- [ ] **Task 1.1: Initialize React + TypeScript App**
  Create a modern SPA setup with standard toolchains (Vite or Next.js Client Side).
  *Command Example:*
  ```bash
  npx -y create-vite@latest wedding-template --template react-ts
  ```
- [ ] **Task 1.2: Install Core Dependencies**
  Install material styling libraries and state packages:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
  ```
- [ ] **Task 1.3: Configure Absolute Import Aliases**
  Define mappings in `tsconfig.json` so imports are elegant:
  ```json
  "paths": {
    "@/*": ["./src/*"],
    "~types/*": ["./src/types/*"],
    "~components/*": ["./src/components/*"],
    "~features/*": ["./src/features/*"]
  }
  ```

---

## ⚙️ Phase 2: Configuration & Theme Engine

- [ ] **Task 2.1: Write Schema Definition**
  Copy the dynamic invitation structure into `src/config/types.ts` as specified in the **[Configuration Specification](config-specification.md)**.
- [ ] **Task 2.2: Set Up Active Configuration Instance**
  Create `src/config/config.ts` mapping names, colors, font families, visibility toggles, and Unsplash or custom media URLs.
- [ ] **Task 2.3: Establish HSL Binding Hook**
  Implement the DOM custom property generator in your entry orchestration so that CSS styles update instantly when `config.ts` colors are changed.

---

## ⏳ Phase 3: Core Framework Components

- [ ] **Task 3.1: Build SVG Path Loading Screen**
  Write `components/Loader.tsx` with animated heart SVG dashboard offset and random percentage step loaders.
- [ ] **Task 3.2: Code the Background Video Hero**
  Create `features/hero/Hero.tsx` using hardware-accelerated looping muted MP4 video. Apply the custom overlay gradient and support text visibility switches.
- [ ] **Task 3.3: Implement Scroll Reveal Wrapper**
  Write `components/ScrollReveal.tsx` utilizing a vanilla browser `IntersectionObserver` to trigger buttery smooth `translate3d` transforms.

---

## 💌 Phase 4: Dynamic Features & Integrations

- [ ] **Task 4.1: Code the Live Countdown Timer**
  Write `features/countdown/Countdown.tsx` executing dynamic time computation updates. Ensure single digit numbers format automatically with leading zeros (e.g. `09`).
- [ ] **Task 4.2: Build the Dynamic Rotating Vinyl Player**
  Write `features/music/VinylPlayer.tsx` providing pause/play state hooks. Connect it to an ambient audio tag and configure the infinite spin keyframe styles.
- [ ] **Task 4.3: Implement the RSVP Spring Modal**
  Code the RSVP form with fields for Guest Name, Attendance select, and Optional comments. Animate overlay displays using backdrop filters and spring scales.
- [ ] **Task 4.4: Deploy Google Apps Script Web App**
  Create a new sheet/script in Google Drive, copy the serverless file uploader `Code.gs` from the **[Component Blueprints](component-blueprints.md)**, deploy it as a public web app, and copy the deployment ID.
- [ ] **Task 4.5: Code the Base64 Phone Uploader**
  Build `features/upload/Uploader.tsx` with file selectors, file type filters (images and videos), a base64 parser, and progress states connecting to your GAS deployment URL.

---

## 🌍 Phase 5: Language & Visibility Logic

- [ ] **Task 5.1: Configure dir="rtl" Mapping**
  Create a context provider that switches language parameters and toggles layout directions globally.
- [ ] **Task 5.2: Bind Toggle Checks to Render Paths**
  Wrap every section and child element in conditional visibility checks to ensure that turning off elements like the hero location button or countdown does not break page formatting.

---

## 🧪 Phase 6: Verification & Polish

- [ ] **Task 6.1: Run Performance Checks**
  Confirm all background videos loop smoothly without freezing page render speeds. Verify image grids do not cause layout shifts (enforce explicit dimensions or flex bases).
- [ ] **Task 6.2: Test File Upload Pipeline**
  Verify that selecting a photo from a phone camera successfully encodes the image and transfers it to the custom Google Drive directory.
- [ ] **Task 6.3: Multi-Device QA**
  Verify typography scaling and HSL contrast readability across desktop viewports, tablets, and mobile smartphones.
