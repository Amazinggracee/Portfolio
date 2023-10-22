import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBarStyle.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <div className="logo">
          <img src="../assets/Gold Luxury Business Logo.png" alt="Portfolio" />
        </div>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1TqGawKXFWh6OPFu6o2NonCHW7uT21N3VRY8GephziEA/edit?usp=sharingf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        {click ? (
          <FaTimes
            size={20}
            style={{
              color: '#fff',
            }}
          />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
