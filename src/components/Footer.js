import './FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>
    <p className="footer">
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      All rights reserved.
      <div className="social-media">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
          {' '}
          Facebook
        </a>
        <a
          href="https://github.com/Amazinggracee"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          {' '}
          Github
        </a>
        <a href="https://www.linkedin.com/in/amarachi-dimkpa/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          {' '}
          Linkedin
        </a>
        <a href="https://medium.com/@amazinggracee" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMediumM} />
          {' '}
          Medium
        </a>
        <a href="https://twitter.com/amazinggraceu" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          {' '}
          Twitter
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          {' '}
          Instagram
        </a>
      </div>
    </p>
  </footer>
);

export default Footer;
