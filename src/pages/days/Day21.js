import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/båt.jpeg'; 
import React, { useState } from 'react';

function Day21() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Portugal';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Jau, det stemmer!`);
    } else {
      setResult(`Tja, ikkje som vi veit i alle fall`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tjuefyrste desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>21.12.23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>På veg heim fra Trondheim</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Maistortilla-Marius satt seg i båten. Med seg hadde han berre ein einaste ting: Torsgutta sin kanel. Det skulle verte ein lang rotur heimatt til Kristiansand, men han håpte på at han kunne rekke pinnekjøttet på julaften. 
         </h4>
        <h4>
       På hovudet hadde han tatt på eit håndduk. Dette for å minimere sannsynet for å bli gjenkjent. Guten gliste medan han rodde stille ut fra skansen. Lydnivået var derimot ikkje så stille. Det gjekk i sørlandsviser og koslege julehits ...  
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Maistortilla-Marius</h2>
        <h2>Kva for land reiser han til på nyåret? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('drøm')}>Drømmeland</li>
            <li onClick={() => handleChoice('Portugal')}>Portugal</li>
            <li onClick={() => handleChoice('grønn')}>Grønnland</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day20'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day22'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day21;