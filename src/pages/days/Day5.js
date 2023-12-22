import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/berg.jpeg'; 
import React, { useState } from 'react';

function Day5() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'laget';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig! Kanskje du har vært der?"`);
    } else {
      setResult(`Det var dessverre feil. Heldigvis er dette noko som Ørret-Øystein kan godt. Svaret er ${correctAnswer}.`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Femte desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>05.12.23, 22:30</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>På berg prestegård</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Da gjengen trippa inn på prestegården, vart dei fort samde om å stole på dei tre skjønne gutane som bodde der. 
        Så mykje mat dei hadde dumpstret var det rimelig å anta at dei kunne være villig til å stjele mat. Vartfall frå bosset. Men Torsgutta ville ikkje leite, siden prestegården var så stor.    
      </h4>
        <h4>
        I staden valgte dei å spille exploding kittens, og ete dumpstra sjokolade. Vel mett på både latter og sjokofant, tok dei til å snakke om det nylege tjuveriet.
        Hvordan kom de seg inn?, spurte Safran-Sondre. Alle så på Maistortilla-Marius, som gav inn for presset å ytret stille: "æ låste ikke døra". Men med eitt fekk Ostelaupe-Olav auge på ein mørk skugge som stod å såg inn vindauget.    
        </h4>
        <h4>
        Like fort som han kom, forsvant også den mystiske gjesten. Men er det ikkje der oppe kjæresten din bor da Sukker-Simon? Spurde Nesquik-Nikolai med store auge.
        ...  
        </h4>
        <h2>Apropos Berg:</h2>
        <h2> Kven eig "Berg prestegård"? Velg ein av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('laget')}>Laget</li>
          <li onClick={() => handleChoice('normisjon')}>Normisjon</li>
          <li onClick={() => handleChoice('krik')}>KRIK</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
}

export default Day5;