import './AboutContentStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.png';
import React2 from '../assets/react2.png';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I'm a react front-end developer. I create responsive secure website
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
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
}

export default AboutContent