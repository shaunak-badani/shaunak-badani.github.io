// NOTE: You can split this file into multiple files if you want to, especially as you add more content.

export const personalInfo = {
  name: "Shaunak Badani",
  title: "M. Eng in AI @ Duke",
  imageUrl: "/profile.jpg",
  about: "I am an AI grad student at Duke, with 2 years of experience in Software Engineering at Oracle, and 3 years of undergraduate research experience in Computational Natural Science at IIIT Hyderabad. I excel at learning new concepts fast, and I love to think about complex problems from different perspectives.",
  contact: {
    email: "shaunak.badani@duke.edu",
    github: "https://github.com/shaunak-badani",
    linkedin: "https://www.linkedin.com/in/shaunak-badani-b70b88176",

  }
};

export const skills = [
  {
    name: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Autograd"],
  },
  {
    name: "Programming",
    items: ["Python", "JavaScript", "C++", "CUDA", "Java"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Nginx", "Docker"],
  },
  {
    name: "Web Development",
    items: ["React", "Flask", "FastAPI", "Django"],
  },
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
  },
  {
    name: "Tools",
    items: ["Git", "Linux", "Bash scripting"],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Oracle Netsuite",
    location: "Hyderabad, India",
    period: "June 2022 - July 2024",
    description: [
      "Developed a feature that allows users to create reversals of Journal Entries using two clicks, which otherwise needed manual input.",
      "Enhanced developer tools to assist in identifying common customer issues with the Currency Revaluation engine, which saved several weeks of manual developer investigation and resulted in faster issue resolution.",
      "Added slack notiﬁcations for team-city (CI / CD) failures that help detect build failures early on during feature development, which saved precious time during feature integration into production.",
      "Assisted in transitioning the team from Perforce to Git as the VCS agent, ensuring a smooth transition of workﬂow well before support for Perforce from the Dev-Ops team was discontinued.",
      "Held informational sessions on several topics - on both domain and technical knowledge, which helped the team gather baseline knowledge necessary at work.",
      "Resolved multiple high-urgency customer issues within 1-2 business days by investigating and checking product expectation from documentation.",
      "Integrated the code-ﬁx and automated test of a product issue by making code changes that was blocking a work-ﬂow for 38 customers.",
      "Mentored new-hires in product development and domain-related knowledge, with a goal to gradually make them independent in their work."
    ],
  },
  {
    title: "Web Administrator",
    company: "IIIT Hyderabad",
    location: "Hyderabad, India",
    period: "August 2019 - October 2020",
    description: [
      "Added a ﬁeld of ”year” on the course-feedback portal by making changes to the code-base, that helped faculty separate 2020 and 2021 course feedback data seamlessly.",
      "Deployed a newer version of the ”Central Authentication Service” (CAS) by modifying the template, which allowed integration of other services with CAS that were non-compliant with older versions of the latter.",
    ],
  },
  {
    title: "Research student",
    company: "IIIT Hyderabad",
    location: "Hyderabad, India",
    period: "July 2019 - October 2022",
    description: [
      "Implemented an enhanced molecular dynamics algorithm in python and C++ to achieve simulation convergence quicker.",
      "Published a research paper outlining the derivation of the algorithm and its implementation on three simple systems and one molecular system",
      "Organized informational sessions on foundational statistical mechanics concepts that helped juniors in the research group graduate faster."
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Kidsens",
    location: "Hyderabad, India",
    period: "May 2019 - August 2019",
    description: [
      "Implemented a mobile application in React Native that presents students with a set of questions that helps evaluate whether a kid at school needs a medical check-up",
      "Mocked up application UI’s in Photoshop before implementing the UI, which helped the team arrive at a consensus on a good UI design.",
      "Developed the backend API in django and deployed the application on an AWS EC2 instance."
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Artificial Intelligence",
    school: "Duke University",
    location: "Durham, NC",
    period: "August 2024 - December 2025",
    description: "Focus: Mechanistic interpretability",
  },
  {
    degree: "M.S in Computational Natural Sciences",
    school: "International Institute of Information Technology, Hyderabad",
    location: "Hyderabad, India",
    period: "August 2021 - November 2022",
    description: "Focus: Algorithmic implementation of a novel molecular dynamics method",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "International Institute of Information Technology, Hyderabad",
    location: "Hyderabad, India",
    period: "August 2017 - July 2021",
    description: "Focus: Web development, Operating systems, Optimization methods, Statistical methods in Artificial Intelligence",
  },
]; 

export const projects = [
    {
      title: "Macrograd",
      description: "Built a custom machine learning framework (like Pytorch) in C++",
      technologies: ["C++", "CMake", "GMock"],
      internalLink: "/projects/macrograd",
      externalLink: "https://github.com/shaunak-badani/Macrograd",
      image: "/projects/macrograd/computation_graph.png",
    },
    {
      title: "Replica Exchange with Non-equilibrium switches",
      description: "Implemented an enhanced molecular dynamics algorithm that helps speed up simulation convergence by employing non-equilibrium methods of simulation.",
      technologies: ["Python", "C++", "Numpy", "Matplotlib"],
      internalLink: "/projects/rens",
      externalLink: "https://github.com/shaunak-badani/RENS-CPP",
      image: "/projects/rens/RENS_schematic.png",
    },
  ];