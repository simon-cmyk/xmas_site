import '../App.css';
import { Link } from 'react-router-dom';
import oslo from '../images/oslo.jpg'; 
function Day() {
  return (
    <div className="app">
    <h1 className='title'>Day x</h1>
      <div className="quiz-container">
        <div className="quiz-image">
          <img src={oslo} alt="oslo" className='quiz-image'/>
        </div>
        <div className="quiz-content">
          <h2>Angående de mange land:</h2>
          <p>Hva er hovedstaden i Norge?</p>
          <h2>Alternativer:</h2>
          <ul>
            <li>Paris</li>
            <li>London</li>
            <li>Oslo</li>
          </ul>
        </div>
      </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
}

export default Day;