import React from 'react';
import { SOURCE_CODE_LINK } from '../../static';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes['left-content']}>
          © 2021-2021 Juel Rei Gacusan
        </div>
        <div className={classes['right-content']}>
          <a href={SOURCE_CODE_LINK} rel="noreferrer" target="_blank">
            Website Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
