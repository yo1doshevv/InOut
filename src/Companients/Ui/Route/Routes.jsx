import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cervices from '../Pages/Cervices';
import About from '../Pages/About';
import Vakansiya from '../Pages/Vakansiya';
import Sharhlar from '../Pages/sharhlar';
import Contact from '../Pages/Contact';
import Conaction from '../Conaction/Conaction';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cervices' element={<Cervices />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Conaction />} />
      <Route path='/vakansiya' element={<Vakansiya />} />
      <Route path='/sharhlar' element={<Sharhlar />} />
    </Routes>
  );
};

export default App;
