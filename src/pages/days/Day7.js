import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/ny-koselig.jpeg'; 
import React, { useState } from 'react';

function Day7() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = '110';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig, og ganske utrolig"`);
    } else {
      setResult(`Det var dessverre feil, men Maistortilla-Marius har vore i dyreparken mang ein gong, og veit at svaret er 110 Liter`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Sjuande desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Ein kald dag, 15:47</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Paul Fjermstads veg 52</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Tenk om det kunne være Peanøtt-Peter, ein som alle i huset såg sånn opp til. For eit svik. Utafor huset hadde Paul-gjengen fyrt opp ei bålpanne. Sirupsnipp-Sander, Troika-Tobias, Julekake1-Jonas og Julekake2-Jørgen smilte alle brett. Han siste kunne vi ikkje navnet til, og det hadde gått for lang tid, så vi turte ikkje å spørre.      </h4>
        <h4>
        Den konflikskye-Sukker-Simon gjekk på do, medan resten av gruppa konfronterte Peanøtt-Peter med gårsdagens observasjon. Gutane vart uletta då dei fant ut at det var ein kamel Peanøtt-Peter hadde hatt med seg på joggetur. Sjølvsagt var det ikkje ein ekte kamel, men ein kosebamse-kamel.   
        </h4>
        <h4>
       Sukker-Simon kom tilbake til gruppa, men alle Torsgutta måtte straks dra heim igjen, siden gjengen i Paul si gate skulle på kveldskjøring i Vassfjellet.
        </h4>
        <h2>Apropos Kameler</h2>
        <h2> Kor mykje vann kan dei drikke på 10 minutter? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('34')}>34 Liter</li>
          <li onClick={() => handleChoice('22')}>22 Liter</li>
          <li onClick={() => handleChoice('110')}>110 Liter</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day6'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day8'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day7;