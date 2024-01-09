import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/olejohn.jpg'; 
import React, { useState } from 'react';
import Slideshow from '../Slideshow';

function Day15() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = '0';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Han ser kanskje ut som ein, og kjenner seg kanskje ut som ein, men han er ikkje ein Italiener. Bra at du har kontroll.`);
    } else {
      setResult(`Han ser kanskje ut som ein, og kjenner seg kanskje ut som ein, men han er ikkje ein Italiener. Heldigvis har Avocado-Andreas god kontroll på slektstreet til Oste-OleMathias`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Sekstende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>16.12.23, 09:18</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Søråver</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Det er når stormen står på at ein skal halde saman. No var det gått over 16 dagar sidan Torsgutta hadde smakt Kanelens vidunderlege univers. Gutta var sletne og trengte ein ordentlig solkur alle saman. 
        Smørbrød-Silas landa flyet ned i ein vinåker ein plass og saman tok folket buss inn til leiligheita til Oste-OleMatias. Då dei kom fram oppdaga dei at bossdunken utafor flaut over med tomme pizza- og pasta-esker. Gleden var stor og latteren hyppig, då gjengen fekk møtt igjen denne glade rause godkaren. 
         </h4>
        <h4>
         Etter at tidlegare torsgutt Oste-OleMathias og Sukker-Simon fekk diskutert den dårlege sesongen til AAFK, dro dei alle ut på Sightseeing. Mon tro om nokon av dei angra på at dei ikkje valgte utveksling? På kvelden sneik Sukker-Simon og Aprikos-Ane seg ut på date, medan resten testa nattlivet. Denne dagen var ein klar opptur, i ein ellers kald periode.
        </h4>
        <h4>
        Gjengen var nok blitt meir enn berre litt Solbrent etter denne dagen. Og alle gledde dei seg til at Oste-OleMathias skulle vende attende til August :D
        </h4>
        <Slideshow></Slideshow>
        <h2>Apropos Italia</h2>
        <h2> Kor mange prosent Italiensk er Oste-OleMathias? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('0')}>0 %</li>
            <li onClick={() => handleChoice('25')}>25 %</li>
            <li onClick={() => handleChoice('50')}>50 %</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day15'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day17'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day15;