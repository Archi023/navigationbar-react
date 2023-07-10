import React from 'react';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/contact' Component={Contact}/>
    <Route exact path='/about' Component={About}/>
   </Routes>
   
   </>
  );
}

export default App;
