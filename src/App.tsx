import { Fragment, useRef } from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import ContactForm from "./components/Modals/ContactForm";
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timeline/Timeline";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import classes from "./scss/App.module.scss";
import Tools from "./components/Tools/Tools";
const App = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  return (
    <Fragment>
      <Navbar
        heroRef={heroRef}
        aboutMeRef={aboutMeRef}
        worksRef={worksRef}
        timelineRef={timelineRef}
      />
      <ContactForm />
      <div className={classes.sections}>
        <section ref={heroRef} className={classes.hero}>
          <Hero />
        </section>
        <section ref={aboutMeRef} className={classes.about}>
          <About />
        </section>
        <section ref={toolsRef} className={classes.tools}>
          <Tools />
        </section>
        <section ref={worksRef} className={classes.works}>
          <Works />
        </section>
        <section ref={timelineRef} className={classes.timeline}>
          <Timeline />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
