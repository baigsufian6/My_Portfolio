import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trual1 from '../images/trual1.png';
import './Navbar.css';

const Navbar = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [discoActive, setDiscoActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavHidden(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setNavHidden(!navHidden);
  };

  const handleTitleChange = (newTitle) => {
    document.title = newTitle;
    setMenuActive(false);
    setNavHidden(true);
  };

  const startDiscoEffect = () => {
    if (!discoActive) {
      props.toggleRotation();
      setDiscoActive(true);
      clearInterval(intervalId);
    } else {
      stopDiscoEffect();
    }
  };

  const stopDiscoEffect = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    props.toggleRotation();
    setDiscoActive(false);
    document.body.style.backgroundColor = 'transparent';
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo" onClick={() => handleTitleChange("HOME")}>
          <img
            className="ninjaIcon"
            src={trual1}
            alt="no img"
            onClick={startDiscoEffect}
          ></img>
          
        </a>
        <i
          className={`fa ${menuActive ? 'fa-times' : 'fa-bars'}`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></i>
        <nav
          className={`navbar ${menuActive ? 'active' : ''} ${
            navHidden ? 'hidden' : ''
          }`}
        >
          <a
            href="/"
            className="active"
            onClick={() => handleTitleChange("HOME")}
          >
            HOME
          </a>
          <Link
            to="/features"
            className="#features"
            onClick={() => handleTitleChange("FEATURES")}
          >
            FEATURES
          </Link>
          <Link
            to="/portfolio"
            className=""
            onClick={() => handleTitleChange("PROJECTS")}
          >
            PROJECTS
          </Link>
          <Link
            to="/resume"
            className=""
            onClick={() => handleTitleChange("RESUME")}
          >
            RESUME
          </Link>
          <Link
            to="/textutils"
            onClick={() => handleTitleChange("TEXT-UTILS")}
          >
            TEXT-UTILS
          </Link>
          <Link
            to="/contactHeader"
            className=""
            onClick={() => handleTitleChange("CONTACT")}
          >
            CONTACT
          </Link>
          <Link
            to="#my-portfolio"
            id="cont"
            onClick={stopDiscoEffect}
          >
            SUFIAN BAIG 😊👍
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;