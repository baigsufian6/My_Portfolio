import React from 'react'
import logofullstack from "../images/logosss.jpg";
import images from "../images/wimages.jpg";
import portImage from "../images/portImage.jpg";
import portfolio04 from "../images/portfolio04.jpg";
import portfolio05 from "../images/portfolio05.jpg";
import portfolio06 from "../images/portfolio06.jpg";

function Portfolio(props) {
  return (
    <div>
       <section className="portfolio" id="portfolio">
          <h4 className="small">WELCOME TO MY PROJECTS</h4>
          <h2 className="big" style={{color: props.mode ? "#3c3e41" : "#54585f"}}>My Projects</h2>
          <div className="portfolio-content">
            
          <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
              <div className='portImg'>
                <img src={logofullstack} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>Real Time Code Editor</p>
                <a href='https://github.com/baigsufian6/realTime_codeEditor'>
                <button className='githubBtn'><a href='https://github.com/baigsufian6/realTime_codeEditor'>Github</a></button>
                </a>
              </div>
            </div>
           
            <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
              <div className='portImg'>
              <img src={images} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>MACHINE LEARNING</h5>
                <p>Online Cab Trip Analysis</p>
                <a href='https://github.com/baigsufian6/Machine-Learning-Projects'>
                <button className='githubBtn'><a href='https://github.com/baigsufian6/Machine-Learning-Projects'>Github</a></button>
                </a>
              </div>
            </div>

            <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <div className='portImg'>
              <img src={portImage} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p >My Portfolio</p>
                <a className='btnGitMain' href='https://github.com/baigsufian6/My_Portfolio'>
                <button className='githubBtn'><a className='btnGitSmall' href='https://github.com/baigsufian6/My_Portfolio'>Github</a></button>
                </a>
              </div>
            </div>

            <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <div className='portImg'>
              <img src={portfolio04} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <div className='portImg'>
              <img src={portfolio05} alt="img no" />
              </div>
              <div className="portfoliolayer">
                <h5>WEB DEVELOPMENT</h5>
                <p>The service provide for design</p>
              </div>
            </div>
            <div className="portfolio-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
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
