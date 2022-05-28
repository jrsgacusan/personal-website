/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "../Layout";
import classes from "./Hero.module.scss";
import me from "../../assets/me.webp";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/modal-slice";
import { SiFacebook as Facebook, SiGithub as Github } from "react-icons/si";
import { RiInstagramFill as Instagram } from "react-icons/ri";
import { ImLinkedin as Linkedin } from "react-icons/im";
import { FB_LINK, GITHUB_LINK, INSTA_LINK, LINKEDIN_LINK } from "../../static";

const Hero: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(modalActions.openContactModal());
  };

  return (
    <Layout>
      <div className={classes.div}>
        <div className={classes.main}>
          <div className={classes["left-content"]}>
            <h1>Hello,</h1>
            <h2>I'm Juel</h2>
            <h3 style={{ marginBottom: "0px" }}>Frontend Engineer</h3>
            <div className={classes.sns}>
              <a href={FB_LINK} target="__blank" aria-label="Facebook link">
                <Facebook title="" style={{ margin: "10px" }} />
              </a>
              <a href={INSTA_LINK} target="__blank" aria-label="Instagram link">
                <Instagram title="" style={{ margin: "10px" }} />
              </a>
              <a href={GITHUB_LINK} target="__blank" aria-label="Github link">
                <Github title="" style={{ margin: "10px" }} />
              </a>
              <a
                href={LINKEDIN_LINK}
                target="__blank"
                aria-label="Linkedin link"
              >
                <Linkedin title="" style={{ margin: "10px" }} />
              </a>
            </div>
            <button onClick={handleOpen}>Contact Me</button>
          </div>
          <div className={classes["right-content"]}>
            <img src={me} alt="hero" className={classes.image} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
