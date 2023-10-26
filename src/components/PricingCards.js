import './PricingCardsStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PricingCards = () => (
  <div className="pricing">
    <h1 className="project-heading">SKILLS</h1>
    <div className="card-container">
      <div className="card">
        <h3>- FrontEnd-</h3>
        <span className="bar" />
        <p>React</p>
        <p>Redux</p>
        <p>Html</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Figma</p>
        <Link to="/contact" className="btn">
          CONTACT
        </Link>
      </div>

      <div className="card">
        <h3>- BackEnd and Testing -</h3>
        <span className="bar" />
        <p>Bootstrap</p>
        <p>RSPec</p>
        <p>Ruby on Rails</p>
        <p>PostgreSQL</p>
        <p>Jest</p>
        <p>Capybara</p>
        <Link to="/contact" className="btn">
          CONTACT
        </Link>
      </div>

      <div className="card">
        <h3>- Other Professional Skills-</h3>
        <span className="bar" />
        <p>Git, GitHub</p>
        <p>Heroku, Netlify</p>
        <p>Code Reviewer</p>
        <p>Remote Pair-Programming</p>
        <p>Mentoring, Teamwork</p>
        <p>Dev Tools</p>
        <Link to="/contact" className="btn">
          CONTACT
        </Link>
      </div>
    </div>
  </div>
);

export default PricingCards;
