import React from 'react'
import portfolio01 from "../images/portfolio01.jpg";
import portfolio02 from "../images/portfolio02.jpg";
import portfolio03 from "../images/portfolio03.jpg";
import portfolio04 from "../images/portfolio04.jpg";
import portfolio05 from "../images/portfolio05.jpg";
import portfolio06 from "../images/portfolio06.jpg";

function Portfolio() {
  return (
    <div>
       <section className="portfolio" id="portfolio">
          <h4 className="small">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h2 className="big">My Portfolio</h2>
          <div className="portfolio-content">
            <div className="portfolio-box">
              <div className='portImg'>
                <img src={portfolio01} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box">
              <div className='portImg'>
              <img src={portfolio02} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box">
            <div className='portImg'>
              <img src={portfolio03} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box">
            <div className='portImg'>
              <img src={portfolio04} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box">
            <div className='portImg'>
              <img src={portfolio05} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box">
            <div className='portImg'>
              <img src={portfolio06} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Portfolio
