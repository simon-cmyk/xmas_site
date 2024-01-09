import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/final_draft.jpg'; 
import React, { useState } from 'react';

function Day10() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Diskoteket';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Grunnen er at lyset ofte blinker. Det må nemnast at han også har ei lavalampe der. Potetkjellaren er Sukker-Simon sin heim.`);
    } else {
      setResult(`Det er nok feil, melder Ørret-Øystein. Namnet "Diskoteket" kjem av at lyset ofte blinker. Det må nemnast at han også har ei lavalampe der. Potetkjellaren er Sukker-Simon sin heim.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tiande desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>10.12.23, 7:13</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Tilbake i tors veg 12</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        "Du har sikkert brukt han opp på grauten din!" Blikket til Avocado-Andreas var av jern, og i augene hans var det flammer. "Nei du har sikkert kasta han med eit uhell", snerret Ørret-Øystein tilbake. "Ka om det kan vere Maistortilla-Marius, han bruka å vere ganske distre", foreslo Sukker-Simon.</h4>
        <h4>
        "Den 25.November såg eg at du tok han inn på rommet ditt". Ørret-Øystein var nok ein gang under angrep. "Og du da Avocado-Andreas? Du har han jo også med ned av og til", lød svaret. Men begge to var dei fullt klar over at kjellarguten Avocado-Andreas aldri ville spise mat nede på rommet sitt. Det var det nemleg alt for kaldt til. 
        </h4>
        <h4>
         Raseriet hos gutane hadde vekse seg stort. No kunne det smelle kvart øyeblikk. Plutseleg byrja det å dirre i lommo til Ørret-Øystein, og snart sto "Call me maybe" på for fullt på kjøkkenet. Den vesle mannen vart nok litt pinlig berørt, men svarte anropet. På den andre sida var Mangosorbet-Maria.
         "Hei, Jeg så lappen dere la igjen, og så ville jeg bare si at jeg nylig var hos Safran-Simeon, og der luktet det veldig kanel!" 
        </h4>
        
        <h2>Apropos Torsgutta.</h2>
        <h2> Kva er rommet til Avocado-Andreas kalt på folkemunne? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('Lavalampe-stua')}>Lavalampe-stua</li>
            <li onClick={() => handleChoice('Potetkjellaren')}>Potetkjellaren</li>
            <li onClick={() => handleChoice('Diskoteket')}>Diskoteket</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day9'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day11'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day10;