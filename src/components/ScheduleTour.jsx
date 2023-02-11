import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, getDay, setHours, setMinutes, subDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import ContactForm from './ContactForm';
import '../styles/ScheduleTour.css';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleTour = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [callFormSubmit, setCallFormSubmit] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleClickButtonReturn = () => {
    if (isFormOpen) {
      setIsFormOpen(false);
    } else {
      navigate(-1);
    }
    return;
  };

  const resetCallFormSubmit = () => {
    setCallFormSubmit(false);
  };
  const resetDate = () => {
    setStartDate(null);
    setIsFormOpen(false);
  };

  return (
    <div className="ScheduleTour">
      <div className="ScheduleTour__container container">
        <nav>
          <button
            type="button"
            className="ScheduleTour__buttonReturn button"
            onClick={handleClickButtonReturn}
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
          <section className="ScheduleTour__dateAndTime">
            <h3 className="ScheduleTour__dtHeader">
              {isFormOpen ? 'Fill Out Your details' : 'Select a Date and Time'}
            </h3>
            {isFormOpen ? (
              <ContactForm
                date={startDate}
                resetDate={resetDate}
                callFormSubmit={callFormSubmit}
                resetCallFormSubmit={resetCallFormSubmit}
              />
            ) : (
              <DatePicker
                className="ScheduleTour__datePicker"
                inline={true}
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
            )}
          </section>
          <div className="ScheduleTour__detail">
            <h3 className="ScheduleTour__detailHeader">Service Details</h3>
            <div className="ScheduleTour__detailSection">
              <p>
                {startDate === null || startDate.getHours() === 0
                  ? 'Select Date and Time'
                  : startDate.toLocaleString('en-US')}
              </p>
              <p>1 hr</p>
              <p>Free</p>
            </div>
            {isFormOpen ? (
              <button
                type="button"
                className="ScheduleTour__buttonNext button button-yellow"
                onClick={() => setCallFormSubmit(true)}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="ScheduleTour__buttonNext button button-yellow"
                onClick={() => setIsFormOpen(true)}
              >
                Next
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScheduleTour;
