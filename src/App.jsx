import './styles/App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScheduleButton from './components/ScheduleButton';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScheduleButton />
      <MainPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
