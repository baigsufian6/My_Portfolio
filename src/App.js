import './App.css'
import React, { useState } from 'react';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Textform from './components/Textform';
import Validation from './components/Validation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState(false);

  const toggleRotation = () => {
    if(!mode){
      document.body.style.backgroundColor="black";
      setMode(true)
    }
    else{
      document.body.style.backgroundColor="white";
      setMode(false)
    }
  };

  return (
    <Router>
      <Navbar toggleRotation={toggleRotation} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home mode={mode} />
              <Features />
              <Portfolio />
              <Resume />
              <Validation />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/textutils" element={<Textform />} />
        <Route path="/contactHeader" element={<Validation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;