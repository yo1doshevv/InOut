import './App.scss';
import Bottom from './Companients/Bottom/Bottom';
import Footer from './Companients/Footer/Footer';
import Leyout from './Companients/Leyout/Leyout';
import Navbar from './Companients/Navbar/Navbar';
import NavTop from './Companients/NavTop/NavTop';

function App() {
  return (
    <div className="App">
      <NavTop/>
        <Navbar/>
        <Leyout/>
        <Footer/>
        <Bottom/>
    </div>
  );
}

export default App;
