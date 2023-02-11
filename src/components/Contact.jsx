import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="Contact">
      <div className="Contact__container container">
        <h2 className="Contact__header header">Contact Us Today!</h2>
        <ContactForm />

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
