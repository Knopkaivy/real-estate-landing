import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScheduleButton from './components/ScheduleButton';
import ScheduleTour from './components/ScheduleTour';
import MainPage from './components/MainPage';
import './styles/App.css';
import More from './components/More';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScheduleButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/more" element={<More />} />
        <Route path="/schedule" element={<ScheduleTour />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
