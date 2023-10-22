import './WorkCardStyle.css';
import React from 'react';
import WorkCard from './WorkCard';
import projectCardData from './WorkCardData';

const Work = () => (
  <div className="work-container">
    <h1 className="project-heading">Project</h1>
    <div className="project-container">
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
