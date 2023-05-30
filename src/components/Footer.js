import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

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
            <div className="right">
                <h4>About the company</h4>
                <p>
                     Hello, I'm Amara, an experienced software developer who loves
                    creating new and exciting solutions. I have expertise in multiple
                     programming languages and know how to deliver high-quality code
                    while working smoothly with different teams.
                </p>
                <div className="social">
                    <FaFacebook
                        size={30}
                        style={{
                        color: "#fff",
                         marginRight: "1rem",
                        }}
                    />
                    <FaTwitter
                        size={30}
                        style={{
                        color: "#fff",
                        marginRight: "1rem",
                        }}
                    />
                    <FaLinkedin
                        size={30}
                        style={{
                        color: "#fff",
                        marginRight: "1rem",
                        }}
                    />
                </div>
            </div>
        </div>
        
      </div>
  );
};

export default Footer;
