/**
 * 🎨 PREMIUM DYNAMIC WEDDING INVITATION ORCHESTRATION ENGINE
 * ✍️ Written in high-performance vanilla ES6 JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.invitationConfig;
  if (!config) {
    console.error("Configuration file (config.js) could not be resolved.");
    return;
  }

  let currentLang = config.defaultLanguage || "en";
  let selectedFiles = [];

  // ==========================================================================
  // 1. DYNAMIC CSS HSL & THEME BINDING
  // ==========================================================================
  function initTheme() {
    const root = document.documentElement;
    const colors = config.theme.colors;
    const fonts = config.theme.fonts;

    if (colors) {
      // Map colors to CSS custom properties
      root.style.setProperty("--bg", colors.canvas);
      root.style.setProperty("--canvas", colors.canvas);
      root.style.setProperty("--text", colors.ink);
      root.style.setProperty("--muted", colors.textMuted);
      
      root.style.setProperty("--primary", colors.primary);
      root.style.setProperty("--secondary", colors.secondary);
      root.style.setProperty("--accent", colors.accent);
      root.style.setProperty("--line", colors.line);
      root.style.setProperty("--surface", colors.surface);
      root.style.setProperty("--surface-strong", colors.surfaceStrong);
      
      root.style.setProperty("--color-glow", colors.glow);
      root.style.setProperty("--color-glow-soft", colors.glowSoft);
      root.style.setProperty("--loader-bg", colors.backgroundTop);
      root.style.setProperty("--hero-overlay", colors.overlay);
      
      root.style.setProperty("--bg-gradient-start", colors.backgroundTop);
      root.style.setProperty("--bg-gradient-end", colors.backgroundBottom);
      
      root.style.setProperty("--button-ghost-bg", colors.buttonGhostBg);
      root.style.setProperty("--button-ghost-border", colors.buttonGhostBorder);
      root.style.setProperty("--input-bg", colors.inputBg);
      root.style.setProperty("--input-border", colors.inputBorder);

      // White base
      root.style.setProperty("--white", "#FFFFFF");
      root.style.setProperty("--text-on-dark", colors.ink);
      root.style.setProperty("--text-on-dark-muted", colors.textMuted);

      // Dedicated Hero Section colors to isolate overlay legibility from body theme
      root.style.setProperty("--hero-text", colors.heroText || "#FFFFFF");
      root.style.setProperty("--hero-text-muted", colors.heroTextMuted || "#FFE5EB");
      root.style.setProperty("--hero-accent", colors.heroAccent || colors.accent);
    }

    if (fonts) {
      root.style.setProperty("--heading-font", fonts.heading);
      root.style.setProperty("--body-font", fonts.body);
      root.style.setProperty("--arabic-font", fonts.arabic);
    }
  }

  // ==========================================================================
  // 2. TRANSLATION ENGINE & LOGICAL RTL BINDINGS
  // ==========================================================================
  function renderLanguage(lang) {
    const c = config.content[lang];
    if (!c) return;

    // A. Metadata Page Title
    document.title = `${config.couple.displayNames[lang]} - ${lang === 'ar' ? 'دعوة زفاف رقمية' : 'Digital Wedding Invitation'}`;

    // B. Envelope Section
    const cardMonogram = document.querySelector(".card-monogram");
    if (cardMonogram) cardMonogram.innerText = lang === "ar" ? "ن & ي" : "N & Y";
    
    const envTitle = document.getElementById("envelopeTitle");
    if (envTitle) envTitle.innerText = c.envelopeText;

    const envSub = document.getElementById("envelopeSubtitle");
    if (envSub) envSub.innerText = c.clickToOpen;

    // C. Floating Lang switcher button
    const langBtn = document.getElementById("langSwitchBtn");
    if (langBtn) langBtn.innerText = c.languageName;

    // D. Parallax Hero Section
    const heroEyebrow = document.getElementById("heroEyebrow");
    if (heroEyebrow) heroEyebrow.innerText = c.hero.eyebrow;

    const heroSub = document.getElementById("heroSubtitle");
    if (heroSub) heroSub.innerText = c.hero.subtitle;

    const heroRsvpBtn = document.getElementById("heroRsvpBtn");
    if (heroRsvpBtn) heroRsvpBtn.innerText = c.hero.rsvpButton;

    const heroVenueBtn = document.getElementById("heroVenueBtn");
    if (heroVenueBtn) heroVenueBtn.innerText = c.hero.venueButton;

    // E. Countdown Timer Section
    const countTitle = document.getElementById("countdownTitle");
    if (countTitle) countTitle.innerText = c.countdown.title;

    const lblDays = document.getElementById("lblDays");
    if (lblDays) lblDays.innerText = c.countdown.days;

    const lblHours = document.getElementById("lblHours");
    if (lblHours) lblHours.innerText = c.countdown.hours;

    const lblMinutes = document.getElementById("lblMinutes");
    if (lblMinutes) lblMinutes.innerText = c.countdown.minutes;

    const lblSeconds = document.getElementById("lblSeconds");
    if (lblSeconds) lblSeconds.innerText = c.countdown.seconds;

    // F. Love Story Section
    const storyTitle = document.getElementById("storyTitle");
    if (storyTitle) storyTitle.innerText = c.story.title;

    const storyCopy = document.getElementById("storyCopy");
    if (storyCopy) storyCopy.innerText = c.story.copy;

    // G. Event Details Section (When & Where)
    const detailsTitle = document.getElementById("detailsTitle");
    if (detailsTitle) detailsTitle.innerText = c.details.title;

    const venueTitle = document.getElementById("venueTitle");
    if (venueTitle) venueTitle.innerText = c.details.venueTitle;

    const venueDesc = document.getElementById("venueDesc");
    if (venueDesc) venueDesc.innerText = c.details.venueDesc;

    const dateTimeTitle = document.getElementById("dateTimeTitle");
    if (dateTimeTitle) dateTimeTitle.innerText = c.details.dateTimeTitle;

    const dateTimeDesc = document.getElementById("dateTimeDesc");
    if (dateTimeDesc) dateTimeDesc.innerText = c.details.dateTimeDesc;

    // H. Moments Timeline Section
    const momentsTitle = document.getElementById("momentsTitle");
    if (momentsTitle) momentsTitle.innerText = c.moments.title;

    // I. Gallery Grid Section
    const galleryTitle = document.getElementById("galleryTitle");
    if (galleryTitle) galleryTitle.innerText = c.gallery.title;

    // J. Guest Uploader Section
    const uploadTitle = document.getElementById("uploadTitle");
    if (uploadTitle) uploadTitle.innerText = c.upload.title;

    const uploadDesc = document.getElementById("uploadDesc");
    if (uploadDesc) uploadDesc.innerText = c.upload.desc;

    const fileSelectorLabel = document.getElementById("fileSelectorLabel");
    if (fileSelectorLabel) fileSelectorLabel.innerText = c.upload.button;

    const uploadSubmitBtn = document.getElementById("uploadSubmitBtn");
    if (uploadSubmitBtn) {
      if (selectedFiles.length > 0) {
        uploadSubmitBtn.innerText = c.upload.submit;
      } else {
        uploadSubmitBtn.innerText = c.upload.submit;
      }
    }

    // K. RSVP Form Card Section
    const rsvpTitle = document.getElementById("rsvpTitle");
    if (rsvpTitle) rsvpTitle.innerText = c.rsvp.title;

    const rsvpDesc = document.getElementById("rsvpDesc");
    if (rsvpDesc) rsvpDesc.innerText = c.rsvp.desc;

    const lblRsvpName = document.getElementById("lblRsvpName");
    if (lblRsvpName) lblRsvpName.innerText = c.rsvp.formName;

    const rsvpName = document.getElementById("rsvpName");
    if (rsvpName) rsvpName.placeholder = lang === "ar" ? "أدخل اسمك الكامل" : "Enter your full name";

    const lblRsvpAttendance = document.getElementById("lblRsvpAttendance");
    if (lblRsvpAttendance) lblRsvpAttendance.innerText = c.rsvp.formAttendance;

    const optAttending = document.getElementById("optAttending");
    if (optAttending) optAttending.innerText = c.rsvp.attendingOpt;

    const optDeclining = document.getElementById("optDeclining");
    if (optDeclining) optDeclining.innerText = c.rsvp.decliningOpt;

    const lblRsvpGuests = document.getElementById("lblRsvpGuests");
    if (lblRsvpGuests) lblRsvpGuests.innerText = c.rsvp.formGuests;

    // Update attendance guest dropdown numbers nicely
    const rsvpGuests = document.getElementById("rsvpGuests");
    if (rsvpGuests) {
      rsvpGuests.options[0].text = lang === "ar" ? "١ (حاضر بمفردي)" : "1 (Self)";
      rsvpGuests.options[1].text = lang === "ar" ? "٢ (حاضر مع مرافق)" : "2 (Plus One)";
      rsvpGuests.options[2].text = lang === "ar" ? "٣ مرافقين" : "3";
      rsvpGuests.options[3].text = lang === "ar" ? "٤ مرافقين" : "4";
      rsvpGuests.options[4].text = lang === "ar" ? "٥ مرافقين" : "5";
    }

    const lblRsvpNote = document.getElementById("lblRsvpNote");
    if (lblRsvpNote) lblRsvpNote.innerText = c.rsvp.formNote;

    const rsvpNote = document.getElementById("rsvpNote");
    if (rsvpNote) rsvpNote.placeholder = lang === "ar" ? "اترك تهنئة دافئة للعروسين..." : "Leave a warm wish for Nour & Youssef...";

    const rsvpSubmitBtn = document.getElementById("rsvpSubmitBtn");
    if (rsvpSubmitBtn) rsvpSubmitBtn.innerText = c.rsvp.submitBtn;

    // L. Music Playback Floating Tooltip
    const musicTitle = document.getElementById("musicTitle");
    if (musicTitle) musicTitle.innerText = `${c.music.title} - ${c.music.subtitle}`;
  }

  function swapLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    
    // Toggle layout attributes
    document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang);

    // Apply translations
    renderLanguage(currentLang);
    populateMoments(currentLang);

    // Re-trigger typewriter names if loader has already dissolved
    const loader = document.getElementById("loaderContainer");
    if (loader && loader.style.display === "none") {
      startHeroTypewriter();
    }
  }

  // ==========================================================================
  // 3. HARDWARE-ACCELERATED VECTOR SAKURA ENGINE (CANVAS BASED - NO EMOJIS)
  // ==========================================================================
  let canvas, ctx;
  let petals = [];
  let canvasAnimationId = null;

  function initCanvasSakura() {
    canvas = document.getElementById("sakuraCanvas");
    if (!canvas || !config.theme.sakura.enabled) return;

    ctx = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Scatter initial petals all over the screen height
    petals = [];
    const count = config.theme.sakura.petalCount || 28;
    for (let i = 0; i < count; i++) {
      petals.push(createPetal(true));
    }

    if (canvasAnimationId) cancelAnimationFrame(canvasAnimationId);
    loopCanvas();
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createPetal(scatter = false) {
    const minSize = config.theme.sakura.minSize || 6;
    const maxSize = config.theme.sakura.maxSize || 15;
    const minSpeedY = config.theme.sakura.minSpeedY || 1.0;
    const maxSpeedY = config.theme.sakura.maxSpeedY || 2.5;

    const size = Math.random() * (maxSize - minSize) + minSize;
    
    // Custom cherry blossom pink shades
    const r = 255;
    const g = Math.floor(Math.random() * 30) + 182; // 182 to 212
    const b = Math.floor(Math.random() * 30) + 193; // 193 to 223

    return {
      x: Math.random() * window.innerWidth,
      y: scatter ? Math.random() * window.innerHeight : -size * 2,
      size: size,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      speedX: (Math.random() - 0.2) * 1.6, // Slight right-leaning drift
      speedY: Math.random() * (maxSpeedY - minSpeedY) + minSpeedY,
      opacity: Math.random() * 0.45 + 0.45, // 0.45 to 0.90
      r: r,
      g: g,
      b: b
    };
  }

  function drawVectorPetal(ctx, x, y, size, angle, r, g, b, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    // Gorgeous linear gradient for botanical shading
    const grad = ctx.createLinearGradient(0, -size, 0, size);
    grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
    grad.addColorStop(1, `rgba(${r - 20}, ${g - 28}, ${b - 18}, ${alpha * 0.65})`);

    ctx.fillStyle = grad;
    ctx.beginPath();

    // High-fidelity notched sakura shape using precise Bezier controls
    ctx.moveTo(0, size);
    
    // Left petal profile curve
    ctx.bezierCurveTo(
      -size * 1.25, size * 0.25, 
      -size * 0.85, -size * 0.85, 
      -size * 0.2, -size
    );

    // Heart-shaped top notch
    ctx.lineTo(0, -size * 0.68);
    ctx.lineTo(size * 0.2, -size);

    // Right petal profile curve
    ctx.bezierCurveTo(
      size * 0.85, -size * 0.85, 
      size * 1.25, size * 0.25, 
      0, size
    );

    ctx.closePath();
    ctx.fill();

    // Delicate highlights / vein lines
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(0, -size * 0.15);
    ctx.stroke();

    ctx.restore();
  }

  function loopCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];

      // Translate positions
      p.y += p.speedY;
      p.x += p.speedX;
      p.angle += p.rotationSpeed;

      // Reset offscreen particles
      if (
        p.y > window.innerHeight + p.size * 2 ||
        p.x < -p.size * 2 ||
        p.x > window.innerWidth + p.size * 2
      ) {
        petals[i] = createPetal(false);
      } else {
        drawVectorPetal(ctx, p.x, p.y, p.size, p.angle, p.r, p.g, p.b, p.opacity);
      }
    }

    canvasAnimationId = requestAnimationFrame(loopCanvas);
  }

  // ==========================================================================
  // 4. THE 3D ENVELOPE UNPIN & OPEN REVEAL SEQUENCE
  // ==========================================================================
  function initEnvelopeLoader() {
    const loader = document.getElementById("loaderContainer");
    const appLayout = document.getElementById("appLayout");
    const envelopeWrapper = document.querySelector(".envelope-wrapper");

    if (!loader || !envelopeWrapper) return;

    envelopeWrapper.addEventListener("click", () => {
      if (envelopeWrapper.classList.contains("open")) return;

      // A. Unfold 3D wrapper
      envelopeWrapper.classList.add("open");

      // B. Trigger soft wedding background music on first interaction
      playAudioSoundtrack();

      // C. Fade out envelope wrapper and reveal full invitation layout
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transform = "scale(1.08)";

        // Unhide app layout layout right as loader is scaling down
        appLayout.style.display = "block";
        
        // Initial setup for visible cards
        initScrollReveal();

        setTimeout(() => {
          loader.style.display = "none";
          // Start the typing display reveal
          startHeroTypewriter();
          // Spawn sakura canvas background
          initCanvasSakura();
        }, 1200);
      }, 2100);
    });
  }

  // ==========================================================================
  // 5. CRISP TYPING HERO ANIMATION ENGINE (ROBUST Swaps CANCELLATION)
  // ==========================================================================
  let typewriterTimeout = null;

  function startHeroTypewriter() {
    const text = config.couple.displayNames[currentLang];
    const el = document.getElementById("heroTitle");
    if (!el) return;

    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    
    el.innerHTML = "";
    el.classList.add("typing-cursor");

    let idx = 0;
    const speed = 120; // Deluxe typewriter draw rate

    function type() {
      if (idx < text.length) {
        el.innerHTML += text.charAt(idx);
        idx++;
        typewriterTimeout = setTimeout(type, speed);
      } else {
        el.classList.remove("typing-cursor");
      }
    }
    type();
  }

  // ==========================================================================
  // 6. HIGH-PRECISION COUNTDOWN CLOCK
  // ==========================================================================
  function initCountdownTimer() {
    // Default wedding date target: June 25, 2026, 6:00 PM EST
    const targetTime = new Date("2026-06-25T18:00:00").getTime();

    function updateTimeRemaining() {
      const now = new Date().getTime();
      const difference = targetTime - now;

      const daysVal = document.getElementById("timerDays");
      const hoursVal = document.getElementById("timerHours");
      const minutesVal = document.getElementById("timerMinutes");
      const secondsVal = document.getElementById("timerSeconds");

      if (difference < 0) {
        if (daysVal) daysVal.innerText = "00";
        if (hoursVal) hoursVal.innerText = "00";
        if (minutesVal) minutesVal.innerText = "00";
        if (secondsVal) secondsVal.innerText = "00";
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Padded digits
      if (daysVal) daysVal.innerText = String(days).padStart(2, "0");
      if (hoursVal) hoursVal.innerText = String(hours).padStart(2, "0");
      if (minutesVal) minutesVal.innerText = String(minutes).padStart(2, "0");
      if (secondsVal) secondsVal.innerText = String(seconds).padStart(2, "0");
    }

    updateTimeRemaining();
    setInterval(updateTimeRemaining, 1000);
  }

  // ==========================================================================
  // 7. DYNAMIC TIMELINE & GALLERY LIST POPULATION
  // ==========================================================================
  function populateGallery() {
    const list = document.getElementById("galleryList");
    if (!list || !config.media.gallery) return;

    list.innerHTML = "";
    config.media.gallery.forEach((url) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Wedding Photo Gallery";
      img.loading = "lazy";

      item.appendChild(img);
      list.appendChild(item);
    });
  }

  function populateMoments(lang) {
    const list = document.getElementById("momentsList");
    if (!list || !config.media.moments) return;

    list.innerHTML = "";
    config.media.moments.forEach((m, idx) => {
      const alignment = idx % 2 === 0 ? "left" : "right";
      
      const item = document.createElement("div");
      item.className = `moment-item ${alignment}`;

      const bubble = document.createElement("div");
      bubble.className = "moment-bubble";

      if (m.image) {
        const img = document.createElement("img");
        img.src = m.image;
        img.alt = m.title[lang];
        img.loading = "lazy";
        bubble.appendChild(img);
      }

      const info = document.createElement("div");
      info.className = "moment-info";

      const title = document.createElement("h4");
      title.innerText = m.title[lang];

      const copy = document.createElement("p");
      copy.innerText = m.copy[lang];

      info.appendChild(title);
      info.appendChild(copy);
      bubble.appendChild(info);
      item.appendChild(bubble);

      list.appendChild(item);
    });
  }

  function bindMediaSkeletons() {
    const video = document.getElementById("heroVideo");
    if (video && config.media.heroVideo) {
      const source = video.querySelector("source");
      if (source) {
        source.src = config.media.heroVideo;
        video.load();
      }
    }

    const storyImg = document.getElementById("storyImg");
    if (storyImg && config.media.storyImage) {
      storyImg.src = config.media.storyImage;
    }

    const uploadImg = document.getElementById("uploadImg");
    if (uploadImg && config.media.uploadImage) {
      uploadImg.src = config.media.uploadImage;
    }
  }

  // ==========================================================================
  // 8. INTERSECTION OBSERVER FOR 60FPS SCROLL POP IN
  // ==========================================================================
  function initScrollReveal() {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px" // Trigger slightly early
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ==========================================================================
  // 9. PREMIUM PARALLAX SCROLL-ZOOM ENGINE FOR THE HERO CARD
  // ==========================================================================
  function initParallaxHero() {
    const hero = document.getElementById("heroSec");
    if (!hero) return;

    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      const height = hero.offsetHeight;

      if (offset <= height) {
        const percent = offset / height;
        
        // Custom scale and opacity variables
        const scale = Math.max(0.88, 1 - percent * 0.12);
        const opacity = Math.max(0, 1 - percent * 1.5);
        
        const content = hero.querySelector(".hero-content");
        const media = hero.querySelector(".hero-media-wrapper");

        if (content) {
          content.style.opacity = opacity;
          content.style.transform = `translateY(${offset * 0.22}px) scale(${scale})`;
        }

        if (media) {
          media.style.transform = `translateY(${offset * 0.48}px) scale(${1 + percent * 0.06})`;
        }
      }
    });
  }

  // ==========================================================================
  // 10. BACKGROUND SOUNDTRACK AUDIO CONSOLE
  // ==========================================================================
  const audio = document.getElementById("bgAudio");
  const vinylWrapper = document.getElementById("vinylWrapper");

  function initAudioPlayer() {
    if (!audio || !config.media.musicSrc) return;

    audio.src = config.media.musicSrc;
    audio.volume = 0.4; // Soothing background volume level

    audio.addEventListener("play", () => {
      vinylWrapper.classList.add("playing");
    });

    audio.addEventListener("pause", () => {
      vinylWrapper.classList.remove("playing");
    });

    vinylWrapper.addEventListener("click", () => {
      if (audio.paused) {
        playAudioSoundtrack();
      } else {
        pauseAudioSoundtrack();
      }
    });
  }

  function playAudioSoundtrack() {
    if (!audio.src) return;
    audio.play().catch((err) => {
      console.log("Autoplay was blocked initially by client browser configurations.", err);
    });
  }

  function pauseAudioSoundtrack() {
    audio.pause();
  }

  // ==========================================================================
  // 11. DUAL GOOGLE APP SCRIPTS FORM PIPELINES
  // ==========================================================================
  
  // A. RSVP Pipeline (AJAX JSON POST)
  function initRsvpForm() {
    const form = document.getElementById("rsvpForm");
    const submitBtn = document.getElementById("rsvpSubmitBtn");
    const toast = document.getElementById("rsvpToast");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("rsvpName");
      const attendanceRadio = document.querySelector('input[name="rsvpAttendance"]:checked');
      const guestsSelect = document.getElementById("rsvpGuests");
      const noteTextarea = document.getElementById("rsvpNote");

      if (!nameInput || !attendanceRadio) return;

      const langObj = config.content[currentLang].rsvp;
      
      // Toggle button visual state
      submitBtn.disabled = true;
      submitBtn.innerText = langObj.submittingBtn;

      // Clear alerts
      toast.style.display = "none";
      toast.className = "toast-alert";

      const attendanceValue = attendanceRadio.value;
      const guestsValue = attendanceValue === "attending" ? guestsSelect.value : 0;

      const rsvpPayload = {
        name: nameInput.value,
        attendance: attendanceValue,
        guests: Number(guestsValue),
        note: noteTextarea ? noteTextarea.value : "",
        timestamp: new Date().toISOString()
      };

      try {
        // App Script POST calls require CORS-friendly payloads
        await fetch(config.endpoints.rsvp, {
          method: "POST",
          mode: "no-cors", // Crucial bypass for Apps Script CORS redirection errors
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(rsvpPayload)
        });

        // Resolve status successfully
        toast.innerText = langObj.successMsg;
        toast.className = "toast-alert success";
        toast.style.display = "block";
        form.reset();

      } catch (err) {
        console.error("Apps Script RSVP Post Error:", err);
        toast.innerText = langObj.errorMsg;
        toast.className = "toast-alert error";
        toast.style.display = "block";
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = langObj.submitBtn;
      }
    });
  }

  // B. Media Guest Uploader Pipeline (POST Base64 Multiple Files)
  function initMediaUploader() {
    const dropzone = document.getElementById("dropzone");
    const fileSelector = document.getElementById("fileSelector");
    const fileSelectorLabel = document.getElementById("fileSelectorLabel");
    const filesContainer = document.getElementById("selectedFilesContainer");
    const uploadForm = document.getElementById("photoUploadForm");
    const uploadBtn = document.getElementById("uploadSubmitBtn");
    const toast = document.getElementById("uploadToast");

    if (!uploadForm || !dropzone) return;

    // Trigger click on file input when dropzone is tapped
    dropzone.addEventListener("click", () => {
      fileSelector.click();
    });

    // File drag & drop stylings
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = config.theme.colors.accent;
      dropzone.style.background = "rgba(214, 180, 122, 0.08)";
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.style.borderColor = "";
      dropzone.style.background = "";
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "";
      dropzone.style.background = "";
      if (e.dataTransfer.files) {
        processFiles(e.dataTransfer.files);
      }
    });

    fileSelector.addEventListener("change", (e) => {
      processFiles(e.target.files);
    });

    function processFiles(files) {
      selectedFiles = Array.from(files);
      if (selectedFiles.length === 0) {
        filesContainer.style.display = "none";
        uploadBtn.disabled = true;
        return;
      }

      filesContainer.innerHTML = "";
      selectedFiles.forEach((file) => {
        const item = document.createElement("div");
        const size = (file.size / 1024).toFixed(1);
        item.innerText = `📎 ${file.name} (${size} KB)`;
        filesContainer.appendChild(item);
      });

      filesContainer.style.display = "block";
      uploadBtn.disabled = false;
    }

    function readAsBase64Promise(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const rawBase64 = reader.result.split(",")[1];
          resolve(rawBase64);
        };
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
      });
    }

    uploadForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (selectedFiles.length === 0) return;

      const langObj = config.content[currentLang].upload;
      uploadBtn.disabled = true;
      uploadBtn.innerText = langObj.uploading;

      toast.style.display = "none";
      toast.className = "toast-alert";

      let uploadSuccessCount = 0;

      for (const file of selectedFiles) {
        try {
          const base64Content = await readAsBase64Promise(file);
          const filePayload = {
            filename: file.name,
            mimeType: file.type,
            base64Data: base64Content,
            timestamp: new Date().toISOString()
          };

          // Post base64 payload to the separate media uploader endpoint
          await fetch(config.endpoints.upload, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(filePayload)
          });

          uploadSuccessCount++;
        } catch (error) {
          console.error(`Error uploading file ${file.name} to Google Drive:`, error);
        }
      }

      if (uploadSuccessCount > 0) {
        toast.innerText = langObj.success;
        toast.className = "toast-alert success";
        toast.style.display = "block";
        uploadForm.reset();
        selectedFiles = [];
        filesContainer.style.display = "none";
      } else {
        toast.innerText = currentLang === "ar" ? "عذراً، فشل رفع الملفات. يرجى المحاولة لاحقاً." : "Sorry, upload failed. Please try again later.";
        toast.className = "toast-alert error";
        toast.style.display = "block";
      }

      uploadBtn.innerText = langObj.submit;
      uploadBtn.disabled = true;
    });
  }

  // ==========================================================================
  // 12. DYNAMIC COMPONENT VISIBILITY FILTER
  // ==========================================================================
  function applyVisibilityToggles() {
    const vis = config.visibility;
    if (!vis) return;

    const toggle = (id, show) => {
      const el = document.getElementById(id);
      if (el) el.style.display = show ? "" : "none";
    };

    // Hero toggles
    if (vis.hero) {
      toggle("heroSec", vis.hero.section);
      toggle("heroVideo", vis.hero.video);
      toggle("heroEyebrow", vis.hero.eyebrow);
      toggle("heroTitle", vis.hero.title || vis.couple.brideName);
      toggle("heroSubtitle", vis.hero.subtitle);
      toggle("heroRsvpBtn", vis.hero.primaryButton);
      toggle("heroVenueBtn", vis.hero.locationButton);
    }

    // Countdown toggles
    if (vis.countdown) {
      toggle("countdownSec", vis.countdown.section);
      toggle("countdownTitle", vis.countdown.title);

      const daysCard = document.getElementById("timerDays")?.closest(".countdown-card");
      const hoursCard = document.getElementById("timerHours")?.closest(".countdown-card");
      const minsCard = document.getElementById("timerMinutes")?.closest(".countdown-card");
      const secsCard = document.getElementById("timerSeconds")?.closest(".countdown-card");

      if (daysCard) daysCard.style.display = vis.countdown.days ? "" : "none";
      if (hoursCard) hoursCard.style.display = vis.countdown.hours ? "" : "none";
      if (minsCard) minsCard.style.display = vis.countdown.minutes ? "" : "none";
      if (secsCard) secsCard.style.display = vis.countdown.seconds ? "" : "none";
    }

    // Story toggles
    if (vis.story) {
      toggle("storySec", vis.story.section);
      toggle("storyTitle", vis.story.title);
      toggle("storyCopy", vis.story.copy);
      const imgFrame = document.getElementById("storyImg")?.closest(".story-img-frame");
      if (imgFrame) imgFrame.style.display = vis.story.image ? "" : "none";
    }

    // When & Where toggles
    if (vis.details) {
      toggle("detailsSec", vis.details.section);
      toggle("detailsTitle", vis.details.title);

      const venueCard = document.getElementById("venueTitle")?.closest(".details-card");
      const dateTimeCard = document.getElementById("dateTimeTitle")?.closest(".details-card");

      if (venueCard) venueCard.style.display = vis.details.venueCard ? "" : "none";
      if (dateTimeCard) dateTimeCard.style.display = vis.details.dateTimeCard ? "" : "none";
    }

    // Timeline & Gallery toggles
    if (vis.moments) {
      toggle("momentsSec", vis.moments.section);
      toggle("momentsTitle", vis.moments.title);
    }
    if (vis.gallery) {
      toggle("gallerySec", vis.gallery.section);
      toggle("galleryTitle", vis.gallery.title);
    }

    // RSVP Section toggles
    if (vis.rsvp) {
      toggle("rsvp", vis.rsvp.section);
      toggle("rsvpTitle", vis.rsvp.title);
      toggle("noteGroup", vis.rsvp.noteField);
    }

    // Upload & Audio toggles
    if (vis.upload) {
      toggle("uploadSec", vis.upload.section);
      toggle("uploadTitle", vis.upload.title);
      const uploadFrame = document.getElementById("uploadImg")?.closest(".upload-img-frame");
      if (uploadFrame) uploadFrame.style.display = vis.upload.image ? "" : "none";
    }
    if (vis.music) {
      toggle("musicContainer", vis.music.section);
      toggle("vinylWrapper",  vis.music.vinyl);
    }
  }

  // ==========================================================================
  // 13. MASTER ENGINES INITIALIZATION
  // ==========================================================================
  function init() {
    initTheme();
    bindMediaSkeletons();
    
    // Set default languages
    document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang);

    renderLanguage(currentLang);
    populateMoments(currentLang);
    populateGallery();

    applyVisibilityToggles();
    initEnvelopeLoader();
    initCountdownTimer();
    initAudioPlayer();
    
    initRsvpForm();
    initMediaUploader();
    initParallaxHero();

    // Bind language swap button
    const langBtn = document.getElementById("langSwitchBtn");
    if (langBtn) {
      langBtn.addEventListener("click", swapLanguage);
    }
  }

  init();
});
