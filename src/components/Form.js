import './FormStyle.css';
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 3000 });

function Form() {
  const [state, handleSubmit] = useForm('maykrgwn');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // Initialize error state

  // Define the isValid function before using it
  const isValid = (value) => {
    // Regular expression for validating email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the email matches the pattern and is in lowercase
    return emailPattern.test(value) && value === value.toLowerCase();
  };

  useEffect(() => {
    // Load data from local storage on component mount
    const savedData = JSON.parse(localStorage.getItem('savedData'));
    if (savedData) {
      setName(savedData.name || '');
      setEmail(savedData.email || '');
      setMessage(savedData.message || '');
    }
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!isValid(email)) {
      // Set an error message when the email is not valid
      setError('Invalid email address. Please enter a valid lowercase email.');
      return;
    }

    // Submit the form if validation is successful
    const submission = await handleSubmit();
    if (submission.ok) {
      // Form submitted successfully, clear local storage
      localStorage.removeItem('savedData');
    }
  };

  useEffect(() => {
    // Save data to local storage whenever form values change
    const savedData = { name, email, message };
    localStorage.setItem('savedData', JSON.stringify(savedData));
  }, [name, email, message]);

  return (
    <form onSubmit={handleFormSubmit} data-aos="fade-up">
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="email">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea
        id="message"
        name="message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {error && <p className="error-message">{error}</p>}

      <button
        type="submit"
        className="view-resume-button"
        disabled={state.submitting}
        title="Submit button"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
