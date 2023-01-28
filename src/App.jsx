import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScheduleButton from './components/ScheduleButton';
import MainPage from './components/MainPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScheduleButton />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
