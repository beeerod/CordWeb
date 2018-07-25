import React from 'react';
import Header from './header';
import Nav from './nav';
import AboutText from './aboutText';
import ContactForm from './contactForm';

const About = () => (
  <div className="row2">
    <Header />
    <section id="content-area">
      <Nav />
      <AboutText />
      <ContactForm />
    </section>
  </div>
);

export default About;
