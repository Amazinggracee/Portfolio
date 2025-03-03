import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => (
  <div>
    <NavBar />
    <HeroImg2
      heading="About."
      text=" I am a dedicated Social Service Worker, Personal Support Worker, and Software Developer with a passion for helping people and solving complex problems. With experience in social services and healthcare, I provide compassionate support to individuals in need while upholding ethical standards and integrity. As a software developer, I leverage technology to create innovative solutions that enhance lives and improve efficiency. My diverse skill set allows me to bridge the gap between human services and technology, making a meaningful impact in both fields. I am committed to continuous learning, professional growth, and making a difference in my community."
    />
    <AboutContent />
    <Footer />
  </div>
);

export default About;
