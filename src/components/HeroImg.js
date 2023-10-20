import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../assets/heroImg.jpg';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 3000 });

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="hero" />
      </div>
      <div className="content">
        <h1
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Full-Stack Software Developer
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Hello, I am Amarachi Dimkpa, a software Developer. I am a proficient
          software engineer committed to ongoing self-improvement and keeping
          abreast of the latest developments in the industry.
        </p>

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