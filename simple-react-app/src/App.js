import React from 'react';
import './App.css';
import lottie from 'lottie-web';
import xmasAnim from './xmas_anim.json';
import catAnim from './cat_anim.json';



class App extends React.Component {


  

  render() {
    const daysUntilChristmas = 24;
    const calendar = [];

    for (let day = 1; day <= daysUntilChristmas; day++) {
      calendar.push(
        <div 
          key={day} 
          className={`calendar-square bg-image${day}`}>
          {day}
        </div>
      );
    }

    return (
      <div className="app">
        <h1 className='title'>Torsguttas gledelige jul</h1>
        <div className="calendar-container">{calendar}</div>
        <div
          className="xmas-anim"
          ref={(ref) => (this.santaAnimationContainer = ref)}
        ></div>
        <div
          className="cat-anim"
          ref={(ref) => (this.catAnimationContainer = ref)}
        ></div>
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



export default App;