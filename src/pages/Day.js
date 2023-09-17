import '../App.css';
import React, { useState, useEffect } from 'react';
import AdventCalendar from '../djangop/myapp/models.py';

import { Link } from 'react-router-dom';
import oslo from '../images/oslo.jpg'; 

async function getAdventData(day) {
  try {
    const response = await fetch(`http://localhost:8000/advent_data/${day}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}


function Day() {
  const [adventData, setAdventData] = useState(null);
  const day = 1; // Change this to the day you want to retrieve data for

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdventData(day);
      setAdventData(data);
    }

    fetchData();
  }, [day]);

  if (adventData) {
    const { question, alternative1, alternative2, alternative3 } = adventData;

  return (
    <div className="app">
    <h1 className='title'>Day x</h1>
      <div className="quiz-container">
        <div className="quiz-image">
          <img src={oslo} alt="oslo" className='quiz-image'/>
        </div>
        <div className="quiz-content">
          <h2>Quiz dag nr {day}</h2>
          <p>{question}?</p>
          <h2>Alternativer:</h2>
          <ul>
            <li>{alternative1}</li>
            <li>{alternative2}</li>
            <li>{alternative3}</li>
          </ul>
        </div>
      </div>
    <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
    </div>
  );
  }
}

export default Day;