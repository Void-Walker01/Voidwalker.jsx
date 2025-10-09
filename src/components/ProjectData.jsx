export const projects = [
  {
    title: "CampusHive",
    techStack: ["MERN Stack","Tailwind", "JWT", "CI/CD"],
    description: [
    "A full-stack student networking platform with dynamic feeds, user search with follow/unfollow functionality, polls, and anonymous confessions.",
    "Implemented JWT authentication with email verification, boosting trust and adoption.",
    "Built structured APIs with analytics endpoints and followed CI/CD deployment workflows with error handling for reliability.",
    ],
    links: {
      live: "https://campus-hive-rho.vercel.app/", 
      github: "https://github.com/Void-Walker01/CampusHive", 
    },
    image: "/campushive.png",
  },
  {
    title: "Syllanapse AI: Academic Assistant",
    techStack: ["React", "Node.js", "Express", "Google Gemini API", "Tailwind"],
    description: [
      "Designed an Al-powered app that converts lecture notes into customized study guides, summaries, and quizzes.",
      "Integrated Google Gemini LLM API for dynamic prompts and multi-format input (PDF/TXT).",
      "Implemented server-side PDF generation and a responsive, dark-themed UI with React + Tailwind.",
    ],
    links: {
      github: "https://github.com/Void-Walker01/Syllanapse", 
    },
    image: "/syllanapse.png",
  },
  {
    title: "Movie Search App",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Axios"],
    description: [
      "Built a discovery app with REST API integration, custom watchlist, and IMDb rating-based sorting.",
      "Optimized async data fetching with Axios and used localStorage for persistence, improving performance and reliability.",
    ],
    links: {
      live: "https://void-walker01.github.io/Movie-Search/", 
      github: "https://github.com/Void-Walker01/Movie-Search",
    },
    image: "/moviesearch.png",
  },
];