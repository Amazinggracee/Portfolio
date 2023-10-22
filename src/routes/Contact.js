import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => (
  <div>
    <NavBar />
    <HeroImg2 heading="Contact." text="Let's have a chat." />
    <Form />
    <Footer />
  </div>
);

export default Contact;
