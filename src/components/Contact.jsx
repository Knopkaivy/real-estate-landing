import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
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

  const handleFormSubmit = () => {
    let formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    console.log(formData);
    resetFormValues();
  };

  return (
    <div className="Contact">
      <div className="Contact__container container">
        <h2 className="Contact__header">Contact Us Today!</h2>
        <form
          action="submit"
          onSubmit={handleFormSubmit}
          className="Contact__form"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="Contact__formInput"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="Contact__formInput"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="Contact__formInput"
          />
          <input
            type="email"
            // required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Contact__formInput"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="1"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="Contact__formInput"
          ></textarea>
          <input type="submit" value="Submit" className="button-secondary" />
        </form>
        <div className="Contact__info">
          <div>
            Email: <span>info@mysite.com</span>
          </div>
          <div>
            Tel: <span>123-456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
