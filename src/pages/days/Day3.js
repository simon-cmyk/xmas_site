import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/blomster.png'; 
import React, { useState } from 'react';

function Day3() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Sagavoll';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig!"`);
    } else {
      setResult(`Det var dessverre feil. Heldigvis hadde Ørret-Øystein kontroll og visste at det riktige svaret var ${correctAnswer}.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tredje desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Den tredje desember, 15:00</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>På ei frossen Otta (frisbeegolfbane othilienborg)</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Stemninga likna underlaget, frossen. Blikket gjekk fra Avocado-Andreas til Hawaiiburger-Håkon, til Sitron-Sven, til Paella-Per, til Eple-Elias.
        Ingen sa nokon ting. Men dei følte det alle sammen, på mangelen av tillit. Kanskje var det alle gangane Torsgutta hadde slått Blomsterbrødrene. I brettspill,
        volleyball og fotball. Var dette ein hevn? Ein slags sjuk plan om å ta igjen, der som det gjorde mest vondt? Sitron-Sven kremtet, men forstyrrelsen døde ut. 
      </h4>
        <h4>
        No klarte ikkje Sukker-Simon holde ut lenger, og med eit var det kjent, det som alle tenkte på. 
        Var det dokke som tok kanelen vår? BlomsterBrødrene såg fram og tilbake på kvarandre. Etter ei lita pause kom det eit nei fra Hawaiiburger-Håkon.
        Då vart alle letta, og dei tok til å spille diskgolf. Det vart ein fin dag med masse latter og ablegøyer. Kven som vann det treng vi ikkje nevne...
        Men han var ein torsgutt :D
        </h4><br></br>
        <h2>Apropos Blomsterbrødrene:</h2>
        <h2>Hvilken folkehøyskole har dette kollektivet opprinelig rot i? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('Nordfjord')}>Nordfjord fhs</li>
          <li onClick={() => handleChoice('Sagavoll')}>Sagavoll fhs</li>
          <li onClick={() => handleChoice('Helgeland')}>Helgeland fhs</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day2'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day4'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day3;