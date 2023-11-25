// Import images when needed
import apiFernFun from "../../assets/api.fern.fun.jpg";
import elektronhack from "../../assets/elektronhack.jpg";
import toolsFernFun from "../../assets/tools.fern.fun.jpg";
import sshAlert from "../../assets/ssh-alert.jpg";
import cloudFernFun from "../../assets/cloud.fern.fun.jpg";
import gameFernFun from "../../assets/game.fern.fun.jpg";
import piFernFun from "../../assets/pi.fern.fun.jpg";

export const labs = [
  {
    title: "elektronhack",
    description:
      "Our project involves organizing a hackathon event that brings together developers, designers, and entrepreneurs to collaborate on building innovative solutions within a limited time frame.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
      {
        name: "QQLKAA",
        icon: "https://avatars.githubusercontent.com/u/27441333?v=4",
      },
    ],
    isPrivate: false,
    img: elektronhack,
    github: "https://github.com/QQLKAA/elektronhack-landing",
    href: "https://zse.edu.pl/elektronhack/",
    tags: ["react", "polish"],
  },
  {
    title: "tools.fern.fun",
    description:
      "The project aims to develop web development tools that assist programmers in creating websites efficiently and with ease",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: false,
    img: toolsFernFun,
    github: "https://github.com/Fern-fun/tools.fern.fun",
    href: "https://tools.fern.fun/",
    tags: ["react", "english"],
  },
  {
    title: "ssh-alert",
    description:
      "ssh alert is a simple tool to alert you when someone is trying to login to your server via ssh.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: false,
    img: sshAlert,
    href: "https://github.com/MrJacob12/ssh-alert",
    github: "https://github.com/MrJacob12/ssh-alert",
    tags: ["rust", "english"],
  },
  {
    title: "cloud.fern.fun",
    description:
      "Cloud storage project is a platform for storing and accessing data over the internet, providing users with scalable and secure storage infrastructure.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: true,
    img: cloudFernFun,
    github: "https://github.com/Fern-fun/cloud.fern.fun",
    href: "",
    tags: ["react", "typescript", "english"],
  },
  {
    title: "game.fern.fun",
    description:
      "The guessing game project involves identifying the correct flag from a set of options. Players are challenged to test their knowledge and recognition of various flags from around the world.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: false,
    img: gameFernFun,
    github: "https://github.com/Fern-fun/game.fern.fun",
    href: "https://game.fern.fun/",
    tags: ["react", "english"],
  },
  {
    title: "api.fern.fun",
    description:
      "This API project is designed to provide a backend service for a web or mobile application. It allows users to create, read, update, and delete data through RESTful endpoints.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: true,
    img: apiFernFun,
    github: "https://github.com/Fern-fun/api.fern.fun",
    href: "https://api.fern.fun/",
    tags: ["python", "english"],
  },
  {
    title: "pi.fern.fun",
    description:
      "Server dashboard project is a web application that provides an overview of server status, system health metrics, and logs in real-time.",
    author: [
      {
        name: "MrJacob12",
        icon: "https://avatars.githubusercontent.com/u/46843555?v=4",
      },
    ],
    isPrivate: false,
    img: piFernFun,
    github: "https://github.com/Fern-fun/pi.fern.fun",
    href: "https://pi.fern.fun/",
    tags: ["react", "english"],
  },
];
