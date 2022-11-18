
import './App.css';
import { NavBar } from './Components/NavBar';
import {Banner} from './Components/Banner'
import {Skills} from './Components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Face } from './Components/Face';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='banner-face'>
    <Banner/>
    <Face/>
    </div>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
