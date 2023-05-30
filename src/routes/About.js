import React from 'react';
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="About." text="I'm a friendly Full-stack Developer."  />
      <Footer />
    </div>
  );
}

export default About