import './PricingCardsStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({ duration: 3000 });

const PricingCards = () => (
  <div className="pricing">
    <h1 className="project-heading">SKILLS</h1>
    <div
      className="card-container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
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
        <h3>- Certificates/Diploma-</h3>
        <span className="bar" />
        <p>Social Service Worker...</p>
        <p>National Association of Career Colleges </p>
        <p>Personal Support Worker/ CCA</p>
        <p>Standard First Aid with CPR/AED Level C.</p>
        <p>Gentle Persuasive Approaches in Dementia Care</p>
        <p>All-In Palliative Care: The Team Approach to LTC</p>
        <p>Work Health and Safety Awareness.</p>
        <p>Workplace Hazardous Materials Information System.</p>
        <p>Integrated Accessibility Standards Regulations.</p>
        <p>Full-stack Software Developer.</p>
        <p>Health Safety and Environment.</p>
        <p>Fashion Designing and Seamstress.</p>
        <p>Desktop Publishing.</p>
        <Link to="/contact" className="btn">
          CONTACT
        </Link>
      </div>
      <div className="card">
        <h3>- Soft Skills-</h3>
        <span className="bar" />
        <p>Communication</p>
        <p>Teamwork</p>
        <p>Time management</p>
        <p>Adaptability</p>
        <p>Empathy</p>
        <p>Conflict resolution</p>
        <p>Critical thinking</p>
        <p>Professionalism</p>
        <p>Problem-solving</p>
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
