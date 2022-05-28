import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Layout from '../Layout';
import List from './List';
import classes from './Works.module.scss';
const Works: React.FC = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <h1> Works </h1>
        <div className={classes['btn-container']}>
          <a
            href="https://github.com/jrsgacusan?tab=repositories"
            target="__blank"
          >
            <button>
              <AiFillGithub style={{ margin: '0px', marginRight: '10px' }} />
              View Github Repository
            </button>
          </a>
        </div>

        <List />
      </div>
    </Layout>
  );
};

export default Works;
