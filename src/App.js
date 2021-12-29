

import './App.css';
import Menu from './Components/menu';
import Slider from './Components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { useState, useEffect } from 'react';
import Appoint from './Pages/Appoint';


function App() {

  return (
    <main>
      <div className="list">
        <Menu />
         <Slider />
          </div>
          <section className="person">
            <Appoint/>
</section>
</main>
  );
}

export default App;