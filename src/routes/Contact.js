import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => (
  <div>
    <NavBar />
    <HeroImg2
      heading="Contact."
      text="I am always interested in hearing about new projects and also available for open opportunity in any of my field of learning, so if you'd like to chat please get in touch."
    />
    <Form />
    <Footer />
  </div>
);

export default Contact;
