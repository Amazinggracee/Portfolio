import React from 'react';
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2'; 
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="About."
        text=" Full-stack Developer with a strong passion for technology and a dedication to delivering exceptional web applications and solutions. My background includes expertise in both front-end and back-end development, allowing me to create well-rounded and efficient digital experiences."
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About