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
      <Card.Img className={classes.img} src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          {isPublished ? "View Website" : "View Code"}{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
