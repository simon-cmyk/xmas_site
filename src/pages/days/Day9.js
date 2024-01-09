import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/svingen.jpg'; 
import React, { useState } from 'react';

function Day9() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Åsa';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Vi er imponerte!`);
    } else {
      setResult(`Sikker? Ørret-Øystein trur at det er Åsa som ikkje er med. Vi også forsåvidt.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Niende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Ein kort dag i desember, 13:13</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>I svingen</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Torsgutta sine kalde kropper forflytta seg roleg mot døra til damene i svingen. No var dei lei av kanelmanglande grøt og kjip julebakst. Gårsdagens utgåtte variant vart kasta på grunn av tvilsam lukt, så no måtte dei finne den straks.</h4>
        <h4>
        Avocado-Andreas slo inn ringeklokka som hang ved siden av døra. Gutane var ordentleg kalde, men ingen åpna. 
        Kvar var den travle og crazy gjengen som bodde her? 
        </h4>
        <h4>
        Amaretti-Andrea var troleg godt i gang med desemberbadet i sjøen, ved skansen. Mariekjeks-Malan sto sikkert på ski i Vassfjellet. Mangosorbet-Maria drev nok på med noe buldring. Mangojuice-Margrethe var nok på brettspillbesøk og Hollandesaus-Helene spelte nok fotball.          
        </h4>
        <h4>For våre frosne karer var det bare å ta fatt på vegen heim. Dei klistra på ein lapp sånn at Damene kunne ta kontakt, i tilfelle dei hadde sett noko.</h4>
        <h2>Apropos julekortet til gjengen.</h2>
        <h2> Kva person er ikkje tilstede i bilete? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('Klara')}>Klara</li>
            <li onClick={() => handleChoice('Marvin')}>Marvin</li>
            <li onClick={() => handleChoice('Åsa')}>Åsa</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to={'/xmas_site/day8'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day10'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day9;