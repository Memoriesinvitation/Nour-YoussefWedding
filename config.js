window.invitationConfig = {
  defaultLanguage: "en",
  
  couple: {
    brideName: "Nour",
    groomName: "Youssef",
    displayNames: {
      en: "Nour & Youssef",
      ar: "نور ويوسف"
    }
  },

  // Google Apps Script Endpoints (two separate endpoints for RSVP and Uploader)
  endpoints: {
    rsvp: "https://script.google.com/macros/s/AKfycbz_rsvp_placeholder_id/exec",
    upload: "https://script.google.com/macros/s/AKfycbz_upload_placeholder_id/exec"
  },

  theme: {
    // Custom HSL and hex system driving beautiful glassmorphism and glows
    colors: {
      primary: "#E25C80",          // Vibrant cherry-blossom pink
      secondary: "#FFAEC1",        // Delicate pastel pink
      accent: "#C5A059",           // Muted gold foil
      canvas: "#FFF6F7",           // Luminous ivory-blush white
      ink: "#4A2731",              // Elegant dark plum/chocolate text for rich legibility
      textMuted: "#8A6670",        // Soft romantic mauve-slate
      surface: "rgba(255, 248, 249, 0.82)", // Glazed pink-tinted glass
      surfaceStrong: "#FFEBF0",    // Contrast card surface
      line: "rgba(197, 160, 89, 0.22)", // Muted gold border lines
      glow: "#FFC6D3",             // Dreamy ambient blush glow
      glowSoft: "#FFEBF0",
      backgroundTop: "#FFFDFE",    // Alabaster white top background
      backgroundBottom: "#FFE8EC", // Radiant cherry-blossom pink gradient base
      overlay: "rgba(28, 12, 16, 0.42)", // Cinematic contrast overlay for overlay typewriter readability
      buttonGhostBg: "rgba(255, 255, 255, 0.15)", // Premium translucent glass button
      buttonGhostBorder: "rgba(255, 255, 255, 0.25)",
      inputBg: "rgba(255, 255, 255, 0.70)", // Clean pearlescent input backgrounds
      inputBorder: "rgba(197, 160, 89, 0.25)",
      heroText: "#FFFFFF",              // Bright pearlescent white for cinematic overlay legibility
      heroTextMuted: "#FFE5EB",         // Soft rose-tinted off-white
      heroAccent: "#E8C580"             // Glowing warm champagne gold
    },
    fonts: {
      heading: '"Cormorant Garamond", serif',
      body: '"Manrope", sans-serif',
      arabic: '"Tajawal", sans-serif'
    },
    sakura: {
      enabled: true,
      petalCount: 28,             // Performance-optimized Sakura count
      minSize: 6,
      maxSize: 15,
      minSpeedY: 1.0,
      maxSpeedY: 2.5
    }
  },

  visibility: {
    hero: {
      section: true,
      video: true,
      eyebrow: true,
      title: true,
      names: true,
      subtitle: true,
      primaryButton: true,
      locationButton: true
    },
    countdown: {
      section: true,
      title: true,
      days: true,
      hours: true,
      minutes: true,
      seconds: true
    },
    story: {
      section: true,
      title: true,
      copy: true,
      image: true
    },
    details: {
      section: true,
      title: true,
      venueCard: true,
      dateTimeCard: true
    },
    moments: {
      section: true,
      title: true
    },
    gallery: {
      section: true,
      title: true
    },
    rsvp: {
      section: true,
      title: true,
      noteField: true
    },
    upload: {
      section: true,
      title: true,
      image: true
    },
    music: {
      section: true,
      vinyl: true,
      playButton: true
    }
  },

  media: {
    heroVideo: "A_serene_Moroccan_style_garden (1).mp4", // Localized serene Moroccan garden video
    storyImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    uploadImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
    ],
    moments: [
      {
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
        title: { en: "The First Look", ar: "اللقاء الأول" },
        copy: { en: "A quiet moment before the celebration began.", ar: "لحظة هادئة ودافئة قبل بدء الحفل السعيد." }
      },
      {
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
        title: { en: "Golden Hour Walk", ar: "جولة الغروب" },
        copy: { en: "Chasing the warm evening light.", ar: "تحت خيوط الشمس الذهبية ونسمات المساء." }
      }
    ],
    musicSrc: "Mahmoud El Esseily - Farha  2017  محمود العسيلي - فرحة.mp3" // Background wedding song URL
  },

  content: {
    en: {
      languageName: "العربية",
      envelopeText: "Open Invitation",
      clickToOpen: "Click to unfold your invite",
      hero: {
        eyebrow: "WE ARE INVITING YOU",
        subtitle: "To celebrate our beautiful beginning",
        intro: "Join us in writing the first chapter of our forever.",
        venueButton: "Location Map",
        rsvpButton: "Confirm RSVP"
      },
      countdown: {
        title: "Counting Down the Days",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
      },
      story: {
        title: "Our Love Story",
        copy: "Two lives, two hearts, joined in friendship, united in love. We found in each other a home, a laughter that never ends, and a support that never fades. We are thrilled to invite you to stand beside us as we exchange our vows and step into a lifetime of adventure together."
      },
      details: {
        title: "When & Where",
        venueTitle: "Ceremony & Reception",
        venueDesc: "The Royal Gardens, Pavilion Hall, 452 Royal Blvd, NY",
        dateTimeTitle: "Date & Time",
        dateTimeDesc: "Thursday, June 25, 2026 at 6:00 PM"
      },
      moments: {
        title: "Our Happy Moments"
      },
      gallery: {
        title: "Photo Gallery"
      },
      rsvp: {
        title: "Kindly Reply",
        desc: "We look forward to celebrating with you! Please submit your RSVP by June 1, 2026.",
        formName: "Full Name",
        formAttendance: "Will you attend?",
        formGuests: "Number of Guests",
        formNote: "Special Wishes or Notes",
        attendingOpt: "Attending Joyfully",
        decliningOpt: "Declining Regretfully",
        submitBtn: "Submit RSVP",
        submittingBtn: "Submitting...",
        successMsg: "Thank you for your RSVP! We can't wait to see you.",
        errorMsg: "There was an error. Please try again or contact the couple."
      },
      upload: {
        title: "Share the Memories",
        desc: "Help us capture every angle of our day! Upload any photos or videos you take directly to our wedding album.",
        button: "Choose Photos/Videos",
        submit: "Upload Memories",
        uploading: "Uploading...",
        success: "Thank you for sharing your memories with us!"
      },
      music: {
        title: "Ceremony Playlist",
        subtitle: "Play Ambient Music"
      }
    },
    ar: {
      languageName: "English",
      envelopeText: "دعوة زفاف",
      clickToOpen: "اضغط لفتح بطاقة الدعوة",
      hero: {
        eyebrow: "يسعدنا دعوتكم لمشاركتنا فرحتنا",
        subtitle: "للاحتفال ببدايتنا الجميلة معاً",
        intro: "شاركونا كتابة الفصل الأول من حكايتنا الأبدية.",
        venueButton: "موقع الحفل",
        rsvpButton: "تأكيد الحضور"
      },
      countdown: {
        title: "الوقت المتبقي على ليلة العمر",
        days: "يوم",
        hours: "ساعة",
        minutes: "دقيقة",
        seconds: "ثانية"
      },
      story: {
        title: "قصتنا",
        copy: "حياتان، وقلبان، اجتمعا في صداقة دافئة، وتوحّدا في حب صادق. وجدنا في بعضنا وطناً دافئاً، وضحكات لا تنتهي، وسنداً لا يزول. يسعدنا جداً أن تكونوا معنا لنشهد معاً لحظة ميثاقنا الغليظ ونبدأ رحلة العمر الواعدة بكل حب وشغف."
      },
      details: {
        title: "تفاصيل الحفل والموعد",
        venueTitle: "موقع القاعة",
        venueDesc: "الحدائق الملكية، قاعة البافيليون، 452 الشارع الملكي، نيويورك",
        dateTimeTitle: "التاريخ والوقت",
        dateTimeDesc: "الخميس، 25 يونيو 2026 في تمام الساعة 6:00 مساءً"
      },
      moments: {
        title: "لحظاتنا السعيدة"
      },
      gallery: {
        title: "معرض الصور"
      },
      rsvp: {
        title: "تأكيد الحضور",
        desc: "نتطلع بشوق للاحتفال معكم! يرجى تأكيد الحضور قبل 1 يونيو 2026.",
        formName: "الاسم الكامل",
        formAttendance: "هل ستشرفنا بالحضور؟",
        formGuests: "عدد المرافقين",
        formNote: "تهنئة خاصة أو ملاحظة",
        attendingOpt: "حاضر بكل حب وسرور",
        decliningOpt: "معتذر ببالغ الأسف",
        submitBtn: "إرسال تأكيد الحضور",
        submittingBtn: "جاري الإرسال...",
        successMsg: "شكراً لتأكيد حضوركم! نسعد بلقائكم قريباً.",
        errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة."
      },
      upload: {
        title: "شاركنا ذكرياتك",
        desc: "ساعدنا في تخليد كل لقطة من يومنا المميز! يمكنك رفع الصور ومقاطع الفيديو التي تلتقطها مباشرة في ألبوم زفافنا.",
        button: "اختر الصور / الفيديو",
        submit: "رفع الذكريات",
        uploading: "جاري الرفع الآن...",
        success: "شكراً جزيلاً لمشاركتنا ذكرياتكم الجميلة!"
      },
      music: {
        title: "قائمة تشغيل الموسيقى",
        subtitle: "تشغيل الموسيقى الخلفية"
      }
    }
  }
};
