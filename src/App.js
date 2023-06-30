// import React from "react";
import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App ()  {
  return (
    <> 
    <div className='App'>   
        <Navbar />
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route exact path='/about' Component={About} />
              <Route exact path='/services' Component={Services} />
              <Route eaxct path='/contact' Component={Contact} />
            </Routes>  
            <Footer />
            </div>     
    </>
  )
}

export default App;
