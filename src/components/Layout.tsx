import React from 'react';
import classes from './Layout.module.scss';

const Layout: React.FC = (props) => {
  return <div className={classes.div}>{props.children}</div>;
};

export default Layout;
