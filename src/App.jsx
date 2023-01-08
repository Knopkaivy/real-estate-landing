import './styles/App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
