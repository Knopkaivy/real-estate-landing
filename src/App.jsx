import './styles/App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScheduleButton from './components/ScheduleButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScheduleButton />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
