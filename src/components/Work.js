import './WorkCardStyle.css';
import React from 'react';
import AOS from 'aos';
import WorkCard from './WorkCard';
import projectCardData from './WorkCardData';
import 'aos/dist/aos.css';

AOS.init({ duration: 3000 });

const Work = () => (
  <div className="work-container" data-aos="fade-up">
    <h1 className="project-heading">Project</h1>
    <div className="project-container" data-aos="fade-up">
      {projectCardData.map((val) => (
        <WorkCard
          key={`work-card-${val.id}`} // Using a unique identifier as the key
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          source={val.source}
        />
      ))}
    </div>
  </div>
);

export default Work;
