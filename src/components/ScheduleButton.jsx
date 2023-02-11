import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/ScheduleButton.css';

const ScheduleButton = () => {
  const location = useLocation();
  return (
    <button
      className={`ScheduleButton button button-yellow ${location.pathname.includes(
        'schedule'
      ) && 'ScheduleButton--none'}`}
    >
      <Link to="/schedule">Schedule a Tour</Link>
    </button>
  );
};

export default ScheduleButton;
