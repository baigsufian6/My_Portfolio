import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trual1 from '../images/trual1.png'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [title, setTitle] = useState("Suff's Portfolio");

  useEffect(() => {
    const handleResize = () => {
      setNavHidden(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial viewport size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setNavHidden(!navHidden);
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    document.title = newTitle;
    setMenuActive(false);
    setNavHidden(true); 
  };

  return (
    <div>
      <header className="header">
        <a href="/"  className="logo" onClick={() => handleTitleChange("HOME")}>
          <img src={trual1} alt='no img'></img>
        </a>
        <i
          className={`fa ${menuActive ? 'fa-times' : 'fa-bars'}`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></i>
        <nav className={`navbar ${menuActive ? 'active' : ''} ${navHidden ? 'hidden' : ''}`}>
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
            onClick={() => handleTitleChange("PORTFOLIO")}
          >
            PORTFOLIO
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
            to="/projects"
            className=""
            onClick={() => handleTitleChange("PROJECTS")}
          >
            PROJECTS
          </Link>
          <Link
            to="/contactHeader"
            className=""
            onClick={() => handleTitleChange("CONTACT")}
          >
            CONTACT
          </Link>
          <a
            href="#my-portfolio"
            id="cont"
            onClick={() => handleTitleChange("BUY NOW")}
          >
            Suffs's Portfolio 😊👍
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;