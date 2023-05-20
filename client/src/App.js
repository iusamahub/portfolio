// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';


import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='/projects' element= {<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
