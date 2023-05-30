import React from 'react'
import NavBar from "../components/navBar";
import HeroImg from '../components/HeroImg';
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div className='mother'>
          <NavBar />
      <HeroImg />
      <Footer />
    </div>
  )
}

export default Home