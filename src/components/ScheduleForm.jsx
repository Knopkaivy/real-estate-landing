import React, { useState } from 'react';
import '../styles/ScheduleForm.css';

const ScheduleForm = ({ date, resetDate }) => {
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
    resetDate();
  };
  return (
    <React.Fragment>
      <form
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        className="ScheduleForm"
      >
        <div className="ScheduleTour__dateAndTime">
          <h3 className="ScheduleTour__dtHeader">Fill Out Your details</h3>
          <div className="ScheduleForm__inputContainer">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="ScheduleForm__input"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="ScheduleForm__input"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="ScheduleForm__input"
            />
            <input
              type="email"
              required
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ScheduleForm__input"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="1"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="ScheduleForm__input"
            ></textarea>
          </div>
        </div>
        <div className="ScheduleForm__detail">
          <h3 className="ScheduleTour__detailHeader">Service Details</h3>
          <div className="ScheduleTour__detailSection">
            <p>{date.toLocaleString('en-US')}</p>
            <p>1 hr</p>
            <p>Free</p>
          </div>
          <input
            type="submit"
            className="ScheduleTour__buttonNext button button-yellow"
            value="Submit"
          ></input>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ScheduleForm;
