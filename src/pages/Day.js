import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';

class Day extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className='title'>Desember</h1>
        {/* <BrowserRouter>
          <Routes>
              <Route path="/" component={App} />
          </Routes>
        </BrowserRouter> */}
      </div>

      );
    }
}



export default Day;