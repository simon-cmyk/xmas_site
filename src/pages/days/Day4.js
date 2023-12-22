import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/ribbe.png'; 
import React, { useState } from 'react';

function Day4() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'en som skitner seg til';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig! Du kan din trøndersk"`);
    } else {
      setResult(`Det var dessverre feil. Heldigvis er Østers-Øystein trønder og visste at svaret var ${correctAnswer}.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Fjerde desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>desemberdag nr 4, 17:30</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Gatelangs i byen</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Gutane var rådville. Fire heile dagar utan kanel! Dette var horribelt. Gutane gjekk langs Elgseter for å leite etter spor. 
        Då slo det plutseleg Maistortilla-Marius at Østers-Øystein og Torske-Trygve bodde rett i nærleiken. Dette var tvilsame karar, og det lukta rotten fisk lang veg.     
      </h4>
        <h4>
        Vel inne i "akvariet" til Torske-Trygve og Østers-Øystein kom fem skeptiske karer. Gjestfriheita var derimot heilt etter boka, og vertene gjorde i stand eit skikkeleg festmåltid. Den kanelfrie ribba blei grilla for å oppnå deilig, sprø svor. 
        Torsgutta stilte seg spørjande til Østers-Øystein sitt "Kiss the cook" forklede, men vart glad da dei fekk grønt lys for å leite etter kanelen.  
        </h4>
        <h4>
            Men, det vart ikkje som i "Prinsessa som ingen kunne målbinde". Alt gutta fant var sju gram økologisk kanel fra Påskeøya, til ein skammeleg høg pris. 
            Som om dette ikkje var nok, tok det jammen meg til å brenne i den vesle leiligheita. "Ribba vår", hylte Torske-Trygve. "Det herre blir itt rare greian, kom dokk hjem"  
        </h4>
        <h2>Apropos Trøndere:</h2>
        <h2> hva betyr "Råsslagadaill"? Velg ein av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('storkar')}>En storkar</li>
          <li onClick={() => handleChoice('en som kjører fort med bil')}>En som kjører for fort med bil</li>
          <li onClick={() => handleChoice('en som skitner seg til')}>En som lett skitner seg til</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
}

export default Day4;