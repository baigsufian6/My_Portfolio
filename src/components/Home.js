import React from 'react'
import myPic1 from '../images/myPic1.jpg'; 



function Home() {
  return (
    
      <section className="home" id="home">
<div className="home-content">
  <div class='cover'>
  <h5>WELCOME TO MY WORLD</h5>
  <h2>
    Hi, I'am <span>Sufian Baig</span>
  </h2>
  <h3>
    <span>a</span> Professional Developer
  </h3>
  </div>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
    officia esse atque voluptas dolorum similique illum tempora natus
    sint voluptatibus quia voluptates omnis illo, at, commodi
    temporibus alias aspernatur! Incidunt?
  </p>
  <div className="icons">
    <div className="social-icons">
      <h4 id="line1">FIND ME</h4>
      <a href="/" className="">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="/" className="">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="/" className="">
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
  <img src={myPic1} alt="no img" />
</div>
<hr />
</section>
    
  )
}

export default Home
