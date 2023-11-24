import React from 'react';
import '../App.css';
import lottie from 'lottie-web';
import xmasAnim from './xmas_anim.json';
import catAnim from './cat_anim.json';
import { Link } from 'react-router-dom';
import Popup from './Popup'

class Home extends React.Component {
  render() {
    const daysUntilChristmas = 24;
    const calendar = [];
    

    for (let day = 1; day <= daysUntilChristmas; day++) {
      
      calendar.push(

        <Link to={'/xmas_site/day' + day}
          className={`calendar-square bg-image${day}`}>
          {day}
        </Link>
      );
    }

    const numSnowflakes = 50;
    const snowflakeContainer = document.querySelector('.snowflake-container');

    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
      snowflakeContainer.appendChild(snowflake);
    }

    return (
      <div className="app">
      <Popup />
      <h1 className='title'>Torsguttas kaneltomme jul</h1>
     
        <div className="calendar-container">{calendar}</div>
        <div
          className="xmas-anim"
          ref={(ref) => (this.santaAnimationContainer = ref)}
        ></div>
        <div
          className="cat-anim"
          ref={(ref) => (this.catAnimationContainer = ref)}
        ></div>
        <section>
        <div class="row">
        <Link to="/xmas_site/Surdeig" class="col" className='back-button'>Surdeig-Sverre</Link>
        <Link to="/xmas_site/Avokado" class="col" className='back-button'>Avokado-Andreas</Link>
        <Link to="/xmas_site/Oste" class="col" className='back-button'>Oste-OleMathias</Link>
        </div>
        <div class="row">
        <Link to="/xmas_site/Maistortilla" class="col" className='back-button'>Maistortilla-Marius</Link>
        <Link to="/xmas_site/Aure" class="col" className='back-button'>Ørret-Øystein</Link>
        <Link to="/xmas_site/Sukker" class="col" className='back-button'>Sukker-Simon</Link>
        </div>
      </section>
      </div>
      
      );
  }
  
  constructor(props) {
    super(props);
    this.animationLoaded = false; // Track whether animation is loaded
  }

  componentDidMount() {
    if (!this.animationLoaded) {
      lottie.loadAnimation({
        container: this.santaAnimationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: xmasAnim,
      });
    
      lottie.loadAnimation({
        container: this.catAnimationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: catAnim,
      });
      this.animationLoaded = true; // Mark animation as loaded
    }
  }
}

export default Home;