import './FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faMediumM,
  faAngellist,
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
        <a href="https://www.facebook.com/yourprofile">
          <FontAwesomeIcon icon={faFacebook} />
          {' '}
          Facebook
        </a>
        <a href="https://github.com/Amazinggracee">
          <FontAwesomeIcon icon={faGithub} />
          {' '}
          Github
        </a>
        <a href="https://www.linkedin.com/in/amarachi-dimkpa/">
          <FontAwesomeIcon icon={faLinkedin} />
          {' '}
          Linkedin
        </a>
        <a href="https://medium.com/@amazinggracee">
          <FontAwesomeIcon icon={faMediumM} />
          {' '}
          Medium
        </a>
        <a href="https://venture.angellist.com/v/amarachi-dimkpa-1">
          <FontAwesomeIcon icon={faAngellist} />
          {' '}
          Angelist
        </a>
        <a href="https://twitter.com/amazinggraceu">
          <FontAwesomeIcon icon={faTwitter} />
          {' '}
          Twitter
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
          {' '}
          Instagram
        </a>
      </div>
    </p>
  </footer>
);

export default Footer;
