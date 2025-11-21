// src/data/data.js


//   COURSE CATEGORIES


export const topics = [
  "Computer Science Fundamentals",
  "Engineering Mathematics",
  "Digital Communication & Electronics",
  "Communication & Soft Skills"
];


//        COURSES


export const courses = [
  
  // 1) COMPUTER SCIENCE FUNDAMENTALS
  

  {
    id: "cs1",
    title: "Introduction to Programming",
    category: "Computer Science Fundamentals",
    duration: "1.5 Months",
    description: "Learn basic programming concepts using C and Python.",
    topics: [
      "Data Types & Variables",
      "Loops & Conditionals",
      "Functions & Memory",
      "Basic Data Structures",
      "Debugging & Compilation"
    ]
  },
  {
    id: "cs2",
    title: "Data Structures & Algorithms",
    category: "Computer Science Fundamentals",
    duration: "2 Months",
    description: "Master core data structures and problem-solving patterns.",
    topics: [
      "Arrays & Linked Lists",
      "Stacks & Queues",
      "Trees & Graphs",
      "Sorting & Searching",
      "Time & Space Complexity"
    ]
  },
  {
    id: "cs3",
    title: "Operating Systems",
    category: "Computer Science Fundamentals",
    duration: "1.5 Months",
    description: "Understand how systems manage memory, processes, and hardware.",
    topics: [
      "Process Management",
      "Deadlocks & Scheduling",
      "Memory Management",
      "File Systems",
      "Threads & Concurrency"
    ]
  },
  {
    id: "cs4",
    title: "Database Management Systems",
    category: "Computer Science Fundamentals",
    duration: "1 Month",
    description: "Learn SQL, relational models, and database optimization.",
    topics: [
      "ER Diagrams",
      "Normalization",
      "SQL Queries",
      "Transactions & ACID",
      "Indexing & Joins"
    ]
  },

  
  // 2) ENGINEERING MATHEMATICS
  

  {
    id: "math1",
    title: "Engineering Mathematics – I",
    category: "Engineering Mathematics",
    duration: "1 Month",
    description: "Foundation math essential for all engineering branches.",
    topics: [
      "Differentiation",
      "Integration",
      "Matrices & Determinants",
      "Complex Numbers",
      "Sequences & Series"
    ]
  },
  {
    id: "math2",
    title: "Engineering Mathematics – II",
    category: "Engineering Mathematics",
    duration: "1 Month",
    description: "Advanced mathematics used in algorithms and system modelling.",
    topics: [
      "Laplace Transform",
      "Fourier Series",
      "Vector Calculus",
      "Ordinary Differential Equations",
      "Multiple Integrals"
    ]
  },
  {
    id: "math3",
    title: "Probability & Statistics",
    category: "Engineering Mathematics",
    duration: "1.5 Months",
    description: "Core concepts for data science, ML, and signal processing.",
    topics: [
      "Probability Rules",
      "Discrete & Continuous Distributions",
      "Sampling & Estimation",
      "Regression",
      "Hypothesis Testing"
    ]
  },


  // 3) DIGITAL COMMUNICATION & ELECTRONICS
  

  {
    id: "ece1",
    title: "Digital Electronics",
    category: "Digital Communication & Electronics",
    duration: "1.5 Months",
    description: "Learn logic circuits and digital system design.",
    topics: [
      "Number Systems",
      "Logic Gates",
      "Boolean Algebra",
      "K-Map Simplification",
      "Flip-Flops & Counters"
    ]
  },
  {
    id: "ece2",
    title: "Signals and Systems",
    category: "Digital Communication & Electronics",
    duration: "1.5 Months",
    description: "Study continuous and discrete signals used in all communication systems.",
    topics: [
      "Time & Frequency Domain",
      "Laplace & Fourier Transform",
      "LTI Systems",
      "Impulse Response",
      "Convolution"
    ]
  },
  {
    id: "ece3",
    title: "Digital Communication",
    category: "Digital Communication & Electronics",
    duration: "2 Months",
    description: "Learn how data is encoded, transmitted and received.",
    topics: [
      "Modulation Techniques",
      "Noise Analysis",
      "Pulse Shaping",
      "Multiplexing",
      "Information Theory"
    ]
  },
  {
    id: "ece4",
    title: "Microprocessors & Microcontrollers",
    category: "Digital Communication & Electronics",
    duration: "1 Month",
    description: "Understand embedded systems using 8086 and ARM-based controllers.",
    topics: [
      "Instruction Sets",
      "Architecture Overview",
      "Memory Interfacing",
      "I/O Ports",
      "Basic Assembly Programming"
    ]
  },

  // 4) COMMUNICATION & SOFT SKILLS (NON-TECH)

  {
    id: "soft1",
    title: "Communication Skills",
    category: "Communication & Soft Skills",
    duration: "1 Month",
    description: "Improve your speaking, listening, writing and presentation abilities.",
    topics: [
      "Professional Communication",
      "Email Writing",
      "Active Listening",
      "Verbal Fluency",
      "Presentation Techniques"
    ]
  },
  {
    id: "soft2",
    title: "Public Speaking",
    category: "Communication & Soft Skills",
    duration: "1 Month",
    description: "Become confident and clear while speaking publicly.",
    topics: [
      "Speech Delivery",
      "Body Language",
      "Handling Stage Fear",
      "Audience Engagement",
      "Voice Control"
    ]
  },
  {
    id: "soft3",
    title: "Aptitude & Reasoning",
    category: "Communication & Soft Skills",
    duration: "1.5 Months",
    description: "Develop logical reasoning and problem-solving skills.",
    topics: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Puzzles",
      "Data Interpretation",
      "Critical Thinking"
    ]
  }
];

//        ROADMAPS

export const roadmaps = [
  {
    id: "r1",
    title: "Complete CS Foundation",
    description: "Covers core subjects required for software engineering.",
    duration: "4–5 Months",
    courses: ["cs1", "cs2", "cs3", "cs4"]
  },
  {
    id: "r2",
    title: "ECE Core Roadmap",
    description: "Essential electronics subjects for industry readiness.",
    duration: "5 Months",
    courses: ["ece1", "ece2", "ece3", "ece4"]
  },
  {
    id: "r3",
    title: "Engineering Math Mastery",
    description: "Complete math series for GATE, ESE & placement foundation.",
    duration: "2–3 Months",
    courses: ["math1", "math2", "math3"]
  },
  {
    id: "r4",
    title: "Professional Communication",
    description: "Become job-ready with top communication skills.",
    duration: "2 Months",
    courses: ["soft1", "soft2", "soft3"]
  }
];
