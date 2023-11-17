import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const WorkCard = ({
  imgsrc, title, text, view, source, likes, handleLike,
}) => (
  <div className="project-card">
    <img src={imgsrc} alt="capstone" />
    <h2 className="project-title">{title}</h2>
    <div className="pro-details">
      <p>{text}</p>
      <div className="pro-btns">
        <NavLink to={view} className="btn" target="_blank">
          View
        </NavLink>
        <NavLink to={source} className="btn" target="_blank">
          Source
        </NavLink>
        <div className="btn get">
          <button onClick={() => handleLike()} type="button" className="btn">
            Likes:
            {' '}
            {likes}
          </button>
        </div>
      </div>
    </div>
  </div>
);

WorkCard.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired, // Add this line
};

export default WorkCard;
