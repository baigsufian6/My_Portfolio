import React, { useState, useEffect } from 'react';

const Main = () => {
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
      <i id="menu-icon" className={`fa ${menuActive ? 'fa-x' : ''}`} onClick={handleMenuClick}></i>
      <div className={`navbar ${navHidden ? 'hidden' : ''}`}>
        {/* Your navbar content goes here */}
      </div>
    </div>
  );
};

export default Main;
