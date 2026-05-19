# 🎬 Animation & Audio System Blueprint

Animations play a critical role in transforming a standard web invitation into a premium, deeply emotional digital ceremony. By leveraging high-performance CSS transitions, hardware acceleration, and seamless audio controls, we create a design that feels premium, alive, and polished.

---

## 🏎️ 1. High-Performance CSS Rules

To maintain a buttery-smooth 60fps on mobile safari and android chrome, all animations follow these strict rules from the **Frontend Expert** guidelines:

1.  **Animate Only `transform` and `opacity`**: Modifying properties like `width`, `height`, `margin`, or `top` forces the browser to recalculate the document layout (Reflow), causing lag. Transforming position (`translate3d`), scale (`scale`), or rotation (`rotate`) is handled entirely by the GPU (Compositing).
2.  **Use the Ultra-Premium Cubic Bezier**: Replace standard linear or ease transitions with a custom cinematic deceleration curve:
    ```css
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    ```
3.  **Hardware Acceleration**: Trigger GPU layer caching for animated components using the translate3d hack:
    ```css
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
    ```

---

## 🎼 2. The Interactive Vinyl Music Disc (`features/music/VinylPlayer.tsx`)

The music player is one of the most delightful visual cues. A retro-style vinyl record rotates gracefully when the couple's background music plays. It responds organicially to gestures and hovers.

### Interactive States
*   **Default (Paused)**: Static, with a glowing play icon in the center.
*   **Hover**: Vinyl record slides out slightly from its cover, tilts `5deg` dynamically, and shows a slight scale transition.
*   **Active (Playing)**: Rotates indefinitely at a comfortable, elegant speed (`15s` per rotation).

```typescript
import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface VinylPlayerProps {
  audioSrc: string;
  songTitle: string;
}

export const VinylPlayer: React.FC<VinylPlayerProps> = ({ audioSrc, songTitle }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio autoplay block:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 8,
      }}
    >
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Vinyl Disc Container */}
      <Box
        onClick={togglePlayback}
        className={`vinyl-wrapper ${isPlaying ? "playing" : ""}`}
        sx={{
          position: "relative",
          width: 200,
          height: 200,
          cursor: "pointer",
          borderRadius: "50%",
          boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
          background: "#0d0d0d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            transform: "scale(1.05) rotate(5deg)",
          },
        }}
      >
        {/* Vinyl Grooves & Vinyl Sticker */}
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            height: "90%",
            borderRadius: "50%",
            border: "2px dashed rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />

        {/* Dynamic Center Cover (Couple Image or Initial) */}
        <Box
          sx={{
            position: "relative",
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {isPlaying ? (
            <PauseIcon sx={{ color: "var(--color-canvas)", fontSize: 32 }} />
          ) : (
            <PlayArrowIcon sx={{ color: "var(--color-canvas)", fontSize: 32 }} />
          )}
        </Box>
      </Box>

      <Typography
        variant="caption"
        sx={{
          mt: 2,
          letterSpacing: "0.15em",
          color: "var(--color-muted)",
          fontStyle: "italic",
        }}
      >
        🎵 {songTitle}
      </Typography>
    </Box>
  );
};
```

### Vinyl Animation Styles (`styles/theme.css`)
We apply the indefinite rotation keyframe cleanly using a dedicated playing flag:

```css
@keyframes spinVinyl {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.vinyl-wrapper.playing {
  animation: spinVinyl 15s linear infinite;
}

/* Maintain tilt on hover even while spinning */
.vinyl-wrapper:hover {
  box-shadow: 0 16px 48px var(--color-glow-soft);
}
```

---

## 👁️ 3. High-Fidelity Scroll-Triggered Reveal-on-Scroll

Sections should fade in gracefully with a bottom-up translate offset when the user scrolls them into viewport view, avoiding standard jarring popping.

### Scroll Reveal Engine Component (`components/ScrollReveal.tsx`)
Rather than relying on massive library dependencies, we build a light, performance-optimized component using raw browser **IntersectionObserver** APIs:

```typescript
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

interface ScrollRevealProps {
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
        transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </Box>
  );
};
```
