import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ContactForm.css';

const ContactForm = ({
  date,
  resetDate,
  callFormSubmit,
  resetCallFormSubmit,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const resetFormValues = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    resetFormValues();
    alert('Your request has been submitted. Thank you');
  };
  useEffect(() => {
    if (callFormSubmit) {
      handleSubmit();
      resetCallFormSubmit();
      resetDate();
      navigate('/schedule');
    }
  }, [callFormSubmit]);
  return (
    <form
      action="submit"
      onSubmit={(e) => handleSubmit(e)}
      className="ContactForm"
    >
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="ContactForm__input"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="ContactForm__input"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="ContactForm__input"
      />
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="ContactForm__input"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="1"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="ContactForm__input"
      ></textarea>
      {!location.pathname.includes('schedule') && (
        <input
          type="submit"
          value="Submit"
          className="button button-secondary"
          // onClick={handleSubmit}
        />
      )}
    </form>
  );
};

export default ContactForm;
