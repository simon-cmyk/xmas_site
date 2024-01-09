import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/nye.jpg'; 
import React, { useState } from 'react';

function Day17() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Ovn';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Murbra jobba!`);
    } else {
      setResult(`Er nok feil, men også veldig forståelig! Ørret-Øystein visste at det var "ovn"`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Syttende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>17.12.23, 18:18</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Down-under</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Torsgutta kryssa nok ein gang landegrenser. No var dei komt seg til Australia. Alle saman hadde dei jet-lag, men var gira på å finne på mykje gøy!
        Tilstede var også dei kommande Torsgutta Tricolor-Torger og Mandel-Martin. I tillegg hadde Orrhane-Olav også stilt opp, for å finne på sprell! Dagen var fullstappa og variert, men når det kom til kvelden hadde ingen energi til å fortelle om den! Så du lyt heller spørre nokon av dei, dersom du vil finne ut kva dei gjorde. 
         </h4>
        <h4>
      
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Torsguttlærlingane (begge er dei jærbu)</h2>
        <h2>Kva betyr "ogen"? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('0')}>Æg vil ha ein til</li>
            <li onClick={() => handleChoice('25')}>Det er tilbehør til <a href='https://www.nrk.no/video/farse-til-folket_4354e27f-31dc-410c-b625-3e1380d11ac0'>Farse</a></li>
            <li onClick={() => handleChoice('Ovn')}>Ovn</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day16'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day18'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day17;