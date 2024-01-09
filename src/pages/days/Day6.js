import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/God.jpg'; 
import React, { useState } from 'react';

function Day6() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'rett';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig! Ørret-Øystein legg til at to svar var riktig. Han var både hjerna bak tungtvannsaksjonen og kjemiker og professor"`);
    } else {
      setResult(`Det var dessverre feil. Ørret-Øystein legg til at to svar var riktig. Han var både hjerna bak tungtvannsaksjonen og kjemiker og professor`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Sjette desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Ein dag i desember, 16:15</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Ei fint pynta leiligheit i Leif Tronstads veg</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Etter den skumle gårsdagen skulle det bli mykje hyggelegare å dra på besøk til damene i Leif Tronstads veg. Lite visste gutane våre om kva som skulle møte dei, før den avtalte lunsjen.
        I trappa opp til den vesle leiligheita stod det to malingspann bundet med tau. Dørhåndtaket var glovarmt, og i gangen var det slengt eit strykejern. 
      </h4>
        <h4>
        Aprikos-Ane hadde vore "alene hjemme" no igjen, og fellane låg klare. Rett etter at gutane var innlosjert i stova, kom også Stjernefrukt-Sylvelin og Rødbet-Regine inn i varmen. Det vart servert tyttebærpai og spelt "black-stories". Rødbet-Regine og Ørret-Øystein satt ekstra pris på jule-kaffien, som var brent for høve.  
        </h4>
        <h4>
        Men Torsgutta kom ikkje bare for kos og hygge, dei ville også finne ut av kva som hadde skjedd med kanelen deira.
        Damene tenkte ei stund, og blei stille. Plutseleg gjekk det opp for Stjernefrukt-Sylvelin. Ho hadde oppdaga at Peanøtt-Peter sprang forbi i ei voldsam fart, medan han sang på "a thousand miles". I handa hadde han hatt noko som kunne minne om ein kanelboks. 
        Gutta var sjokkerte, og sinte. 
        </h4>
        <h2>Apropos Leif Tronstad</h2>
        <h2> Kven var han? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('rett')}>Kjemiker og Professor ved NTH</li>
          <li onClick={() => handleChoice('rett')}>Hjerna bak Tungtvannsaksjonen</li>
          <li onClick={() => handleChoice('feil')}>Han fantes ikke på ekte</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day5'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day7'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day6;