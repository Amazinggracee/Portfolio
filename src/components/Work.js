import './WorkCardStyle.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import WorkCard from './WorkCard';
import projectCardData from './WorkCardData';
import 'aos/dist/aos.css';

AOS.init({ duration: 3000 });

const Work = () => {
  const [likes, setLikes] = useState(() => {
    const localLikes = JSON.parse(localStorage.getItem('likes'));
    return localLikes || Array(projectCardData.length).fill(0);
  });

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  return (
    <div className="work-container" data-aos="fade-up">
      <h1 className="project-heading">Project</h1>
      <div className="project-container" data-aos="fade-up">
        {projectCardData.map((val, index) => (
          <WorkCard
            key={`work-card-${val.id}`} // Using a unique identifier as the key
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            likes={likes[index]}
            handleLike={() => handleLike(index)}
          >
            <div className="btn">
              <button onClick={() => handleLike(index)} type="button">
                Like
              </button>
              <span>
                Likes:
                {' '}
                {likes[index]}
              </span>
            </div>
          </WorkCard>
        ))}
      </div>
    </div>
  );
};

export default Work;
