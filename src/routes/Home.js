import React from 'react'
import NavBar from "../components/navBar";
import HeroImg from '../components/HeroImg';
import Footer from "../components/Footer";
import Work from '../components/Work';

const Home = () => {
  return (
      <div className='mother'>
          <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home