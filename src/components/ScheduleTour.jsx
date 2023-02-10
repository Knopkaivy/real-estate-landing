import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/ScheduleTour.css';

const ScheduleTour = () => {
  const navigate = useNavigate();
  return (
    <div className="ScheduleTour">
      <div className="ScheduleTour__container container">
        <nav>
          <button
            type="button"
            className="ScheduleTour__buttonReturn button"
            onClick={() => navigate(-1)}
          >
            <BsChevronLeft className="ScheduleTour__icon" />
            <span>Back</span>
          </button>
        </nav>
        <div className="ScheduleTour__header">
          <h2>Schedule a Tour</h2>
          <p>
            Check out our availability and book the date and time that works for
            you
          </p>
        </div>
        <main className="ScheduleTour__main">
          <div className="ScheduleTour__dateAndTime">
            <h3 className="ScheduleTour__dtHeader">Select a Date and Time</h3>
            <div className="ScheduleTour__dtContainer">
              <div className="ScheduleTour__date">Date</div>
              <div className="ScheduleTour__time">Time</div>
            </div>
          </div>
          <div className="ScheduleTour__detail">
            <h3 className="ScheduleTour__detailHeader">Service Details</h3>
            <div className="ScheduleTour__detailSection">
              <p>Selected Date Appear Here</p>
              <p>Staff Member Name</p>
              <p>1 hr</p>
              <p>Free</p>
            </div>
            <button
              type="button"
              className="ScheduleTour__buttonNext button button-yellow"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScheduleTour;
