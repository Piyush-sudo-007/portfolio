const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    action: "toggle-theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "archive",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "SQL", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "React Natve"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Pyhton Tools",
    items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "Transformers"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "QT"],
  },
  {
    category: "Other",
    items: ["API", "Socket", "Jupyter Notebook", "DSA", "DBMS", "SDLC"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Piyush-sudo-007",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/mepiyushdev/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/piyush-dev-nitmz",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/g1.jpg",
  },
  {
    id: 2,
    img: "/images/g2.jpeg",
  },
  {
    id: 3,
    img: "/images/g3.png",
  },
  {
    id: 4,
    img: "/images/g4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1
    {
      id: 5,
      name: "MAPP - Mizoram Agriculture Precision Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[3vh] left-5",
      children: [
        {
          id: 1,
          name: "MAPP.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed an AI-powered mobile platform providing soil analysis, plant disease detection, weather alerts, and crop market predictions for Mizoram farmers.",
            "Implemented ML models (98% accuracy in prototype testing) using image processing, sensor data, and cloud-based forecasting engines.",
            "Designed offline-first architecture with real-time recommendations for yield optimization in remote regions.",
          ],
        },
        {
          id: 2,
          name: "MAPP.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Piyush-sudo-007/Mizoram-Agri.git",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "project_selection_mail.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/g3.png",
        },
      ],
    },

    // Project 2
    {
      id: 6,
      name: "BlueCode - Online Code Editor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[25vh] left-6",
      children: [
        {
          id: 1,
          name: "Bluecode.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Created an online code editor supporting multiple languages with real-time execution and output display.",
            "Integrated voice command features and user file storage using cloud-based APIs",
            "Built with React, Node.js, Express, and Python for backend code execution",
          ],
        },
        {
          id: 2,
          name: "bluecode.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://bluecode-jeds.onrender.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "bluecode.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-100",
      windowPosition: "top-[45vh] left-8",
      children: [
        {
          id: 1,
          name: "Food Delivery Web Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a dynamic food delivery platform with restaurant management, live order tracking, and chatbot assistance.",
            "Built using React, Node.js, Express, and MongoDB; integrated Direction API for delivery route optimization.",
            "Designed responsive UI and implemented secure payment and authentication modules.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Piyush-sudo-007/Khana-Khajana.git",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project2.png",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Live Bus Tracking App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-10",
      windowPosition: "top-[65vh] left-8",
      children: [
        {
          id: 1,
          name: "Live Bus Tracking App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            " Developed a cross-platform mobile vehicle tracking ecosystem for the campus transit network with a low streaming lag of 2–5 seconds.",
            " Built client-side GPS location polling mechanisms and custom interactive map routing overlays.",
            "Configured identity verification via Clerk Authentication alongside multi-module role-based access tokens.",
          ],
        },
        {
          id: 2,
          name: "live-bus-tracking.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Piyush-sudo-007/live-bus-tracking.git",
          position: "top-10 right-20",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "Smartpad - Offline AI Powered Notepad",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-100",
      windowPosition: "top-[5vh] left-40",
      children: [
        {
          id: 1,
          name: "Smartpad.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Engineered a lightweight C++ desktop editor running private, zero-latency text predictions entirely offline.",
            "Embedded ONNX Runtime on a background thread to map input tokens, attention masks, and positional graphs.",
            "Built real-time user behavior learning utilizing an SQLite3 database schema overlaying custom log-scale probabilistic frequency biases.",
            "Programmed automatic context parsing to instantly switch prediction models between Blog writing and Coding modes.",
          ],
        },
        {
          id: 2,
          name: "Samrtpad.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Piyush-sudo-007/Smartpad/releases/tag/v1.1.0",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/g1.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Hey! I’m Piyush 👋, a software developer and AI enthusiast who enjoys building reliable, scalable applications that solve real-world problems.",
        "I work mainly with JavaScript, React, Node.js, and modern full-stack tools, and I love exploring how AI and machine learning can make software smarter.",
        "I care a lot about clean architecture, good UX, and writing code that’s efficient, readable, and easy to maintain.",
        "When I’m not coding, you’ll probably find me experimenting with ML models, refining side projects, or diving deep into new tech that sparks my curiosity 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
