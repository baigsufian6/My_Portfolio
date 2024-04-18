import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [title, setTitle] = useState("Suff's Portfolio");

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setNavHidden(!navHidden);
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    document.title = newTitle;
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo" onClick={() => handleTitleChange("HOME")}>
          HOME
        </a>
        <i
          className={`fa ${menuActive ? 'fa-times' : 'fa-bars'}`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></i>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a
            href="#home"
            className="active"
            onClick={() => handleTitleChange("HOME")}
          >
            HOME
          </a>
          <a
            href="#features"
            className="#features"
            onClick={() => handleTitleChange("FEATURES")}
          >
            FEATURES
          </a>
          <a
            href="#portfolio"
            className=""
            onClick={() => handleTitleChange("PORTFOLIO")}
          >
            PORTFOLIO
          </a>
          <a
            href="#resume"
            className=""
            onClick={() => handleTitleChange("RESUME")}
          >
            RESUME
          </a>
          <a
            href="#contactHeader"
            className=""
            onClick={() => handleTitleChange("VALIDATION FORM")}
          >
            VALIDATION FORM
          </a>
          <Link
            to="/textutils"
            onClick={() => handleTitleChange("TEXT-UTILS")}
          >
            TEXT-UTILS
          </Link>
          <a
            href="#blog"
            className=""
            onClick={() => handleTitleChange("BLOG")}
          >
            BLOG
          </a>
          <a
            href="#contact"
            className=""
            onClick={() => handleTitleChange("CONTACT")}
          >
            CONTACT
          </a>
          <a
            href="#buynow"
            id="cont"
            onClick={() => handleTitleChange("BUY NOW")}
          >
            BUY NOW
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;