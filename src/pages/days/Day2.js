import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/Friggs.jpg'; 
import React, { useState } from 'react';

function Day2() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = 'kanelen';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig, så vi får bare fortsette å leite. På broderiet står det "Send Nudes".`);
    } else {
      setResult(`Det var dessverre feil, dei har alt untatt ${correctAnswer}. På broderiet står det "Send Nudes". Vi må fortsette å leite`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Andre desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Den andre desember, 13:55</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>I enda ei kald leiligheit på Nardo (Friggs veg 4)</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Gutane har knapt fått sove. Den vanlege havregrauten liknar ikkje seg sjølv, utan det gyldne kanelet. 
        Sjølv om dei er konfliktsky, må dei konfrontere dei staute damene som bor lenger nede på Nardo. Turen er kort, men huset er fullt av grønne planter.
      </h4>
        <h4>
        Hot-Kyllingsuppe-Hannah står og vanner planter, mens ho kjem med ein biologifakta om opphavet til navnet til ein blom. Julewok-Johanna øver på Pull-ups i stanga i kjøkkeninngangen. Hylleblomstsaft-Hanna varmer tè til gjestene, medan Drue-Dorte fortel om joggeturen ho var på imorges.
        Etter eit koseleg kvarter snur stemninga seg på hovudet. Anklager dere oss? -Raser det i kor fra Kuyrdak-Kristin og Karamell-Fudge-Kristine. Gutane vart ille-til-mote, da dei såg at kanelen på benken var full, men av ein anna sort enn deiras hadde vore.
        I hu og hast, sprang dei ut så fort det lot seg gjere. På veg ut fekk alle blomane Avocado-Andreas til å tenke på BlomsterBrødrene.
        Det var kanskje ikkje så rart at Sitron-Sven hadde smilt så lurt på julefesten igår ... ?  
        </h4><br></br>
        <h2>Apropos Friggs veg 4:</h2>
        <h2>Kva har dei ikkje i huset sitt? Velg ein av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
          <li onClick={() => handleChoice('broderiet')}>Eit upassande broderi</li>
          <li onClick={() => handleChoice('barisbildet')}>Eit barisbilde fra eit guttekollektiv</li>
          <li onClick={() => handleChoice('kanelen')}>Kanelen til torsgutta</li>
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
      </div>
    </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
}

export default Day2;