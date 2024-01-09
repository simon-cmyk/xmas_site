import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/Bagler.jpg'; 
import React, { useState } from 'react';

function Day19() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'ice';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Korrekt! Nokon kallar han heller Ice-Borg`);
    } else {
      setResult(`Svaret var nok "The Ice Man". Nokon kallar han heller Ice-Borg"`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Nittande desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>19.12.23, 19:12:23</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Baglerborgå</h3>
      </div>
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Vårruller og bezzerwizzer hang på tapetet denne dagen. Gutane vart godt tatt imot av Hasselnøtt-Hænrik og samtlege fekk klem. Sjampingjong-Sveinung hadde nytta dagen til å varme opp stova, medan Paprika-Pringles-Peder hadde vorte kjøkkensjef. Karamell-Kristian varta opp med fleire velkomstdikt. Aspartam-Andreas var litt forseinka sidan han utvida joggeturen sin. I etasja over kunne gutane høyre eit valdsamt leven. Slange-Sindre, Soppstuing-Sondre, Makron-Maren og Akkar-Anna jamra laus med singstar så heile huset rista. 
         </h4>
        <h4>
        Heldigvis var maten god. Etterpå vart det dekka på med bezzerwizzer på bordet. På tross av ein skikkeleg innsats av Hasselnøtt-Hænrik og co, vart det seier til dei audmjuke Torsgudane. På veg heim var det mistillit i lufta. Gutane hadde starta å mistenke kvarandre for å ha kidnappa kanelen. 
        </h4>
        <h4>
        
        </h4>
        <h2>Apropos Borg</h2>
        <h2>Kva for kallenavn er ofte brukt på Bjørn Borg? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('ice')}>The Ice Man</li>
            <li onClick={() => handleChoice('sylt')}>Mr. Underpants</li>
            <li onClick={() => handleChoice('Brunost')}>El niño</li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        <br></br>
      </div>
     
    </div>
    <Link to={'/xmas_site/day18'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day20'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day19;