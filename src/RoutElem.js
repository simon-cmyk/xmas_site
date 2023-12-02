import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // import your Home component
// import Day from './pages/Day'; // import your Day component
import Member from './pages/Member'; // import your Member component
import NotFound from './pages/NotFound'; // import your NotFound component
import Peeking from './pages/Peeking';
import Andreas from './pages/members/Andreas';
import Øystein from './pages/members/Øystein';
import Simon from './pages/members/Simon';
import Marius from './pages/members/Marius';
import Sverre from './pages/members/Sverre';
import Day1 from './pages/days/Day1';
import Day2 from './pages/days/Day2';
// import Day3 from './pages/days/Day3';
// import Day4 from './pages/days/Day4';
// import Day5 from './pages/days/Day5';
// import Day6 from './pages/days/Day6';
// import Day7 from './pages/days/Day7';
// import Day8 from './pages/days/Day8';

function RoutElem() {
  return (
    <Router>
      <Routes>
        <Route path="xmas_site/" Component={Home} />
        <Route path="xmas_site/day" Component={Peeking} />
        <Route path="xmas_site/member" Component={Member} />
        <Route path="xmas_site/Avokado" Component={Andreas} />
        <Route path="xmas_site/Aure" Component={Øystein} />
        <Route path="xmas_site/Sukker" Component={Simon} />
        <Route path="xmas_site/Maistortilla" Component={Marius} />
        <Route path="xmas_site/Surdeig" Component={Sverre} />
        <Route path='xmas_site/peek' Component={Peeking} />
        <Route path='xmas_site/Day1' Component={Day1} /> 
        <Route path='xmas_site/Day2' Component={Day2} /> 
        <Route path='xmas_site/Day3' Component={Peeking} /> 
        <Route path='xmas_site/Day4' Component={Peeking} /> 
        <Route path='xmas_site/Day5' Component={Peeking} /> 
        <Route path='xmas_site/Day6' Component={Peeking} /> 
        <Route path='xmas_site/Day7' Component={Peeking} /> 
        <Route path='xmas_site/Day8' Component={Peeking} /> 
        <Route path='xmas_site/Day9' Component={Peeking} /> 
        <Route path='xmas_site/Day10' Component={Peeking} /> 
        <Route path='xmas_site/Day11' Component={Peeking} /> 
        <Route path='xmas_site/Day12' Component={Peeking} /> 
        <Route path='xmas_site/Day13' Component={Peeking} /> 
        <Route path='xmas_site/Day14' Component={Peeking} /> 
        <Route path='xmas_site/Day15' Component={Peeking} /> 
        <Route path='xmas_site/Day16' Component={Peeking} /> 
        <Route path='xmas_site/Day17' Component={Peeking} /> 
        <Route path='xmas_site/Day18' Component={Peeking} /> 
        <Route path='xmas_site/Day19' Component={Peeking} /> 
        <Route path='xmas_site/Day20' Component={Peeking} /> 
        <Route path='xmas_site/Day21' Component={Peeking} /> 
        <Route path='xmas_site/Day22' Component={Peeking} /> 
        <Route path='xmas_site/Day23' Component={Peeking} /> 
        <Route path='xmas_site/Day24' Component={Peeking} /> 
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default RoutElem;