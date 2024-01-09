import '../../App.css';
import { Link } from 'react-router-dom';
import torsoppe from '../../images/Fra Tornardos.png'; 
import React, { useState } from 'react';

function Day1() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = '89';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret var riktig, 3/4 fysmattere bor oppe og 4/5 kybbere (+ 1 bygg) nede ifølge Ørret-Øystein`);
    } else {
      setResult(`Det var dessverre feil, vi er ${correctAnswer}% sivinger. 3/4 fysmattere bor oppe og 4/5 kybbere (+ 1 bygg) nede ifølge Ørret-Øystein`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Første desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Den aller første desember, 09:05</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>I ei vakker men kald leiligheit på Nardo (Tors veg 12 2 etg.)</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={torsoppe} alt="trondheim" className='quiz-image' />
        <br></br>
      </div>
        Det er krik sin julefest ikveld, og gutane måtte stryke skjorter, alle som ein.
        Ettersom tida var knapp, gjekk dei kanelsultne torsgutta opp til dei nærmaste naboane, nemleg Tornardos.
        Da Avokado-Andreas åpna døra vart han møtt av ein syngande Nellik-Nikolai, ein dansande Muskat-Mathias, ein humrande Honning-Henning og 
        ein alvorlig Muscovadosukker-Markus. Har dykk sett nokon mogleg tjuvrad, som har broten seg inn i heimen vår, me har mista kanelen, hutra Surdeig-Sverre.
      </h4>
        <h4>
          Eg såg ein mørk skygge i hu og hast mot Friggs veg, kom det kontant frå Muscovadosukker-Markus. Gutane var sjokkerte, men måtte tilbake til skjortestrykinga. 
          Håper at det er den einaste strykinga dei treng å gjere i år. 
        </h4><br></br>
        <h2>Apropos Tors veg 12:</h2>
        <h2>kor høg andel sivingstudenter bor det i huset vårt? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('89')}>89%</li>
          <li onClick={() => handleChoice('22')}>22%</li>
          <li onClick={() => handleChoice('56')}>56%</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day2'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day1;