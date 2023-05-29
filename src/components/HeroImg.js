import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../assets/heroImg.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="hero" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h1>React Developer </h1>
        <div>
          <Link to="/project" className="btn ">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg