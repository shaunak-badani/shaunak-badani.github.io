// NOTE: You can split this file into multiple files if you want to, especially as you add more content.

export const personalInfo = {
  name: "Anna Lytics",
  title: "Senior AI Engineer & Machine Learning Researcher",
  imageUrl: "/profile.jpg",
  about: "I'm a Senior AI Engineer with 2+ years of experience in developing and deploying machine learning solutions. My expertise spans across computer vision, natural language processing, and reinforcement learning. I'm passionate about making AI more accessible and ethical.",
  contact: {
    email: "jane.doe@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  }
};

export const skills = [
  {
    name: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Transformers", "Computer Vision", "NLP"],
  },
  {
    name: "Programming",
    items: ["Python", "TypeScript", "C++", "Julia", "CUDA"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Azure ML", "Docker", "Kubernetes", "MLflow"],
  },
  {
    name: "Web Development",
    items: ["React", "Next.js", "Node.js", "FastAPI", "GraphQL"],
  },
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
  },
  {
    name: "Tools",
    items: ["Git", "Linux", "VS Code", "PyCharm", "Jupyter Lab"],
  },
];

export const experience = [
  {
    title: "Machine Learning Engineer",
    company: "AI Solutions Inc",
    location: "Boston, MA",
    period: "2022 - 2023",
    description: [
      "Developed NLP models for text classification and sentiment analysis",
      "Implemented CI/CD pipelines for ML model deployment",
      "Mentored junior engineers and interns",
    ],
  },
  {
    title: "AI Research Intern",
    company: "Research Labs",
    location: "Seattle, WA",
    period: "2021",
    description: [
      "Developed novel algorithms for reinforcement learning",
      "Collaborated with cross-functional teams on research projects",
      "Implemented and evaluated ML models for production use cases",
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Artificial Intelligence",
    school: "Duke University",
    location: "Durham, NC",
    period: "2023 - 2025",
    description: "Focus: Responsible AI",
  },
  {
    degree: "B.S. in Computer Science",
    school: "NC State University",
    location: "Raleigh, NC",
    period: "2018 - 2022",
    description: "Minor in Mathematics",
  },
]; 

export const projects = [
    {
      title: "Natural Language Processing Platform",
      description: "Built a scalable NLP platform for sentiment analysis and text classification, processing 1M+ documents daily.",
      technologies: ["Transformers", "AWS", "TypeScript", "Python"],
      internalLink: "/projects/nlp-platform",
      externalLink: "https://github.com/janedoe/nlp-platform",
      image: "/projects/nlp/main.jpg",
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Implemented reinforcement learning algorithms for autonomous drone navigation in complex environments.",
      technologies: ["PyTorch", "ROS", "C++", "Python"],
      internalLink: "/projects/drone-nav",
      externalLink: "https://github.com/janedoe/drone-nav",
      image: "/projects/drone/main.jpg",
    },
  ];