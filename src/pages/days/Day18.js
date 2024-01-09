import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/gjengen.jpg'; 
import React, { useState } from 'react';

function Day18() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'Brunost';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Det var godt! Du må berre komme til oss på vaffelkveld. Brunosten legges med fordel heime.`);
    } else {
      setResult(`Smaken er som baken, men ikkje ta med brunosten til oss!"`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Attende desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>18.12.23, 18:12:23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Karsevegen 16</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
       Vel heim i Noreg og Trondheim låg gutane som slakt på sofaen. "Hekkan, vi skulle jo på vafler hos Ananas-Andrea ikveld", sa Avocado-Andreas. Dei mannlege menna såg fortvilt på kvarandre i nokre få sekund, så fòr dei alle kvar til sitt. To minutt seinare var alle gått på do, kledd og klar.
         </h4>
        <h4>
        Varmen var høg og stemninga kos når gjestane inntok stua. Skolebrød-Sigurd satte på litt te, så var preiken igang. Det vart prata om stort og smått. Praten tok også vegen innom kanelmangelen som hadde prega gutane. 
        Spesielt var det ein ting som satt seg ekstra fast i det vesle hovudet til Sukker-Simon denne kvelden. Ananas-Andrea hadde nemleg komt med ein interresant kommentar. "Men hvis dere har leita så møe, men ikkje funni han. Tenk hvis det er noen av dere sjølv."  
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos vafler</h2>
        <h2>Kva er ikkje godt på vafler? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('sugar')}>Rein sukker</li>
            <li onClick={() => handleChoice('sylt')}>Syltetøy og is</li>
            <li onClick={() => handleChoice('Brunost')}>Brunost</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day17'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day19'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day18;