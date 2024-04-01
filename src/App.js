import './App.css'

import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Textform from './components/Textform';
import Validation from './components/Validation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Features />
              <Portfolio />
              <Resume />
              
              <Validation />
            </>
          }
        />
        <Route path="/textutils" element={<Textform />} />
      </Routes>
    </Router>
  );
}

export default App;