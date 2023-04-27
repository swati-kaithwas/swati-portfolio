 
import './App.css';
import React from "react"
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills  from './Components/Skills';
import Projects from './Components/Projects'
import Contect from './Components/Contect' 
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>   
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contect />
    </div>
  );
}

export default App;
