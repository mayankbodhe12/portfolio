// Skills Section Logo's
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import javascriptLogo from "./assets/javascript.png";
import reactjsLogo from "./assets/reactjs.png";
import nodejsLogo from "./assets/nodejs.png";
import expressjsLogo from "./assets/express.png";
import mysqlLogo from "./assets/mysql.png";
import mongodbLogo from "./assets/mongodb.png";
import cppLogo from "./assets/cpp.png";
import javaLogo from "./assets/java.png";
import pythonLogo from "./assets/python.png";
import gitLogo from "./assets/git.png";
import githubLogo from "./assets/github.png";
import vscodeLogo from "./assets/vscode.png";
import vercelLogo from "./assets/vercel.png";

// Project Section Logo's
import QuickAILogo from "./assets/QuickAI.png";
import appointmentLogo from "./assets/appointment.png";
import spotifyCloneLogo from "./assets/spotifyClone.png";
import amazonImageLogo from "./assets/amazonImage.png";
import staySmartLogo from "./assets/staySmartLogo.png";

//Educaation Section Logo's
import lnctlogoLogo from "./assets/lnctlogo.png";
import schoollogoLogo from "./assets/schoollogo.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    // img: webverseLogo,
    role: "Java Development Intern",
    company: "Cognifyz Technology",
    date: "agu - Sep 2025",
    desc: "As a Java Development Intern, I have the opportunity to work on various projects and tasks, develop robust and scalable applications, and contribute to the design and implementation of software solutions.",
    skills: ["java"],
  },
// {
//   id: 1,
//   img: agcLogo,
//   role: "Fullstack Engineer",
//   company: "Agumentik Group of Companies",
//   date: "July 2023 - March 2024",
//   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//   skills: [
//     "ReactJS",
//     // "Redux",
//     "JavaScript",
//     // "Tailwind CSS",
//     "HTML",
//     "CSS",
//     "SQL",
//   ],
// },
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       // "Bootstrap",
//       // "Figma",
//       // "Material UI",
//     ],
//   },
];

export const education = [
  {
    id: 0,
    img: lnctlogoLogo,
    school: "Lakshmi Narain College Of Technology Bhopal",
    date: "Sept 2024 - june 2027",
    grade: "7.46 CGPA (Till 5 Sem)",
    desc: "I am currently pursuing B.Tech in Branch Compute Science And Engineering (Internet Of Thinks) from LNCT Group Of College Bhopal. I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems.",
    degree: "B.Tech - Computer Science And Engineering (Internet Of Thinks)",
  },
  {
    id: 1,
    img: schoollogoLogo,
    school: "Govt. Higher Secondary School Bairagarh",
    date: "jun 2023 - march 2024",
    grade: "71.2%",
    desc: "I completed my class 12 education from Govt. Higher Secondary School Bairagarh, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science ",
    degree: "MP(XII) - PCM with Computer Science",
  },
    {
    id: 1,
    img: schoollogoLogo,
    school: "Govt. Higher Secondary School Bairagarh",
    date: "jun 2021 - march 2022",
    grade: "A",
    desc: "I completed my class 10 education from Govt. Higher Secondary School Bairagarh, under the MP board.",
    degree: "MP(X) - PCM with Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "SmartStay | Full Stack Stay Booking Platform",
    description:
      "Built a full-stack booking platform enabling users to explore, compare and book properties with responsive interface. Implemented JWT-based authentication and role-based access with secure REST APIs using Node.js and Express. Developed a booking system with date availability checks and split group booking with Razorpay payment integration. Integrated real-time chat and booking updates using Socket.IO, along with geolocation-based nearby stay discovery.",
    image: staySmartLogo,
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Postmap API", "API", "Git", "Socket.IO", "Razorpay"],
    github: "https://github.com/mayankbodhe12/StaySmart.git",
    webapp: "https://stay-smart-eta.vercel.app",
  },

   {
    id: 1,
    title: "Doctor Appointment Booking Platform - Prescripto",
    description:
      " Developed a full-stack doctor appointment booking platform featuring dedicated interfaces for admin, doctor,and user roles. The application includes secure role-based authentication, appointment scheduling, doctormanagement, and real-time updates. Designed a clean, responsive, and user-friendly UI, while ensuring smooth data flow between the front end and back end. This project strengthened my skills in full-stack development, API integration, state management, and building scalable, real-world healthcare applications.",
    image: appointmentLogo,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Postmap API", "API", "Git"],
    github: "https://github.com/mayankbodhe12/Prescripto.git",
    webapp: "https://prescripto-kappa-eight.vercel.app",
  },
   {
    id: 2,
    title: "Full Stack AI SaaS Application - QuickAI",
    description:
      "Developed and deployed a full-stack AI SaaS application (Quick.ai) that integrates advanced AI tools for content generation, image processing, and resume review. Built with React, Node.js, Express, MYSQL, and Clerk authentication, and deployed on Vercel. Implemented secure user authentication, subscription plans, and a dynamic dashboard with features like article writing, blog title generation, image editing, and resume analysis. Designed a responsive and user-friendly UI while ensuring seamless backend integration and scalable cloud deployment.",
    image: QuickAILogo,
    tags: ["HTML", "Tailwind CSS", "JavaScript","React.js","Node.js", "Express.js", "MongoDB", "Postmap API", "API", "Git"],
    github: "https://github.com/mayankbodhe12/QuickAI.git",
    webapp: "https://quickai-gs.vercel.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A Spotify Clone is a web or mobile application replicating Spotify's core features, such as musicstreaming, playlist creation, user authentication, and a dynamic user interface",
    image: spotifyCloneLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 4,
    title: "Amazon Website",
    description:
      "An intuitive and scalable e-commerce platform enabling users to browse, purchase, and managea wide range of products and services online",
    image: amazonImageLogo,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
