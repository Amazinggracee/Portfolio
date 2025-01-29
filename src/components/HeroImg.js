import './HeroImgStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import IntroImg from '../assets/heroImg.jpg';
import 'aos/dist/aos.css';

AOS.init({ duration: 3000 });

const HeroImg = () => (
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
        Social Service Worker, Full-Stack Software Developer, Personal Support Worker and Seamstress
      </h1>
      <p>
        Hello! My name is Amarachi Dimkpa, and I have a diverse skill set that spans
        across several fields.
        I work as a Social Service Worker, where I support individuals and families,
        helping them navigate challenges and access necessary resources. Alongside this,
        I am a Full-Stack Software Developer, skilled in creating responsive web applications.
        I also work as a Personal Support Worker, providing compassionate care to those in need,
        and as a Seamstress, where I design and create custom garments.
        Each of these roles allows me to make a positive impact in peoples lives,
        whether through direct care, technology,or craftsmanship.
        <p>Let me know if youd like more details on any of these areas!</p>
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

export default HeroImg;
