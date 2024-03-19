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
        Full-Stack Software Developer
      </h1>
      <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        Hello, I am Amarachi Dimkpa, a React software Developer and a dedicated
        Personal Support Worker (PSW). In addition to my proficiency in software
        engineering,I provide compassionate care, prioritize patient well-being,
        and ensure a supportive environment. I am committed to ongoing
        self-improvement and staying updated with industry advancements. I excel
        in dynamic work settings, tackling complex problems with adept
        problem-solving abilities, efficient time management, and fostering
        collaboration within the team.
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
