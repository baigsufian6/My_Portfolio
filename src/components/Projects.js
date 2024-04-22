import React from 'react'
import logofullstack from "../images/logosss.jpg";
import images from "../images/wimages.jpg";
import portImage from "../images/portImage.jpg";
export default function Projects() {
  return (
    
     <div>
       <section className="portfolio" id="portfolio">
          <h4 className="small">WELCOME TO MY PROJECTS</h4>
          <h2 className="big">My Projects</h2>
          <div className="portfolio-content">
            <div className="portfolio-box">
              <div className='portImg'>
                <a href="https://github.com/baigsufian6/realTime_codeEditor">
                <img src={logofullstack} alt="img no" />
                </a>
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>Real Time Code Editor</p>
              </div>
            </div>
            <div className="portfolio-box">
              <div className='portImg'>
                <a href='https://github.com/baigsufian6/Machine-Learning-Projects'>
              <img src={images} alt="img no" />
              </a>
              </div>
              <div className="portfoliolayer">
                <h5>MACHINE LEARNING</h5>
                <p>Online Cab Trip Analysis</p>
              </div>
            </div>
            <div className="portfolio-box">
            <div className='portImg'>
                <a href='https://github.com/baigsufian6/My_Portfolio'>
              <img src={portImage} alt="img no" />
              </a>
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>My Portfolio</p>
              </div>
            </div>
          </div>
        </section>

    </div> 
    
  )
}


