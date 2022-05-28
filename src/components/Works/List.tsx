import React from "react";
import ListItem from "./ListItem";
import classes from "./List.module.scss";
import { Work } from "../../models/Work";
import bsu from "../../assets/images/bsu-smis.webp";
import quicks from "../../assets/images/quick-s.webp";
import picpa from "../../assets/images/picpa-mis.webp";

const list: Work[] = [
  {
    isPublished: false,
    image: quicks,
    title: "Quick Service Android Application",
    description:
      "Android mobile application developed using Kotlin. It serves as a service marketplace application for Baguio City Local Citizens.",
    id: "a1",
    href: "https://github.com/jrsgacusan/Quick-Service",
  },
  {
    isPublished: false,
    image: bsu,
    title: "BSU SMIS React App",
    description:
      "The react version of Benguet State University School Management Information System. It was developed using React.js.",
    id: "a2",
    href: "https://github.com/jrsgacusan/iol-bsu-smis",
  },
  {
    isPublished: true,
    image: picpa,
    title: "PICPA MIS",
    description:
      "Membership Information System for Philippine Institute of Certified Public Accountant - Benguet Chapter. Front-end technologies used: React.js, Bootstrap, HTML, CSS, and JavaScript.",
    id: "a3",
    href: "https://picpabbmp.com/",
  },
];

const List: React.FC = () => {
  return (
    <div className={classes.container}>
      {list.map((item) => {
        return <ListItem work={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
