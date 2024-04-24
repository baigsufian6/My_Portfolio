import React from "react";
import myImg from "../images/myImg.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="coverAll">
          <div className="cover">
            <h5>WELCOME TO MY WORLD</h5>
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
            <h4 id="line1">FIND ME</h4>
            <a href="https://www.facebook.com/" className="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/baigsufian06/" className="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sufian-baig-242360191/" className="">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="bestskill-icons">
            <h4 id="line2">BEST SKILL ON</h4>
            <a href="/" className="">
              <i className="fa-sharp fa-solid fa-inbox"></i>
            </a>
            <a href="/" className="">
              <i className="fa-solid fa-diamond"></i>
            </a>
            <a href="/" className="">
              <i className="fa-solid fa-droplet"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="home-img">
        <img src={myImg} alt="no img" />
      </div>
      <hr />
    </section>
  );
}

export default Home;
