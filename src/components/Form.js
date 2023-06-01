import './FormStyle.css';

import React from 'react'

const Form = () => {
    
  return (
    <div className="form">
      <form action="https://formspree.io/f/maykrgwn" method="post">
        <label>Your Name</label>
        <input type="text" name='fname' required></input>
        <label>Email</label>
        <input type="email" required></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" required />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form