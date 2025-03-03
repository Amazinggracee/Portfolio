import './AboutContentStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import React1 from '../assets/react1.png';
import React2 from '../assets/react2.png';
import 'aos/dist/aos.css';

AOS.init({ duration: 3000 });

const AboutContent = () => (
  <div className="about">
    <div className="left">
      <h1>Who Am I</h1>
      <p data-aos="fade-right">
        Hello, I am Amarachi Dimkpa—a skilled React Software Developer,
        dedicated Social Service Worker, and compassionate Personal Support Worker.
        With expertise in software engineering,
        I build innovative solutions while also providing exceptional
        care and support to individuals in need. I am committed to continuous
        learning, staying updated with industry advancements,
        and excelling in dynamic environments. My strengths lie in problem-solving,
        time management, and fostering collaboration within teams. Passionate about making a
        positive impact, I strive to create meaningful change in both technology
        and social services.
        Lets work together to make the world a better place!
      </p>
      <Link to="/contact">
        <button className="btn" type="submit">
          Contact
        </button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={React1} className="img" alt="true" />
        </div>
        <div className="img-stack bottom">
          <img src={React2} className="img" alt="true" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutContent;
