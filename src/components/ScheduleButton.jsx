import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScheduleButton.css';

const ScheduleButton = () => {
  return (
    <button className="ScheduleButton">
      <Link to="/schedule">Schedule a Tour</Link>
    </button>
  );
};

export default ScheduleButton;
