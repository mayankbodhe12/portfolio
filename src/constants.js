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
import spotifyCloneLogo from "./assets/spotifyClone.png";
import amazonImageLogo from "./assets/amazonImage.png";

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

// export const experiences = [
//   {
//     id: 0,
//     // img: webverseLogo,
//     role: "Fullstack Developer",
//     company: "Webverse Digital",
//     date: "April 2024 - Present",
//     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React JS",
//       "TypeScript",
//       "Node JS",
//       // "Tailwind CSS",
//       "MongoDb",
//       // "Redux",
//       " Next Js",
//     ],
//   },
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
// ];

export const education = [
  {
    id: 0,
    img: lnctlogoLogo,
    school: "Lakshmi Narain College Of Technology Bhopal",
    date: "Sept 2024 - Aug 2027",
    grade: "7.12 CGPA",
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
    title: "Spotify Clone",
    description:
      "A Spotify Clone is a web or mobile application replicating Spotify's core features, such as musicstreaming, playlist creation, user authentication, and a dynamic user interface",
    image: spotifyCloneLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 1,
    title: "Amazon Website",
    description:
      "An intuitive and scalable e-commerce platform enabling users to browse, purchase, and managea wide range of products and services online",
    image: amazonImageLogo,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
