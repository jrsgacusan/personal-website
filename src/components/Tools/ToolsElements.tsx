import css from "../../assets/tools/CSS.webp";
import git from "../../assets/tools/GIT.webp";
import html from "../../assets/tools/HTML.webp";
import js from "../../assets/tools/JAVASCRIPT.webp";
import node from "../../assets/tools/NODE.webp";
import react from "../../assets/tools/REACT.webp";
import sass from "../../assets/tools/SASS.webp";
import ts from "../../assets/tools/TS.webp";

interface Tools {
  image: string;
  alt: string;
  id: number;
}

export const toolList: Tools[] = [
  {
    image: react,
    alt: "React",
    id: 1,
  },
  {
    image: js,
    alt: "JavaScript",
    id: 2,
  },
  {
    image: html,
    alt: "HTML",
    id: 3,
  },
  {
    image: css,
    alt: "CSS",
    id: 4,
  },
  {
    image: ts,
    alt: "TypeScript",
    id: 5,
  },
  {
    image: node,
    alt: "NodeJS",
    id: 6,
  },
  {
    image: git,
    alt: "Github",
    id: 7,
  },
  {
    image: sass,
    alt: "SASS",
    id: 8,
  },
];
