import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cervices from '../Pages/Cervices';
import About from '../Pages/About';
import Cervis from '../Pages/Cervis';
import Vakansiya from '../Pages/Vakansiya';
import Sharhlar from '../Pages/sharhlar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cervices' element={<Cervices />} />
      <Route path='/about' element={<About />} />
      <Route path='/cervic' element={<Cervis />} />
      <Route path='/vakansiya' element={<Vakansiya />} />
      <Route path='/sharhlar' element={<Sharhlar />} />
    </Routes>
  );
};

export default App;
