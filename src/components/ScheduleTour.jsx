import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, getDay, setHours, setMinutes, subDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/ScheduleTour.css';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleTour = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
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
              <div className="ScheduleTour__date">
                <DatePicker
                  className="ScheduleTour__datePicker"
                  selected={startDate}
                  showTimeSelect
                  minDate={subDays(new Date(), 0)}
                  maxDate={addDays(new Date(), 30)}
                  showDisabledMonthNavigation
                  minTime={setHours(setMinutes(new Date(), 0), 9)}
                  maxTime={setHours(setMinutes(new Date(), 0), 17)}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  filterDate={isWeekday}
                  filterTime={filterPassedTime}
                  placeholderText="Select Date and Time"
                  timeIntervals={60}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
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
