import self from "../img/akshay.jpg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

import { FaReact, FaGithub, FaFacebook } from "react-icons/fa";
import { DiRubyRough } from "react-icons/di";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiRedux,
  SiNodedotjs,
  SiApollographql,
  SiRemix,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiPostgresql,
  SiGit,
  SiServerless,
  SiNginx,
  SiKubernetes
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaDocker, FaAws, FaKubernetes } from 'react-icons/fa';
import emoji from "react-easy-emoji";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Akshay",
  lastName: "Goyal",
  initials: "ag", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "Lead Software Engineer at Inkdesk",
    },
    {
      emoji: "📧",
      text: "akshay.goyal1008@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/akshay.goyal.5836711",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
        link: "https://youtu.be/qi2Z7ugD-qE",
        icon: 'fa fa-youtube',
        label: 'youtube'
    },
    {
      link: "https://github.com/akshaygoyal88",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/akshay-goyal-49271366/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //     link: "https://twitter.com",
    //     icon: "fa fa-twitter",
    //     label: 'twitter'
    // }
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  // bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  bio: "Hello! I'm Askhay. I'm a Lead Software Engineer at Inkdesk. Meticulous fullstack developer with 8+ years of experience developing, testing, and designing software solutions. Indepth understanding of web technologies with focus on delivering innovative business solutions. Excels in fastpaced, highenergy and deadlinedriven environment with willingness to take on additional tasks. You should hire me!",
  skills: {
    proficientWith: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "MERN stack", icon: <GrReactjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "NodeJS", icon: <SiNodedotjs /> },
      { name: "ROR", icon: <DiRubyRough /> },
      { name: "Apollo", icon: <SiApollographql /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Remix", icon: <SiRemix /> },
      { name: "HTML5", icon: <DiHtml5 /> },
      { name: "CSS3", icon: <DiCss3 /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "GIT", icon: <SiGit /> },
    ],
    // exposedTo: ['nodejs', 'python', 'adobe illustrator']
    exposedTo: [],
    Deployment: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Serverless", icon: <SiServerless /> },
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const feedbacks= [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];