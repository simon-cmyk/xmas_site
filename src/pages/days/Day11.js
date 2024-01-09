import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/Bynesveien_a_forside.jpg'; 
import julekort_bak from '../../images/Bynesveien_b_bakside.png'; 
import React, { useState } from 'react';

function Day11() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'rett';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Det er dei alle sammen!`);
    } else {
      setResult(`Svaret er riktig. Dei er alle riktig`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Ellevte desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>11.12.23, 17:13</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Bynesveien 14, 7015 Trondheim</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
      <img src={julekort_bak} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Safran-Simeon la på bønnespirene på mesterverket sitt. Tenk for ein fin middag han hadde stelt i stand for kjærasten Marengs-Mabel, som var på besøk. Safran-Simeon såg kaldt utover byen. Denne flotte og populære godgutten! Hadde han komt til Norge på grunn av litt Kanel? Var det han som hadde knabbet den? Vi veit ikkje, veit du?  </h4>
        <h4>
        Ute på vannet såg Safran-Simeon ein seilbåt, og den var lasta med Eple-Eivind. Mon tro om han var kald på henda? Inne i stova satt Ingefær-Ingvild og Iskrem-Ingrid og lakerte negler. Kanskje dette var for å skjule kanelpulveret sine avslørende korn.   
        </h4>
        <h4>
          Om ein halvtime var det duket for Settlers of Catan. På gjestelista var det eit kaneltomt kollektiv...
        </h4>
        
        <h2>Apropos Ila.</h2>
        <h2> Kva er ILA? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('rett')}>Eit fengsel</li>
            <li onClick={() => handleChoice('rett')}>Ein bydel i Trondheim</li>
            <li onClick={() => handleChoice('rett')}>Ein infeksiøs lakseanemi</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        
      </div>
    </div>
    <Link to={'/xmas_site/day10'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day12'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day11;