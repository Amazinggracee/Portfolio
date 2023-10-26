import './HeroImg2Styles.css';
import React from 'react';
import PropTypes from 'prop-types';

function HeroImg2({ heading, text }) {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

HeroImg2.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeroImg2;
