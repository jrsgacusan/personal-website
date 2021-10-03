import React, { Fragment, useRef } from 'react';

import About from './components/About/About';
import Hero from './components/Hero/Hero';
import ContactForm from './components/Modals/ContactForm';
import Navbar from './components/Navbar/Navbar';
import Timeline from './components/Timeline/Timeline';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';
const App = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  return (
    <Fragment>
      <Navbar
        heroRef={heroRef}
        aboutMeRef={aboutMeRef}
        worksRef={worksRef}
        timelineRef={timelineRef}
      />
      <ContactForm />
      <section ref={heroRef} className="hero">
        <Hero />
      </section>
      <section ref={aboutMeRef} className="about">
        <About />
      </section>
      <section ref={worksRef} className="works">
        <Works />
      </section>
      <section ref={timelineRef} className="timeline">
        <Timeline />
      </section>

      <Footer />
    </Fragment>
  );
};

export default App;
