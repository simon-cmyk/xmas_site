import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/Julekort_Silas_v3.png'; 
import React, { useState } from 'react';

function Day15() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Concorde';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Ja, det har du rett i! Ørret-Øystein legg til at det det var Fransk-Storbritansk og fløy over transatlanteren 26 September 1973.`);
    } else {
      setResult(`Nei, det var nok ikkje det. Det var Concorde. Ørret-Øystein legg til at det det var Fransk-Storbritansk og fløy over transatlanteren 26 September 1973.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Femtende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>15.12.23, 23:18</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Fra det høye</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Det var blitt mørkt. "Hello, this is your captain speaking. We will arrive at Torino sometime tomorrow, but lets enjoy our flight with some christmas music", said Smørbrød-Silas. Vårt fly var lasta med Torsgutta, Aprikos-Ane og den nevnte piloten. No var vi på veg mot ein gammel kjenning, som for tida koser seg nedi Europa. Ein gammal sambuar, som skal komma attende til vår ringe bolig. 
        For kanskje var det dit kanelen hadde komt? Med vår kjære Oste-OleMathias.  
         </h4>
        <h4>
         Flyet herja i snøkaoset. Summen av loops og manøvre gjorde at den stakkars magen til Ørret-Øystein måtte gi opp. Han gav hals utover den fine julegensaren til Avocado-Andreas. Lukta av gammal fisk fylte flyet, men gjengen rydda opp og fortsatte turen vidare.
        </h4>
        <h4>
        
        </h4>
        
        <h2>Apropos fly.</h2>
        <h2> Kva var navnet på det første passasjerflyet som kunne fly raskere enn lyden? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('Boing 737')}>Boing 737</li>
            <li onClick={() => handleChoice('Supersonic')}>Supersonic 333</li>
            <li onClick={() => handleChoice('Concorde')}>Concorde</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        
      </div>
    </div>
    <Link to={'/xmas_site/day14'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day16'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day15;