import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="header">
          <a href="/" className="logo">
            HOME
          </a>

          <i className="fa-solid fa-bars" id="menu-icon"></i>

          <nav className="navbar">
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
            <Link  to ="/textutils">
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
  )
}

export default Navbar
