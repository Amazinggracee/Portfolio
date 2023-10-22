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
      {projectCardData.map((val, index) => (
        <WorkCard
          key={`work-card-${index}`} // Use a unique key here
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
