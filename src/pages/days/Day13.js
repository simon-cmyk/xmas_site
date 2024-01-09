import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/julebokk.jpg'; 
import React, { useState } from 'react';

function Day13() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Lov, takk og pris i evighet';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Surdeig-Sverre er imponert! Dei var alle start på eit vers`);
    } else {
      setResult(`Svaret er feil. Ørret-Øystein visste at det var: lov, takk og pris i evighet. Dei var alle starten på eit vers`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Trettende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Ein dag som minte om lucia!</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Tors veg 12, 7035 Trondheim</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Alle gutta i Tors veg 12 var fra seg av sorg. No hadde det gått for lang tid. Dei satt alle og deppa i stova. Men, ut av intet kom det plutseleg julemusikk frå ringeklokka. Alle gjekk dei spente til døra. Utafor sto Njords veg i eit praktfullt skue.  </h4>
        <h4>
        Songen traff Torsgutta som alle fekk tårevåte auger frå dei vakre tonane. Sirup-Simon, Banan-Bernardas, Mascarpone-Markus og Grateng-Gunnar. For nokon flotte folk. Sangen varte, men etter elleve vers av "Et barn er født i Betlehem" sa det stopp.
        Dette var eit lyspunkt i ein ellers grå kvardag. "Mi håber at dere finner kanelen deres", kom det fra Mascarpone-Markus. Laban-Leif-Jørgen ville være med, men han valgte Vassfjellet (saman med Sviskekompott-Sigurd). Det kan vel ikkje seiast å være noko sjokk.    
        </h4>
        
        <h2>Apropos "Et barn er født i Betlehem".</h2>
        <h2> Korleis gjeng det ellevte verset? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('Lov, takk og pris i evighet')}>Lov, takk og pris i evighet [...]</li>
            <li onClick={() => handleChoice('rett')}>Guds kjære barn vi ble på ny [...]</li>
            <li onClick={() => handleChoice('rett')}>Fra Saba kom de konger tre [...]</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        
      </div>
    </div>
    <Link to={'/xmas_site/day12'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day14'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day13;