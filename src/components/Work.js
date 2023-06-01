import "./WorkCardStyle.css";
import React from "react";
import WorkCard  from "./WorkCard";
import projectCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
              {projectCardData.map((val, index) => {
                  return (
                      <WorkCard
                          key={index}
                          imgsrc={val.imgsrc}
                          title={val.title}
                          text={val.text}
                          view={val.view}
                          source={val.source}
                      />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
