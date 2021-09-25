import React from 'react';
import classes from './Layout.module.css';

const Layout: React.FC = (props) => {
  return <div className={classes.div}>{props.children}</div>;
};

export default Layout;
