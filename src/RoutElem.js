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
import Day3 from './pages/days/Day3';
import Day4 from './pages/days/Day4';
import Day5 from './pages/days/Day5';
import Day6 from './pages/days/Day6';
import Day7 from './pages/days/Day7';
import Day8 from './pages/days/Day8';
import Day9 from './pages/days/Day9';
import Day10 from './pages/days/Day10';
import Day11 from './pages/days/Day11';
import Day12 from './pages/days/Day12';
import Day13 from './pages/days/Day13';
import Day14 from './pages/days/Day14';
import Day15 from './pages/days/Day15';
import Day16 from './pages/days/Day16';
import Day17 from './pages/days/Day17';
import Day18 from './pages/days/Day18';
import Day19 from './pages/days/Day19';
import Day20 from './pages/days/Day20';
import Day21 from './pages/days/Day21';
import Day22 from './pages/days/Day22';
import Day23 from './pages/days/Day23';
import Day24 from './pages/days/Day24';

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
        <Route path='xmas_site/Day3' Component={Day3} /> 
        <Route path='xmas_site/Day4' Component={Day4} /> 
        <Route path='xmas_site/Day5' Component={Day5} /> 
        <Route path='xmas_site/Day6' Component={Day6} /> 
        <Route path='xmas_site/Day7' Component={Day7} /> 
        <Route path='xmas_site/Day8' Component={Day8} /> 
        <Route path='xmas_site/Day9' Component={Day9} /> 
        <Route path='xmas_site/Day10' Component={Day10} /> 
        <Route path='xmas_site/Day11' Component={Day11} /> 
        <Route path='xmas_site/Day12' Component={Day12} /> 
        <Route path='xmas_site/Day13' Component={Day13} /> 
        <Route path='xmas_site/Day14' Component={Day14} /> 
        <Route path='xmas_site/Day15' Component={Day15} /> 
        <Route path='xmas_site/Day16' Component={Day16} /> 
        <Route path='xmas_site/Day17' Component={Day17} /> 
        <Route path='xmas_site/Day18' Component={Day18} /> 
        <Route path='xmas_site/Day19' Component={Day19} /> 
        <Route path='xmas_site/Day20' Component={Day20} /> 
        <Route path='xmas_site/Day21' Component={Day21} /> 
        <Route path='xmas_site/Day22' Component={Day22} /> 
        <Route path='xmas_site/Day23' Component={Day23} /> 
        <Route path='xmas_site/Day24' Component={Day24} /> 
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default RoutElem;