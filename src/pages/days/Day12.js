import '../../App.css';
import { Link } from 'react-router-dom';
import julekort from '../../images/obs.png'; 
import React, { useState } from 'react';

function Day12() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const correctAnswer = '2';  // Set the correct answer

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Check if the user's choice is correct
    if (choice === correctAnswer) {
      setResult(`Svaret er riktig. Det er godt å kunne når ein skal dekke til fest! Kilda er Kid.no`);
    } else {
      setResult(`Svaret er feil. Ørret-Øystein viste at det var høyre, venstre, høyre (evt over). Kilda er Kid.no`);
    }
  };
  return (
    <div className="app">
    <h1 className='title'>Tolvte desember</h1>
      <div className='row'>
        <h3 className='col'>Dato:</h3>
        <h3 className='col'>Ein julehandlande desemberdag, 22:45</h3>
      </div>
      <div className='row'>
        <h3 className='col'>Stad:</h3>
        <h3 className='col'>Kjøpesenteret på Lade</h3>
      </div>
      
      
      <div className="quiz-container">
      
      <div className="quiz-content">
      <h4 className='dinfo'>
      <div className="quiz-image">
      <img src={julekort} alt="julekort" className='quiz-image' />
        <br></br>
      </div>
        Avocado-Andreas hadde dårlig tid. No var det bare eit quate til kjøpesenteret stengde, og han hadde mange julegaver igjen på lista.
        Sukker-Simon skulle få rosiner, Ørret-Øystein skulle få megafon, Maistortilla-Marius skulle få wunderbaum, men gåva til Surdeig-Sverre var enda ikkje i boks. Avocado-Andreas sprang fram og tilbake inne på Coop obs, så fort beina kunne bære han.</h4>
        <h4>
        "Eg veit nøyaktig ka du trenge", kom det fra ein ansatt. Avocado-Andreas snudde seg skremt, og såg det var Tyrkisk-Pepper-Tore som sto der. I handa holdt han ei sykkelpumpe, den perfekte gåva til sistemann i kollektivet.  
        </h4>
        <h4>
        Før Avocado-Andreas fekk tenkt seg om stod plutseleg alle gutta fra obs sport der ved siden av.
        Eplekake-Eivind med eit sykkelhjul, Kransekake-Kristian med ein skisko og Sylviakake-Simon med ein basketball. 
        Gutta preikte langt om lenge om alt frå Premier League til skisesongen. Plutseleg slåkte lyset, og samtalen døydde ut like fort som han hadde oppstått. Avocado-Andreas måtte heller fikse dei andre gåvene ein anna dag.  
        </h4>
        
        <h2>Apropos Borddekking.</h2>
        <h2> Kva er riktig kutyme: kor skal suppeskei, kakegaffel og dessertskei ligge? Velg eit av alternativa under, og klikk på den du trur er riktig</h2>
        <h2>Alternativer:</h2>
        <ul>
            <li onClick={() => handleChoice('1')}>venstre, høgre, over</li>
            <li onClick={() => handleChoice('2')}>høgre, venstre, høgre (evt over)</li>
            <li onClick={() => handleChoice('3')}>over, over, over </li>
          
        </ul>
        <br></br>
        {result && <h3>{result}</h3>}
        
      </div>
    </div>
    <Link to={'/xmas_site/day11'}
          className={`swapday`}>
          {"< Forrige"}
        </Link>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    <Link to={'/xmas_site/day13'}
          className={`swapday`}>
          {"Neste >"}
        </Link>
    </div>
  );
}

export default Day12;