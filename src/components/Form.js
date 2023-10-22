import './FormStyle.css';

import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('maykrgwn');
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
