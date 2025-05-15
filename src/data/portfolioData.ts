import { Code, Brain, BarChart as ChartBar, Workflow } from 'lucide-react';

export interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  results: string;
  link?: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const personalInfo = {
  name: "Priyadharshini R",
  title: "Data Scientist | AI & Machine Learning Engineer",
  tagline: "Turning Data into Smart Decisions with AI & ML.",
  email: "r10priyadharshini@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyadharshinir10/",
  github: "https://github.com/Priyadharshini091",
  website: "https://priyadharshinirajaram.netlify.app/",
  phone: "7604844159",
  photo: "https://i.postimg.cc/Y0STJSSj/IMG-20240718-125614.jpg",
  about: "I’m a Data Scientist and AI/ML enthusiast with a solid foundation in Python, machine learning, and data analysis. I love solving real-world problems using data and have built projects like Medicinal Plant Identification and Recommendations and face recognition. I’m eager to keep learning and apply my skills to meaningful challenges."
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
    ]
  },
  {
    name: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Supervised Learning", level: 95 },
      { name: "Unsupervised Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Transformers", level: 75 },
    ]
  },
  {
    name: "AI Frameworks",
    icon: Workflow,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-Learn", level: 95 },
    ]
  },
  {
    name: "Data Visualization",
    icon: ChartBar,
    skills: [
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 95 },
      { name: "Plotly", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 75 },
    ]
  },
  
];

export const experiences: Experience[] = [
  {
    title: "Data Science Trainee",
    company: "TCDS Computer Education ",
    period: "Jan 2025 - Present",
    description: "Working with data science team in developing ML solutions for enterprise clients across healthcare and finance sectors.",
    "achievements": [
    "Trained over 100+ students in Python, Machine Learning, and SQL through structured lessons.",
    "Developed and executed hands-on projects using Pandas, Scikit-Learn, and TensorFlow, improving model accuracy by 15%.",
    "Analyzed student performance using SQL and Python, identifying learning gaps and increasing overall course completion rate by 30%."
]
  },

];

export const projects: Project[] = [
  {
    title: "Medicinal Plant Identification and Recommendations",
    description: "Built a system using Deep Learning (Vision Transformer) to identify medicinal plants with 96% accuracy.",
    technologies: ["Python", "TensorFlow", "SQL", "Flask", "Open CV"],
    results: "Achieved 92% accuracy in predicting diseases,Proving Recommendations for 50+ plants.",
    link: "https://github.com/Priyadharshini091/medicinal-plants-system.git",
    image: "https://i.postimg.cc/rp8jhPsw/img1.jpg"
  },
  {
    title: "Smart Face Verification Attendance System",
    description: "A real-time attendance system using deep learning, where face verification replaces traditional ID or biometric attendance.",
    technologies: ["Python","PyTorch", "OpenCV & MTCNN","Pandas & NumPy", "Streamlit"],
    results: "The system uses a Siamese Neural Network to verify whether a person's face matches a registered identity and marks attendance if verified with high similarity",
    link: "https://github.com/Priyadharshini091/Smart-Face-Verification-Attendance-System.git",
    image: "https://i.postimg.cc/KYJNCD3r/img2.jpg"
  },
  {
    title: "OneHealth: Unified Healthcare Platform",
    description: "A smart healthcare platform offering real-time hospital, doctor, pharmacy, and blood bank access with AI-powered tools for easy and intelligent care.",
    technologies: ["Python", "HTML5", "CSS", "Javascript", "Sql"],
    results: "Smart healthcare platform with real-time access to hospitals, doctors, pharmacies, and blood banks powered by AI tools.",
    link: "https://github.com/Priyadharshini091/doctor-appointment-system.git",
    image: "https://i.postimg.cc/fW66HMNW/img3.jpg"
  },
   
];

export const education: Education[] = [
  {
    degree: "B.Tech Artificial Intelligence and Data Science | CGPA: 8.0",
    institution: "CARE Group of Institutions",
    year: "2025"
  },
  {
    degree: "HSC",
    institution: "Government Higher Secondary School | Percentage:84%",
    year: "2021"
  },
  {
    degree: "SSLC",
    institution: "Government Higher Secondary School | Percentage: 82%",
    year: "2019"
  }
];

export const certifications: Certification[] = [
  {
    name: "Data Analysis with Python",
    issuer: "FreeCodeCamp",
    year: "2024"
  },

  {
    name: "Data Visualization with Python",
    issuer: "Great Learning",
    year: "2024"
  },
  {
    name: "Power for Beginners",
    issuer: "Simple Learn",
    year: "2025"
  },
  {
    name: "Macine Learning with Python",
    issuer: "FreeCodeCamp",
    year: "2025"
  }
];