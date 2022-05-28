import React from "react";
import classes from "./List.module.scss";
import { Work } from "../../models/Work";
import { Button, Card } from "react-bootstrap";

const ListItem: React.FC<{ work: Work }> = ({
  work: { href, image, title, description, isPublished },
}) => {
  const handeOnClick = () => {
    window.open(href, "_blank");
  };

  return (
    <Card className={classes.card} onClick={handeOnClick}>
      <Card.Img className={classes.img} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          {isPublished ? "View Website" : "View Code"}{" "}
        </Button>
      </Card.Body>
    </Card>
  );

  // return (
  //   <div
  //     onClick={handeOnClick}
  //     className={classes.container}
  //     title={props.work.href}
  //   >
  //     <img
  //       className={classes.image}
  //       src={props.work.image}
  //       alt={props.work.title}
  //     />
  //     <div className={classes.text}>
  //       <h1>{props.work.title}</h1>
  //       <p>{props.work.description}</p>
  //       <a href={props.work.href} target="__blank">
  //         <h1 className={classes.view}></h1>
  //       </a>
  //     </div>
  //   </div>
  // );
};

export default ListItem;
