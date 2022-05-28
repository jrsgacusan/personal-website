import React from "react";
import Layout from "../Layout";
import classes from "./About.module.scss";
import portrait from "../../assets/portrait.webp";
import { AiOutlineLink } from "react-icons/ai";
import { ABOUT_ME, LINKEDIN_LINK } from "../../static";

const About: React.FC = () => {
  return (
    <Layout>
      <div className={classes.div}>
        <div className={classes.main}>
          <div className={classes["left-content"]}>
            <img className={classes.image} src={portrait} alt="Portrait" />
          </div>

          <div className={classes["right-content"]}>
            <h1>About Me</h1>
            <div className={classes.dash} />
            <p>{ABOUT_ME}</p>
            <div className={classes.btns}>
              <a href={LINKEDIN_LINK} target="__blank">
                <button className={classes.second}>
                  <AiOutlineLink
                    style={{ margin: "0px", marginRight: "2px" }}
                  />
                  LinkedIn
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
