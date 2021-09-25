/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Layout from '../Layout';
import classes from './Hero.module.css';
import me from '../../assets/me.png';
import { useAppDispatch } from '../../store/hooks';
import { modalActions } from '../../store/modal-slice';
import { SiFacebook as Facebook, SiGithub as Github } from 'react-icons/si';
import { RiInstagramFill as Instagram } from 'react-icons/ri';
import { ImLinkedin as Linkedin } from 'react-icons/im';
import { FB_LINK, GITHUB_LINK, INSTA_LINK, LINKEDIN_LINK } from '../../static';

const Hero: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(modalActions.openContactModal());
  };

  return (
    <Layout>
      <div className={classes.div}>
        <div className={classes.main}>
          <div className={classes['left-content']}>
            <h2>Hello</h2>
            <h1>I'm Juel</h1>
            <h3 style={{ marginBottom: '0px' }}>Front End Developer</h3>
            <div className={classes.sns}>
              <a href={FB_LINK} target="__blank">
                <Facebook title="" style={{ margin: '10px' }} />
              </a>
              <a href={INSTA_LINK} target="__blank">
                <Instagram title="" style={{ margin: '10px' }} />
              </a>
              <a href={GITHUB_LINK} target="__blank">
                <Github title="" style={{ margin: '10px' }} />
              </a>
              <a href={LINKEDIN_LINK} target="__blank">
                <Linkedin title="" style={{ margin: '10px' }} />
              </a>
            </div>
            <button onClick={handleOpen}>Contact Me</button>
          </div>
          <div className={classes['right-content']}>
            <img src={me} alt="hero" className={classes.image} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
