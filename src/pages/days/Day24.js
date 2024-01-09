import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/andysurf.jpg'; 
import React, { useState } from 'react';
import Slideshow2 from '../Slideshow2';

function Day24() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'riktig';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Ja, og mange av dei!`);
    } else {
      setResult(`Nei, dessverre ikkje, seier Sukker-Simon!`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Julaften</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>24.12.23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>På jæren</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
       Avokado-Andreas heiv seg på bølga! Inne på stranda låg kanelen til Torsgutta. Du undrer kanskje korleis det kan ha seg at alle torsgutta stjal med seg kvar sin Kanelboks.
       Jo, og forklaringa skal du få her. Kaneltrøbbelet starta allerede mange månader før jul. Kvar og ein av dei snille gutane hadde dei kjøpt kanel på Torsguttas regning, for så å gøyme det bort for seg sjølv. Ørret-Øystein låste kanelen inne i skapet sitt på Tyholt.
       Maistortilla-Marius hadde han i treningsbaggen sin. Surdeig-Sverre gøymde den inne i Surdeig-starteren sin. Avokado-Andreas gravde han ned i jorda til avokadoplanten sin. Og Sukker-Simon, han hadde den bare laust i skoffa si.  
         </h4>
        <h4>
        Tusen takk for at du fulgte ferden til dei staute gutane. Vi ynskjer dokke alle ein riktig god jol!
        </h4>
        <h4>
        </h4>
        <h2>Apropos Torsgutta</h2>
        <h2>Kva dyr har vi? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('j')}>Katt og hund</li>
            <li onClick={() => handleChoice('j')}>Akvariumfisk</li>
            <li onClick={() => handleChoice('riktig')}>Hybelkaniner</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
        <Slideshow2></Slideshow2>
      </div>
     
    </div>
    <Link to={'/xmas_site/day23'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
}

export default Day24;