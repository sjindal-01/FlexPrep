import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import MealPlans from './pages/MealPlans/MealPlans';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MealPlans />
      <Reviews />
      <ContactUs />
    </div>
  );
}

export default App;
