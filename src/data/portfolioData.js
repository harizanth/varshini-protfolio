export const personalInfo = {
  name: "S. Varshini",
  course: "Computer Science and Design",
  degree: "B.E. Computer Science and Design",
  college: "SNS College of Technology",
  email: "varshinis012007@gmail.com",
  headline: "Aspiring Software Developer | Creative Design Enthusiast",
  intro:
    "Hello! I'm Varshini, a Computer Science and Design student at SNS College of Technology. I enjoy coding, exploring different programming languages, learning new technologies, and creating visually appealing designs. I am passionate about continuous learning and building useful digital experiences.",
  about:
    "I am a Computer Science and Design student at SNS College of Technology with a strong interest in software development, programming, and creative design.\n\nI enjoy learning different programming languages, exploring new technologies, and developing my technical knowledge. I am also interested in website design, user-friendly interfaces, and visual creativity.\n\nMy goal is to build a successful career in software development while continuing to develop my creative skills. In the future, I also aspire to establish my own beauty parlour business.",
  careerGoals: [
    "Become a skilled Software Developer.",
    "Explore different programming languages and technologies.",
    "Improve my creative and UI/UX design skills.",
    "Eventually establish my own beauty parlour business."
  ],
  linkedin: "https://www.linkedin.com/in/varshini-senthilkumar-7839ba38",
  github: "https://github.com/varshinis012007-del/vcd-project",
  resumePath: "/assets/Varshini_S_Resume.pdf",
  profilePhotoPath: "/assets/profile-placeholder.svg" // To use your photo: add public/assets/profile.jpg and change to "/assets/profile.jpg"
};

export const technicalSkills = [
  {
    name: "C Programming",
    category: "Core Programming",
    description: "Foundational procedural programming, algorithms, and memory management basics.",
    icon: "Terminal"
  },
  {
    name: "C++",
    category: "Core Programming",
    description: "Object-oriented programming concepts, data structures, and problem solving.",
    icon: "Cpu"
  },
  {
    name: "Java",
    category: "Core Programming",
    description: "Class architecture, object-oriented concepts, and application programming logic.",
    icon: "Coffee"
  },
  {
    name: "Python",
    category: "Core Programming",
    description: "Scripting, algorithmic logic, data processing, and automation fundamentals.",
    icon: "FileCode"
  },
  {
    name: "HTML",
    category: "Web Fundamentals",
    description: "Semantic web page structure, accessible layouts, and modern HTML5 standards.",
    icon: "Globe"
  },
  {
    name: "CSS",
    category: "Web Fundamentals",
    description: "Styling modern interfaces, Flexbox, CSS Grid layouts, and styling transitions.",
    icon: "Layout"
  },
  {
    name: "Responsive Web Design",
    category: "Web Fundamentals",
    description: "Mobile-first development, media queries, and adaptable multi-device layouts.",
    icon: "Smartphone"
  },
  {
    name: "Microsoft Excel",
    category: "Productivity & Analysis",
    description: "Data organization, spreadsheets, formulas, structured calculations, and tables.",
    icon: "Table"
  }
];

export const designSkills = [
  {
    name: "Graphic Design",
    description: "Visual composition, aesthetics, balance, and modern digital illustrations.",
    icon: "Palette"
  },
  {
    name: "UI/UX Design",
    description: "Crafting intuitive user workflows, wireframes, and human-centered design.",
    icon: "Layers"
  },
  {
    name: "Website Design",
    description: "Translating brand concepts into clean, engaging, interactive digital layouts.",
    icon: "Monitor"
  },
  {
    name: "Typography",
    description: "Selecting harmonious font pairings, hierarchy, readability, and text layout.",
    icon: "Type"
  },
  {
    name: "Branding and Identity",
    description: "Creating cohesive visual identities, color palettes, and brand guidelines.",
    icon: "Sparkles"
  },
  {
    name: "Creative Visual Design",
    description: "Expressive artistic visuals, promotional creative assets, and balance.",
    icon: "Eye"
  },
  {
    name: "User-Friendly Interfaces",
    description: "Prioritizing accessibility, seamless interactions, and clear user journeys.",
    icon: "Smile"
  }
];

