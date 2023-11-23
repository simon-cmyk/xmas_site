import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // import your Home component
// import Day from './pages/Day'; // import your Day component
import Member from './pages/Member'; // import your Member component
import NotFound from './pages/NotFound'; // import your NotFound component
import Peeking from './pages/Peeking';

function RoutElem() {
  return (
    <Router>
      <Routes>
        <Route path="xmas_site/" Component={Home} />
        <Route path="xmas_site/day" Component={Peeking} />
        <Route path="xmas_site/member" Component={Member} />
        <Route path='xmas_site/peek' Component={Peeking} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default RoutElem;