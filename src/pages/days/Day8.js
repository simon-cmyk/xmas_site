import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/Lillemor.png'; 
import React, { useState } from 'react';

function Day8() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Trolltunga';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Visste du også at Tom Cruise har vært i Norge`);
    } else {
      setResult(`Det var litt skuffande. Svaret var Trolltunga. Det visste Ørret-Øystein.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Åttande desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Nok ein kald dag, 17:00</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Valentinlystvegen 9</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Bossmiddag-Bendik kasta fellesmiddagen ned i bosspannet. Deretter tok han det opp igjen og gjorde den fin før den skulle serverast til fellesmiddagen. Gratis middag var noko dei alle likte. Speilegg-Sverre tok fram kamera og knipset eit bilete før resten av gjengen ankom bordet. Syltetøy-Sina og Nugatti-Nancy hasta seg fram og satte seg fornøgde til bords. Da mangla det berre ein til spisar.       </h4>
        <h4>
        Nett som fenriken i Kompani lauritsen, kom det ein majestetisk skapning gjennom døra, i form av Eddik-Edvard. Han hadde eit mesterleg skjegg og ei flott holdning. Blikket hans var festa rett framover. Han dro ut stolen, men idet han skulle til å sette seg, ringte det på døra. Eddik-Edvard skar ein grimase, sånn som berre han kan. 
        </h4>
        <h4>
        Dei gjekk alle mot døra, og lukka den rolig opp. "Hei, jeg bare lurte på om dere har tatt vår kanel", spurte Surdeig-Sverre fint. Det var stille i det som føltes som 10 sekund, før Bossmiddag-Bendik snudde seg raskt.
        Han sprang inn på kjøkkenet, dro handa ned i bossbøtta og tok opp ein utgått kanelboks. "Håper det smaker", sa Bossmiddag-Bendik hyggeleg.
        </h4>
        <h2>Apropos Julekortbilete til denne flotte gjengen.</h2>
        <h2> Kvar står dei? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('Burmaklippen')}>Burmaklippen</li>
          <li onClick={() => handleChoice('Trolltunga')}>Trolltunga</li>
          <li onClick={() => handleChoice('Kjeragbolten')}>Kjeragbolten</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day7'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day9'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day8;