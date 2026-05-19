# ⚙️ Configuration Specification

To support **endless templates with entirely different layouts and visual styles**, we must replace the raw, ad-hoc JavaScript objects with a **strictly typed configuration engine**. 

This document defines the schema (`types.ts`) and custom HSL theme system, ensuring that any developer (or AI) can build new invitations that work safely without breaking the site structure.

---

## 🛡️ Strict TypeScript Schema (`src/config/types.ts`)

By specifying every optional field and layout toggle as a TypeScript type, the code editor will highlight any configuration errors immediately at compile time.

```typescript
export interface LanguageString {
  en: string;
  ar: string;
}

export interface CoupleConfig {
  brideName: string;
  groomName: string;
  displayNames: LanguageString;
}

export interface ThemeColors {
  primary: string;           // Primary accent color (e.g. HSL or Hex)
  secondary: string;         // Secondary visual accent
  accent: string;            // Highlights, dividers, gold foil, etc.
  canvas: string;            // Core background body color
  ink: string;               // Core body text color
  white: string;             // Light background surface contrast
  backgroundTop: string;     // Gradient background start
  backgroundBottom: string;  // Gradient background end
  surface: string;           // Glassmorphic panel background
  surfaceStrong: string;     // Raised cards/modals background
  line: string;              // Decorative borders and thin dividers
  glow: string;              // Ambient halo primary glow color
  glowSoft: string;          // Ambient halo secondary glow color
  textMuted: string;         // Muted secondary captions
  overlay: string;           // Dark visual backdrops and masks
}

export interface ThemeFonts {
  heading: string;           // Elegant Serif font name
  body: string;              // Standard Sans font name
  arabic: string;            // Arabic typographic fallback
}

export interface HeroOverlay {
  enabled: boolean;
  background: string;        // CSS Linear-gradient backdrop
}

export interface ThemeConfig {
  heroOverlay: HeroOverlay;
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface SectionVisibility {
  section: boolean;          // Complete toggle for the entire block
  [key: string]: boolean;    // Key-value toggles for specific sub-elements
}

export interface VisibilityConfig {
  hero: SectionVisibility & {
    video: boolean;
    eyebrow: boolean;
    title: boolean;
    names: boolean;
    subtitle: boolean;
    intro: boolean;
    primaryButton: boolean;
    detailsButton: boolean;
    locationButton: boolean;
    memoryCard: boolean;
  };
  countdown: SectionVisibility & {
    days: boolean;
    hours: boolean;
    minutes: boolean;
    seconds: boolean;
  };
  story: SectionVisibility & {
    kicker: boolean;
    title: boolean;
    copy: boolean;
    signature: boolean;
    image: boolean;
  };
  details: SectionVisibility;
  moments: SectionVisibility;
  gallery: SectionVisibility;
  rsvp: SectionVisibility & {
    primaryButton: boolean;
    secondaryButton: boolean;
  };
  upload: SectionVisibility & {
    nameField: boolean;
    noteField: boolean;
    filesField: boolean;
    submitButton: boolean;
  };
  music: SectionVisibility & {
    vinyl: boolean;
    playButton: boolean;
  };
  closing: SectionVisibility;
}

export interface GalleryItem {
  src: string;
  visible: boolean;
  tall?: boolean;            // Grid layout parameter
}

export interface MomentItem {
  visible: boolean;
  image: string;
  title: LanguageString;
  copy: LanguageString;
}

export interface MediaConfig {
  heroVideo: string;
  storyImage: string;
  uploadImage: string;
  gallery: GalleryItem[];
  moments: MomentItem[];
}

export interface WeddingInvitationConfig {
  defaultLanguage: "en" | "ar";
  couple: CoupleConfig;
  theme: ThemeConfig;
  visibility: VisibilityConfig;
  media: MediaConfig;
}
```

---

## 🎨 HSL Tailored Dynamic Color System

In our next-gen dynamic template, we avoid hardcoding raw hex values in CSS files. Instead, the application converts the colors from the configuration into **CSS Custom Properties** (Variables).

This is loaded dynamically in the layout orchestration file using this high-performance pattern:

```typescript
export const applyTheme = (colors: ThemeColors, fonts: ThemeFonts) => {
  const root = document.documentElement;
  
  // Set all fonts dynamically
  root.style.setProperty("--heading-font", fonts.heading);
  root.style.setProperty("--body-font", fonts.body);
  root.style.setProperty("--arabic-font", fonts.arabic);

  // Bind HSL values dynamically for high-fidelity transitions & opacity manipulation
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
};
```

### Premium Glassmorphism CSS Usage Example
By using CSS variables, we can make our cards adjust beautifully to any primary background:

```css
.premium-card {
  background: var(--color-surface);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-line);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.24);
  color: var(--color-ink);
  border-radius: 20px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
}

.premium-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px var(--color-glow-soft);
  border-color: var(--color-accent);
}
```

---

## 🗣️ Multi-Language Architecture (`src/config/i18n.ts`)

To make the template perfectly bilingual (`ar` & `en`), our components render text based on the active language state. Under the hood, the master shell wrapper mounts a dynamic directional handler:

```typescript
// Component layout wrapper hook
export const useDirection = (lang: "en" | "ar") => {
  const isRtl = lang === "ar";
  return {
    dir: isRtl ? "rtl" : "ltr",
    fontFamily: isRtl ? "var(--arabic-font)" : "var(--body-font)",
    align: isRtl ? "right" : "left",
  };
};
```

And in the JSX/HTML layout, we apply the direction dynamically to the body element:
```html
<div class="app-layout" dir={isRtl ? "rtl" : "ltr"} style={{ fontFamily: isRtl ? "var(--arabic-font)" : "var(--body-font)" }}>
  <!-- Dynamically toggled sections -->
</div>
```
