import React from "react";
import myImg from "../images/myImg.png";
import trual1 from "../images/trual1.png";
import './Navbar.css'

function Home(props) {
  return (
    <section className="home" id="home"style={{paddingTop:props.mode? "100px":"50px"}}>
      <div className="home-content">
        <div className="coverAll"style={{color:props.mode? "white":"black"}}>
          <div className="cover">
            <h5 style={{color:props.mode? "white":"#3c3e41"}}>WELCOME TO MY WORLD </h5>
            <h2>
              Hi, I'am <span>Sufian Baig,</span>
            </h2>
            <h3>Professional Developer</h3>
          </div>
          <p>
            In the world of cutting-edge development, code is the engine driving innovation forward. With every line written, a new realm of possibilities unfolds, inspiring others to reach new heights in the ever-evolving landscape of technology.
          </p>
        </div>
        <div className="icons">
          <div className="social-icons">
            <h4 id="line1" style={{color:props.mode? "white":"#3c3e41"}}>FIND ME</h4>
            <a href="https://www.facebook.com/" className=""style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/baigsufian06/" style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sufian-baig-242360191/" className=""style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="bestskill-icons">
            <h4 id="line2"style={{color:props.mode? "white":"#3c3e41"}}>BEST SKILL ON</h4>
            <a href="/" className="" style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-sharp fa-solid fa-inbox"></i>
            </a>
            <a href="/" className=""style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-solid fa-diamond"></i>
            </a>
            <a href="/" className=""style={{color:props.mode? "#ff014f":"black" , boxShadow:props.mode?"1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 1.2) inset":"5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff"}}>
              <i className="fa-solid fa-droplet"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="home-img">
        {props.mode ? (
          <div className="dark-mode-image-container">
            <img src={trual1} alt="no img" style={{ animation:props.mode? "rotation 20s infinite linear":"none"}} />
          </div>
        ) : (
          <img src={myImg} alt="no img" />
        )}
      </div>
      <hr />
    </section>
  );
}

export default Home;