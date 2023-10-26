import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';

const Project = () => (
  <div>
    <NavBar />
    <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
    <Work />
    <PricingCards />
    <Footer />
  </div>
);

export default Project;
