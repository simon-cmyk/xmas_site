import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/osten.jpeg'; 
import React, { useState } from 'react';

function Day20() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'telemark';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Korrekt! Evt. fjellski!`);
    } else {
      setResult(`Prøv igjen"`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tjuande desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>20.12.23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Trollheimen</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Ørret-Øystein var nøgd. Han hadde klart det! Dei andre tullingane hadde ikkje skønt nokon ting. Heile desember hadde dei gått og leita. 
        Ørret-Øystein smilte lurt til seg sjølv. I sekken hadde han bragt med seg Torsgutta sin kanelboks. No sette han snuten mot høyfjellet, der han kunne liggje litt i skjul nokre dagar.  
         </h4>
        <h4>
       På seg hadde han dei kulaste brillene i manns minne! Kanskje gjekk ullskjorta også av ila turen, så han kunne få litt sol på kroppen. 
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Ørret-Øystein</h2>
        <h2>Kva for redskap nyttar han gjerne ned ein snøfull bakke? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('rando')}>Randonneski</li>
            <li onClick={() => handleChoice('telemark')}>Telemarkski</li>
            <li onClick={() => handleChoice('snowboard')}>Snøbrett</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day19'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day21'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day20;