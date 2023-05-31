import React from 'react'
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';

const Project = () => {
  return <div >
    <NavBar />
    <HeroImg2 heading = "PROJECTS." text = "Some of my most recent works"/>
    <PricingCards />
    <Footer />
  </div>;
}

export default Project