import './FormStyle.css';

import React from 'react'

// const Form = () => {
    
//   return (
//     <div className="form">
//       <form action="https://formspree.io/f/maykrgwn" method="post">
//         <label>Your Name</label>
//         <input type="text" name='fname' required></input>
//         <label>Email</label>
//         <input type="email" required></input>
//         <label>Subject</label>
//         <input type="text"></input>
//         <label>Message</label>
//         <textarea rows="6" placeholder="Type your message here" required />
//         <button className="btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("maykrgwn");
  if (state.succeeded) {
    return <p className="submission-success">Thanks for contacting me. I will get back to you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </label>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="view-resume-button" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;