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
      text="I'm always interested in hearing about new projects, so if you'd like to chat please get in touch."
    />
    <Form />
    <Footer />
  </div>
);

export default Contact;
