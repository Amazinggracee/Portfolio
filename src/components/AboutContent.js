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
        Hello, I am Amarachi Dimkpa, a React software Developer and a dedicated
        Personal Support Worker (PSW). In addition to my proficiency in software
        engineering,I provide compassionate care, prioritize patient well-being,
        and ensure a supportive environment. I am committed to ongoing
        self-improvement and staying updated with industry advancements. I excel
        in dynamic work settings, tackling complex problems with adept
        problem-solving abilities, efficient time management, and fostering
        collaboration within the team.
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
