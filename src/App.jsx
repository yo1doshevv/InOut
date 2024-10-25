import { useEffect, useState } from 'react';
import './App.scss';
import Bottom from './Companients/Bottom/Bottom';
import Footer from './Companients/Footer/Footer';
import Leyout from './Companients/Leyout/Leyout';
import Navbar from './Companients/Navbar/Navbar';
import NavTop from './Companients/NavTop/NavTop';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <NavTop/>
      <div className='AppBtn'>
      <button className="toggle-button" onClick={toggleDarkMode}>
            {isDarkMode ? <WbSunnyTwoToneIcon/> : <NightlightIcon/>}
         </button>
      </div>
        <Navbar/>
        <Leyout/>
        <Footer/>
        <Bottom/>
    </div>
  );
}

export default App;
