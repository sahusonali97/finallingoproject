import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './Contact';

import About from './About'
import Home from './Home'
import Pricing from './Pricing'
import Training from './Training';
import German from './German'
import French from './French';
import English from './English';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/About' element={<About/>} />
        <Route path='/German' element={<German/>} />
        <Route path='/French' element={<French/>} />
        <Route path='/English' element={<English/>} />
       

      </Routes>
    </>
  );
}

export default App;