export const projects = [
  {
    id: "loanx",
    title: "LoanX",
    category: "Technical Development",
    typeTag: "AI & Full-Stack Concept",
    description:
      "An AI-powered commercial loan underwriting and operations project designed to support document processing, financial analysis, risk assessment, credit review, and covenant monitoring.",
    tools: ["Python", "AI / Document Processing", "Financial Analysis", "Credit Risk Modeling", "React"],
    highlights: [
      "Automated commercial loan intake and financial statement document ingestion.",
      "Assesses credit risk factors and financial ratios for informed loan underwriting decisions.",
      "Designed covenant tracking mechanisms to monitor borrower compliance proactively."
    ],
    nature: "Technical Software Project",
    statusBadge: "Active Development",
    githubUrl: "https://github.com/varshinis012007-del/vcd-project",
    liveUrl: null,
    imagePlaceholder: "/projects/loanx-preview.svg"
  },
  {
    id: "technova-2027",
    title: "TECHNOVA 2027",
    category: "Design & Branding",
    typeTag: "Symposium Identity",
    description:
      "A technical symposium branding project focused on creating a consistent visual identity, including logo concepts, posters, promotional designs, invitations, and event materials.",
    tools: ["Brand Identity", "Poster Design", "Logo Design", "Typography", "Event Visuals"],
    highlights: [
      "Conceptualized a futuristic theme fitting a state-level technical symposium.",
      "Designed event posters, promotional collateral, digital banners, and stage backdrops.",
      "Maintained strict typographic and color consistency across all print and digital assets."
    ],
    nature: "Creative Design & Branding Concept",
    statusBadge: "Design Concept",
    githubUrl: null,
    liveUrl: null,
    imagePlaceholder: "/projects/technova-preview.svg"
  },
  {
    id: "naturegold",
    title: "NatureGold Organic Honey",
    category: "Design & Branding",
    typeTag: "Packaging & Identity",
    description:
      "An organic honey packaging and branding project involving product identity, packaging layout, typography, and visual presentation.",
    tools: ["Packaging Layout", "Product Identity", "Typography", "Visual Presentation"],
    highlights: [
      "Crafted an organic, eco-friendly visual identity communicating purity and natural origin.",
      "Designed jar label layouts with nutritional information hierarchy and clean typography.",
      "Balanced premium product aesthetics with clear customer trust cues."
    ],
    nature: "Product Branding & Packaging Design",
    statusBadge: "Design Concept",
    githubUrl: null,
    liveUrl: null,
    imagePlaceholder: "/projects/naturegold-preview.svg"
  },
  {
    id: "aerospace-share",
    title: "Aerospace Share",
    category: "Technical Development",
    typeTag: "Web Concept & UI/UX",
    description:
      "An aerospace website concept focused on autonomous navigation and airspace management.",
    tools: ["UI/UX Design", "Web Concept", "Navigation Systems", "Airspace Management", "Responsive UI"],
    highlights: [
      "Modern interface concept for airspace coordination and flight pathway sharing.",
      "Visualized real-time telemetry concepts and pilot/operator dashboard layouts.",
      "Clean contrast and data-dense layout principles suited for mission-critical displays."
    ],
    nature: "Web & UI/UX Design Concept",
    statusBadge: "Design Concept",
    githubUrl: null,
    liveUrl: null,
    imagePlaceholder: "/projects/aerospace-preview.svg"
  }
];

export const internshipExperience = {
  company: "EduSpine",
  role: "Full Stack Development Intern",
  duration: "14 June 2026 – 29 June 2026",
  period: "15 Days",
  summary:
    "Completed a 15-day internship in Full Stack Development at EduSpine. Gained exposure to front-end development, back-end integration, network designing, and real-time AI-based projects, including model training and testing.",
  learningAreas: [
    {
      title: "Front-End Development",
      description: "Practiced structuring responsive web interfaces and user interactions."
    },
    {
      title: "Back-End Integration",
      description: "Explored connecting client interfaces to backend services and handling API responses."
    },
    {
      title: "Network Designing",
      description: "Understood network architecture essentials, client-server communications, and protocols."
    },
    {
      title: "AI-Based Projects",
      description: "Gained real-world exposure to real-time artificial intelligence workflows and implementations."
    },
    {
      title: "Model Training and Testing",
      description: "Participated in testing datasets, observing training pipelines, and validating model outputs."
    }
  ]
};

export const certificates = [
  {
    id: 1,
    title: "Computer Science and Java",
    category: "Programming & OOP",
    code: "CS-JAVA",
    image: "/certificates/cert-cs-java.svg"
  },
  {
    id: 2,
    title: "Build a Responsive Website with HTML",
    category: "Web Development",
    code: "WEB-HTML-RESP",
    image: "/certificates/cert-responsive-html.svg"
  },
  {
    id: 3,
    title: "C for Beginners",
    category: "Procedural Programming",
    code: "C-PROG-BEG",
    image: "/certificates/cert-c-beginners.svg"
  },
  {
    id: 4,
    title: "Excel Basics",
    category: "Data & Analysis",
    code: "EXCEL-BASICS",
    image: "/certificates/cert-excel-basics.svg"
  },
  {
    id: 5,
    title: "Python",
    category: "Core Programming",
    code: "PY-CORE",
    image: "/certificates/cert-python.svg"
  },
  {
    id: 6,
    title: "C++",
    category: "Object-Oriented Programming",
    code: "CPP-CORE",
    image: "/certificates/cert-cpp.svg"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Centum (100 / 100) in Computer Science",
    subtitle: "Class 12 State Board Examinations",
    description:
      "Scored 100/100 in Computer Science in the Class 12 State Board Examinations.",
    badge: "100 / 100 Centum",
    icon: "Trophy"
  }
];

export const careerVision = [
  {
    id: "software-dev",
    category: "Primary Professional Career",
    title: "Software Development",
    description:
      "Building my technical skills and developing useful software applications. Dedicated to mastering multiple programming languages, engineering scalable web platforms, and solving real-world challenges through clean code.",
    points: [
      "Master modern software architectures and backend development",
      "Blend creative design sensibilities into intuitive frontends",
      "Contribute to meaningful real-world software engineering projects"
    ],
    accentColor: "#0B192C",
    icon: "Code"
  },
  {
    id: "entrepreneurship",
    category: "Long-Term Entrepreneurial Goal",
    title: "Entrepreneurship & Beauty Parlour Business",
    description:
      "Working toward my long-term goal of establishing my own beauty parlour business. Combining creative aesthetic direction, customer experience design, and modern digital management.",
    points: [
      "Blend creative aesthetics, branding, and customer hospitality",
      "Leverage digital systems and online booking for smooth business operations",
      "Fulfill a passionate long-term dream of creative independence"
    ],
    accentColor: "#8B5CF6",
    icon: "Sparkles"
  }
];
