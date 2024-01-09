import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/sykkel.jpg'; 
import React, { useState } from 'react';

function Day22() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'j';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Sånn er det bare!`);
    } else {
      setResult(`Sånn er det bare!`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tjueandre desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>22.12.23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>På sykkeltur</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Ny dag og ny torsgutt på rømmen! Surdeig-Sverre hadde og med seg kanelen til Torsgutta. Dette byrjar å lukte rart av. Han sykla for harde livet for å komme seg langt vekk, før dei andre fant ut av kva han hadde stjelt. Medan han humpa seg ned ein bratt bakke, undra han på kvifor ingen hadde fatta mistanke. Dei dyktige er ofte heldig, tenkte Surdeig-Sverre.  
         </h4>
        <h4>
        No var det berre to dagar til julaften, men Surdeig-Sverre kunne ikkje slappe heilt av enda. 
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Surdeig-Sverre</h2>
        <h2>Er han ein av dei som går i shorts for ofte? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('j')}>Jepp</li>
            <li onClick={() => handleChoice('j')}>Ja</li>
            <li onClick={() => handleChoice('j')}>Definitivt</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day21'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day23'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day22;