import React from 'react';
import classes from './ListItem.module.scss';
import { Work } from '../../models/Work';

const ListItem: React.FC<{ work: Work }> = (props) => {
  const handeOnClick = (e: any) => {
    window.open(props.work.href, '_blank');
  };

  return (
    <div
      onClick={handeOnClick}
      className={classes.container}
      title={props.work.href}
    >
      <img
        className={classes.image}
        src={props.work.image}
        alt={props.work.title}
      />
      <div className={classes.text}>
        <h1>{props.work.title}</h1>
        <p>{props.work.description}</p>
        <a href={props.work.href} target="__blank">
          <h1 className={classes.view}>{props.work.isPublished? 'View Website': 'View Code'} </h1>
        </a>
      </div>
    </div>
  );
};

export default ListItem;
