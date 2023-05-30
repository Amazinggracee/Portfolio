import './FooterStyles.css';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>DB 35 Reserve Estate</p>
              <p>Port Harcourt, Rivers, Nigeria</p>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
                2348038310102
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
                amara.dimkpa@gmail.com
              </h4>
            </div>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer