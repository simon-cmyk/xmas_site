import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/blomsterbarna.jpg'; 
import React, { useState } from 'react';

function Day14() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'rett';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Ja, det har du rett i!`);
    } else {
      setResult(`Svaret er feil. Det riktige var blåmeis. Det visste Ørret-Øystein`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Fjortende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>14.12.23, 15:18</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Blåklokkevegen 34, 7050 Trondheim</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Etter gårsdagens vakre tonar, kom Sukker-Simon på at det var eit anna kollektiv som også gjekk julebukk. Kanskje nokon der hadde sett kanelen?
        Litt planlegging seinare, så var ein fellesmiddag i boks. 
         </h4>
        <h4>
          Middagen var dirigert på plass av Sjokoladenisse-Solveig. Smultring-Silje spelte opp til bordvers på pianoet, medan Lakris-Lena og Candycane-Camilla stemte i. Kvelden gjekk fort, og var utruleg koseleg. Vennane koste seg med ein god middag og hadde att på til tid til mykje exploding kittens.
          Tida raste, og det gjekk så fort at gutane ikkje eingang fekk spurt om kanelen.     
        </h4>
        <h4>
        
        </h4>
        
        <h2>Apropos Blomar.</h2>
        <h2> Kva for ein av desse er ikkje ein blom? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('feil')}>Hvitveis</li>
            <li onClick={() => handleChoice('merke')}>Blåveis</li>
            <li onClick={() => handleChoice('rett')}>Blåmeis</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        
      </div>
    </div>
    <Link to={'/xmas_site/day13'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day15'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day14;