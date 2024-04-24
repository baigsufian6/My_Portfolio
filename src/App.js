import './App.css'
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