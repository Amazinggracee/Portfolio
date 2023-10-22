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
        Hello, I am Amarachi Dimkpa, a React software Developer. I am a
        proficient software engineer committed to ongoing self-improvement and
        keeping abreast of the latest developments in the industry. I excel in
        dynamic work settings, relishing the opportunity to tackle complex
        problems and consistently surpass customer expectations. My
        contributions to each project encompass adept problem-solving
        abilities, efficient time management, and a strong spirit of
        collaboration within the team.
      </p>
      <Link to="/contact">
        <button className="btn" type="submit">Contact</button>
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
