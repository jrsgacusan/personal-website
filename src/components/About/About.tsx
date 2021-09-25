import React from 'react';
import Layout from '../Layout';
import classes from './About.module.css';
import portrait from '../../assets/portrait.jpg';
import { FaFilePdf } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

const About: React.FC = () => {
  return (
    <Layout>
      <div className={classes.div}>
        <div className={classes.main}>
          <div className={classes['left-content']}>
            <img className={classes.image} src={portrait} alt="Portrait" />
          </div>

          <div className={classes['right-content']}>
            <h1>About Me</h1>
            <div className={classes.dash} />
            <p>
              I am Juel Rei S. Gacusan, 22 yrs. old, a fresh graduate from
              University of the Cordilleras with the Degree of Bachelor of
              Science in Information Technology. Ever since I was in high
              school, I always dreamed of becoming a programmer. To achieve this
              goal, I continuously learn new technologies and best practices for
              developing applications. Aside from programming, I also love
              photography, cinematography, gaming, and vector arts.
            </p>
            <div className={classes.btns}>
              <a
                href="https://drive.google.com/file/d/14cimir5Amn0Lqqvd_U4xJ9w01lWuEqXE/view"
                target="__blank"
              >
                <button className={classes.first}>
                  <FaFilePdf style={{ margin: '0px', marginRight: '2px' }} />
                  Resume
                </button>
              </a>
              <a
                href="https://www.smartr.me/public/profiles/juelrei.gacusan"
                target="__blank"
              >
                <button className={classes.second}>
                  <AiOutlineLink
                    style={{ margin: '0px', marginRight: '2px' }}
                  />
                  Smartr
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
