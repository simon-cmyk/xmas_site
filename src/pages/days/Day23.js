import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/simonen.jpg'; 
import React, { useState } from 'react';

function Day23() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'søtgrøt';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Jeps. Du har rett!!`);
    } else {
      setResult(`Nei, den fins faktisk, sier Ørret-Øystein!`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tjuetredje desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>23.12.23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>I Tors Veg 12</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Sukker-Simon var den siste som forlot Torsgutta-kollektivet. Varmeovnane stod på for fullt og lyset likeså, i det Sukker-Simon gløymde å låse huset når han i full fart hasta seg mot bussen. 
        No ventet Karamellkjeks, pinnekjøtt, ribbe, kalkun og mykje meir. Men det var ikkje før om minimum 6 timer.  
         </h4>
        <h4>
        Han gledde seg voldsamt til å komme heim til Sula! Denne vakre bygd som ingen hadde forlat uten å merke den. Og med seg hadde han også Torsgutta sin Kanel. 
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Sula</h2>
        <h2>Kva fjelltur er ikkje å finne på Sula? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('j')}>Lervågsfjellet</li>
            <li onClick={() => handleChoice('j')}>Vardane</li>
            <li onClick={() => handleChoice('søtgrøt')}>Søtgrøthornet</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day22'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day24'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day23;