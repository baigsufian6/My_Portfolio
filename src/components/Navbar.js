import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setNavHidden(!navHidden);
  };

  const handleScroll = () => {
    setNavHidden(true);

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelector(`header nav a[href*=${id}]`)
          ?.classList.add("active");
      }
    });

    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    setMenuActive(false);
    setNavHidden(false);
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          HOME
        </a>

        <i className={`fa ${menuActive ? 'fa-times' : 'fa-bars'}`} id="menu-icon" onClick={handleMenuClick}></i>

        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#home" className="active">
            HOME
          </a>
          <a href="#features" className="#features">
            FEATURES
          </a>
          <a href="#portfolio" className="">
            PORTFOLIO
          </a>
          <a href="#resume" className="">
            RESUME
          </a>
          <a href="#contactHeader" className="">
            VALIDATION FORM
          </a>
          <Link to="/textutils">
            TEXT-UTILS
          </Link>
          <a href="#blog" className="">
            BLOG
          </a>
          <a href="#contact" className="">
            CONTACT
          </a>
          <a href="#buynow" id="cont">
            BUY NOW
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;