import { GalleryThumbnails } from "lucide-react";
import { DiIllustrator } from "react-icons/di";

export const portfolioData = {
  personalInfo: {
    name: "ARAVIND RAMESH",
    greeting: "Hello, I'm",
    title: "UI / UX Designer • Graphic Designer",
    titles: ["UI / UX Designer", "Graphic Designer"],
    tagline: "I design beautiful digital experiences, modern interfaces, 3D graphics, and branding.",
    avatar: "/assets/aravind.png",
    email: "aravindmr1347@gmail.com",
    phone: "+91 77366 94253",
    location: "Bengaluru, India",
  },
  stats: [
    { value: 3, label: "Years Experience", suffix: "+" },
    { value: 40, label: "Projects Completed", suffix: "+" }
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aravind-ramesh-8904b0256/" },
    { name: "GitHub", url: "https://github.com/aravindremesh39-ctrl" },
    { name: "Instagram", url: "https://www.instagram.com/_c.osmo?igsh=eXkwbXVwdmU1OWxx" },
    { name: "Behance", url: "https://www.behance.net/aravindmr" },
    { name: "Dribbble", url: "https://dribbble.com" }
  ],
  about: {
    bio: [
      "I am a passionate UI/UX Designer, Graphic Designer, and 3D Artist based in Bengaluru, India. I specialize in crafting visual identities, intuitive user interface experiences, 3D models, and motion artwork.",
      "With a strong background in 3D animation, graphic design, and modern UI/UX principles, I bridge the gap between creative visual artistry and strategic user design."
    ]
  },
  skills: [
     {
      category: "Ai",
      items: [
        { name: "Chat GPT", percentage: 96, icon: "Layout" },
        { name: "Gemini", percentage: 92, icon: "Palette" }
      
      ]
    },
    {
      category: "Design",
      items: [
        { name: "UI Design", percentage: 96, icon: "Layout" },
        { name: "Artist", percentage: 92, icon: "Palette" }
      ]
    },
  
    {
      category: "Adobe Creative Cloud",
      items: [
        { name: "Adobe Photoshop", percentage: 95, icon: "Image" },
        { name: "Adobe XD", percentage: 90, icon: "Figma" },
        { name: "Adobe Illustrator", percentage: 94, icon: "PenTool" },
        { name: "Adobe After Effects", percentage: 80, icon: "Film" },
        { name: "Adobe Premiere Pro", percentage: 80, icon: "Video" },
        { name: "Adobe Lightroom", percentage: 88, icon: "Sliders" }
      ]
    },
    {
      category: "Design Tools",
      items: [
        { name: "Figma", percentage: 50, icon: "Figma" },
        { name: "Canva", percentage: 50, icon: "Sparkles" }
      ]
    },
    {
      category: "3D Design",
      items: [
        { name: "Blender", percentage: 50, icon: "Box" },
        { name: "Autodesk Maya (3D Maya)", percentage: 50, icon: "Cpu" }
      ]
    }
  ],
  experiences: [
    {
      id: 1,
      period: "2023 – Present",
      role: "UI/UX & Graphic Designer",
      title: "Creative Designer",
      company: "KYURIUS TECH STUDIOS",
      location: "Bengaluru",
      description: "Creative visual design, UI/UX interface architecture, branding systems, 3D assets and marketing graphics for digital product ecosystems.",
      tags: ["UI/UX", "Graphic Design", "3D Design", "Branding"]
    }
  ],
  education: [
    {
      id: 1,
      period: "2020 – 2023",
      degree: "Higher Diploma in 3D Animation & Graphic Design",
      institution: "Image Creative Education",
      location: "Kerala",
      description: "Specialized training in 3D modeling, character animation, vector illustration, graphic typography, and digital visual communications.",
      tags: ["3D Animation", "Graphic Design", "Maya", "Photoshop", "Illustrator"]
    }
  ],
  projects: [
    {
      id: 1,
      slug: "neon-horizon-cyberpunk-poster",
      title: "Mothers Day POster Design",
      category: "Graphic Design",
      year: "2026",
      client: "CyberPulse Media & Entertainment",
      duration: "2 Weeks",
      role: "Lead Graphic Artist & Illustrator",
      industry: "Entertainment & Gaming",
      tech: ["Adobe Photoshop", "Adobe Illustrator", "Lightroom"],
      coverImage: ["/assets/mother_s_day.jpg"],
      description: "High-contrast editorial graphic poster design featuring custom typography and dark glowing neon aesthetics.",
      overview: "This Mother's Day poster features a silhouette of a mother holding her child, symbolizing love and care. A soft pink color palette, floral elements, hearts, and elegant typography create a warm and celebratory design, with the message Happy Mother's Day as the focal point.",
    
      challenge: "Balancing intense neon lighting contrast against deep black tones without sacrificing legibility of event information and fine character detail.",
      solution: "Engineered a dual-layer color grading process in Adobe Photoshop combined with custom vector typography created in Adobe Illustrator to maintain crisp clarity at any scale.",
      outcome: "Delivered print-ready 300DPI artwork along with digital social media kits that increased event registration engagement by over 45%.",
      designProcess: [
        { step: "01", name: "Research & Moodboarding", desc: "Analyzing futuristic cyber aesthetics, color contrasts, and neon lighting references." },
        { step: "02", name: "Concept Sketching", desc: "Drafting composition thumbnails and focal point layout grids." },
        { step: "03", name: "Digital Rendering & Vector Work", desc: "Crafting vector typography in Illustrator and building composition layers in Photoshop." },
        { step: "04", name: "Color Grading & Lighting", desc: "Applying atmospheric lighting filters and camera raw contrast tuning." },
        { step: "05", name: "Final Delivery & Export", desc: "Exporting print CMYK and digital RGB asset variations." }
      ],
      results: [
        { value: "+45%", label: "Engagement Increase" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "Print & Digital", label: "Multi-Channel Delivery" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://www.behance.net/gallery/198382103/Mothers-Day"
    },
    {
      id: 2,
      slug: "Coffee Poster",
      title: "Coffee Poster",
      category: "Graphic Design",
      year: "2025",
      client: "Coffee Poster",
    
      role: "Brand Identity Designer",
      industry: "Social Media Poster Design",
      tech: ["Adobe Illustrator", "Adobe Photoshop"],
      coverImage: ["/assets/coffeeposter.jpg"],
      description: "A premium cold coffee promotional poster featuring rich chocolate tones, floating coffee beans, and bold typography to create a refreshing and eye-catching café advertisement.",
      overview: "Komorebi is a comprehensive brand identity system created for a high-end architectural firm. The identity captures organic minimalism, structural precision, and subtle luxury.",
      designProcess: [
        { step: "01", name: "Brand Discovery", desc: "Uncovering core brand values, target audience, and market positioning." },
        { step: "02", name: "Logo Exploration", desc: "Sketching over 50 logo concepts and geometric grid structures." },
        { step: "03", name: "Visual System Build", desc: "Defining color palettes, typography pairs, and mockup templates." },
        { step: "04", name: "Brand Guidelines Document", desc: "Creating a comprehensive 40-page brand manual in Illustrator." },
        { step: "05", name: "Final Handover", desc: "Delivering SVG, EPS, PDF, and PNG asset suites." }
      ],
      results: [
        { value: "+60%", label: "Brand Perception Uplift" },
        { value: "40-Page", label: "Complete Brand Manual" },
        { value: "5.0 Stars", label: "Client Feedback" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
    {
      id: 3,
      slug: "Cosmic Perfume – It's Perfect!",
      title: "Cosmic Perfume – It's Perfect!",
      category: "Graphic Design",
      year: "2024",
      client: "Cosmic Perfume – It's Perfect!",
      duration: "6 Weeks",
      
      industry: "Luxury Perfume",
      tech: ["Adobe Photoshop"],
      coverImage: ["/assets/banner.jpg"],
      description: "A soft and elegant perfume promotional poster featuring a pastel pink theme, floral elements, and stylish typography to showcase a luxurious fragrance.",
      overview: "This perfume advertisement is designed with a delicate pink color palette and lotus flowers to convey elegance, freshness, and femininity. The perfume bottle is the central focus, while the soft background and modern typography create a premium and sophisticated brand identity.",
      objective: "Redesign the mobile and web shopping experience to increase checkout conversion rates and elevate brand prestige.",
      challenge: "Maintaining high readability and fast navigation while incorporating rich dark mode visual aesthetics and glassmorphic overlays.",
      solution: "Architected a modular component library in Figma with strict WCAG contrast compliance, micro-animations, and seamless 3-step checkout flows.",
      outcome: "Achieved a 35% increase in mobile checkout completion rates and won praise for editorial luxury visual design.",
      designProcess: [
        { step: "01", name: "User Research & Personas", desc: "Conducting user interviews and analyzing e-commerce drop-off metrics." },
        { step: "02", name: "Information Architecture", desc: "Mapping user flows, site navigation trees, and checkout funnels." },
        { step: "03", name: "Wireframing & Prototyping", desc: "Creating low-fidelity layout wireframes and interactive Figma prototypes." },
        { step: "04", name: "UI Design & Glass System", desc: "Crafting dark luxury components with glassmorphic depth effects." },
        { step: "05", name: "Usability Testing", desc: "Testing prototypes with users to optimize interaction flows." }
      ],
      results: [
        { value: "+35%", label: "Checkout Conversion Rate" },
        { value: "-40%", label: "Cart Abandonment" },
        { value: "Mobile First", label: "Responsive Design System" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
    {
      id: 4,
      slug: "Kepler-452 B | Space Story",
      title: "Kepler-452 B | Space Story",
      category: "2D",
      year: "2021",
      
      type:"video",
      duration: "3 Weeks",
      role: "2D Animation",
      industry: "Animation",
      tech: ["Adobe Illustrator", "Adobe AfterEffect"],
      coverImage: ["/assets/aravind_project_2.mp4"],
      description: "A space story about Kepler-452 B",
      overview: "A series of custom 2D vector character illustrations and custom glyph symbol sets created for digital media applications and branding assets.",
      designProcess: [
        { step: "01", name: "Concept Sketching", desc: "Hand-drawing character silhouettes and glyph variations." },
        { step: "02", name: "Vector Vectorization", desc: "Tracing and sculpting precise vector bezier curves in Illustrator." },
        { step: "03", name: "Color Palette Application", desc: "Applying vibrant gradient maps and shadow tones." },
        { step: "04", name: "Asset Packaging", desc: "Exporting clean SVG, EPS, and high-res PNG formats." }
      ],
      results: [
        { value: "50+", label: "Custom Vector Assets" },
        { value: "100%", label: "Infinite Scalability (SVG)" },
        { value: "Delivered", label: "On Schedule" }
      ],
      gallery: [
        "/assets/coverImage.jp"
      ],
      liveUrl: "https://behance.net"
    },
    {
      id: 5,
      slug: "Endless Music World Website",
      title: "Endless Music World Website | UIUX",
      category: "UI/UX",
      year: "2021",
      
      
      role: "UI/UX Design",
      industry: "Endless Music World Website",
      tech: ["Adobe XD", "Adobe Photoshop", "Adobe illustrator"],
      coverImage: ["/assets/endless.jpg", "/assets/Endles music W.jpg"],
      behance_url:"https://www.behance.net/gallery/116556459/Endless-music-world-website",
      description: "Low-poly and high-poly 3D hard surface modeling, volumetric lighting, and realistic texture rendering.",
      overview: "Sci-Fi Mech Environment is a detailed 3D scene built in Blender and Maya. The project showcases complex hard-surface modeling, node-based procedural shaders, and cinematic volumetric lighting.",
      designProcess: [
        { step: "01", name: "Blockout", desc: "Establishing scale, camera angles, and primitive geometry blockouts." },
        { step: "02", name: "High-Poly Modeling", desc: "Sculpting mechanical details and hard surface panels in Maya & Blender." },
        { step: "03", name: "UV Unwrapping & Texturing", desc: "Packing UV shells and creating PBR rust/metal shader materials." },
        { step: "04", name: "Lighting & Compositing", desc: "Setting up volumetric mist, point lights, and camera depth of field." },
        { step: "05", name: "4K Render Export", desc: "Rendering final passes and post-processing in Photoshop." }
      ],
      results: [
        { value: "4K Resolution", label: "Cinematic Renders" },
        { value: "PBR Shaders", label: "Realistic Textures" },
        { value: "3D Showcase", label: "Featured Work" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
      ],
      
    },
    {
      id: 6,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Fantacy-Ecommerce Shopping App UI Design",
      category: "UI/UX",
      year: "2021",
      duration: "2 Weeks",
      role: "UI/UX Designer",
      tech: ["Adobe XD", "Adobe Photoshop", "Adobe illustrator"],
      coverImage: ["/assets/UI mockup.jpg"],
      description: "Fantacy-Ecommerce Shopping App UI Design",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
 {
      id: 7,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Dynamic Logo Intro & Motion Reel",
      category: "Animation",
      year: "2026",
      client: "Kyurius Tech Studios",
      duration: "2 Weeks",
      role: "Motion Designer",
      industry: "Video & Motion Graphics",
      tech: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      description: "Smooth 60fps kinetic typography, logo animation intros, and promo video edits.",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
     {
      id: 8,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Dynamic Logo Intro & Motion Reel",
      category: "Animation",
      year: "2026",
      client: "Kyurius Tech Studios",
      duration: "2 Weeks",
      role: "Motion Designer",
      industry: "Video & Motion Graphics",
      tech: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      description: "Smooth 60fps kinetic typography, logo animation intros, and promo video edits.",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
     {
      id: 9,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Dynamic Logo Intro & Motion Reel",
      category: "Animation",
      year: "2026",
      client: "Kyurius Tech Studios",
      duration: "2 Weeks",
      role: "Motion Designer",
      industry: "Video & Motion Graphics",
      tech: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      description: "Smooth 60fps kinetic typography, logo animation intros, and promo video edits.",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
     {
      id: 10,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Dynamic Logo Intro & Motion Reel",
      category: "Animation",
      year: "2026",
      client: "Kyurius Tech Studios",
      duration: "2 Weeks",
      role: "Motion Designer",
      industry: "Video & Motion Graphics",
      tech: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      description: "Smooth 60fps kinetic typography, logo animation intros, and promo video edits.",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
     {
      id: 11,
      slug: "dynamic-logo-intro-motion-reel",
      title: "Dynamic Logo Intro & Motion Reel",
      category: "Animation",
      year: "2026",
      client: "Kyurius Tech Studios",
      duration: "2 Weeks",
      role: "Motion Designer",
      industry: "Video & Motion Graphics",
      tech: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      description: "Smooth 60fps kinetic typography, logo animation intros, and promo video edits.",
      overview: "A dynamic 60fps motion graphics reel featuring 2D/3D logo animation reveals, liquid morphing transitions, and kinetic typography for digital marketing campaigns.",
      objective: "Create an energetic 30-second motion intro video to serve as a brand sting across digital media platforms.",
      challenge: "Syncing intricate visual keyframe effects precisely to custom sound design cues for maximum impact.",
      solution: "Built custom shape layer animations and graph editor velocity curves in After Effects synchronized with multi-track audio in Premiere Pro.",
      outcome: "Delivered Lottie JSON micro-animations for web app integration and 4K MP4 video stings for social broadcasting.",
      designProcess: [
        { step: "01", name: "Storyboarding", desc: "Mapping visual keyframes and audio timing cues." },
        { step: "02", name: "Asset Separation", desc: "Preparing layered vector files in Photoshop & Illustrator." },
        { step: "03", name: "Keyframe Animation", desc: "Animating curves, speed graphs, and particle effects in After Effects." },
        { step: "04", name: "Sound Design & Editing", desc: "Mixing audio sound effects and musical hits in Premiere Pro." },
        { step: "05", name: "Multi-Format Export", desc: "Exporting MP4, WebM, and Lottie JSON files." }
      ],
      results: [
        { value: "60 FPS", label: "Ultra Smooth Motion" },
        { value: "Lottie JSON", label: "Web Animation Export" },
        { value: "Multi-Platform", label: "Social & App Ready" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      ],
      liveUrl: "https://behance.net"
    },
  ]
};
