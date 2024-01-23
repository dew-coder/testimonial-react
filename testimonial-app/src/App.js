import logo from './logo.svg';
import './App.css';
import review from "./data";
import Testimonials from './components/Testimonials';
import {FaQuoteLeft , FaQuoteRight} from "react-icons/fa";

function App() {
  return (
    <div className="app">

      <div className='heading'>
        <p>
          Our Testimonials
        </p>
      </div>

      <div className='line'></div>

      {/* passing bhut sare riviews */}
      <Testimonials review = {review}/>
      
    </div>
  );
}

export default App;
