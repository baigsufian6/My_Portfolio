import React from "react";

function Resume(props) {
  return (
    <div>
      <section className="resume" id="resume">
        <h4 className="resexp">7+ YEARS OF EXPERIANCE</h4>
        <h2 className="reshead" style={{color: props.mode ? "#3c3e41" : "#54585f"}}>My Resume</h2>

        <div className="navbar2">
          <a href="#education" className="education" style={{backgroundColor:props.mode ? "black" : "#ecf0f3", boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
            Education
          </a>
          <a href="#professional-skills" className="professional-skills" style={{backgroundColor:props.mode ? "black" : "#ecf0f3", boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
            Professional Skills
          </a>
          <a href="#experiance" className="experiance" style={{backgroundColor:props.mode ? "black" : "#ecf0f3", boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
            Experiance
          </a>
          <a href="#interview" className="interview" style={{backgroundColor:props.mode ? "black" : "#ecf0f3", boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
            Interview
          </a>
        </div>
        <div className="boss">
          <div className="part1">
            <h5>2010 - 2024</h5>
            <h2 style={{color: props.mode ? "#3c3e41" : "#54585f"}}>Education Quality</h2>
            <div className="part1-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>BE in CSE (Data Science)</h3>
                  <h5> Year Of Study (2020-2024)</h5>
                </div>
                <div className="date">
                  <h5>9.20/10</h5>
                </div>
              </div>
              <hr />
              <p>
                Aspiring data scientist with strong academic projects
                highlighting statistical machine learning capabilities. Proven
                success tackling real-world datasets, deriving insights through
                advanced methodologies. Passionate about leveraging data for
                innovation, informed decision-making.
              </p>
            </div>

            <div className="part1-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>St. Joseph PUC (PCMC)</h3>
                  <h5> Year of Study (2001-2004)</h5>
                </div>
                <div className="date">
                  <h5>86.8/100</h5>
                </div>
              </div>
              <hr />
              <p>
                Excelled in pre-university coursework, outstanding academic
                achievements. Consistent performance across diverse subjects,
                cultivated strong foundation. Committed to maximizing potential,
                driven by intellectual curiosity. Passionate about continuous
                learning, growth mindset
              </p>
            </div>

            <div className="part1-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>New Millennium School</h3>
                  <h5> Year Of Study (2010-2018)</h5>
                </div>
                <div className="date">
                  <h5>86.5/100</h5>
                </div>
              </div>
              <hr />
              <p>
              Excelled in pre-university coursework, outstanding academic
                achievements. Consistent performance across diverse subjects,
                cultivated strong foundation. Committed to maximizing potential,
                driven by intellectual curiosity. Passionate about continuous
                learning, growth mindse
              </p>
            </div>
          </div>

          <div className="part2">
            <h5>2023 - 2024</h5>
            <h2 style={{color: props.mode ? "#3c3e41" : "#54585f"}}>Job Experiance</h2>
            <div className="part2-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>Software Intern at IEEE </h3>
                  <h5> Duration (July 2023 - August 2023)</h5>
                </div>
                <div className="date">
                  <h5>4.70/5</h5>
                </div>
              </div>
              <hr />
              <p>
                I worked on a web development project aimed at improving the
                online platform for collecting and analyzing data related to AI
                ethics, enhancing its functionality and user experience through
                iterative updates to streamline data collection and analysis
                processes in an efficient manner.
              </p>
            </div>

            <div className="part2-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>Software Intern at HAL</h3>
                  <h5> Duration (July 2023 - August 2023)</h5>
                </div>
                <div className="date">
                  <h5>4.70/5</h5>
                </div>
              </div>
              <hr />
              <p>
                I worked on a project focused on developing a handwritten text
                recognition and extraction system, utilizing the PyTesseract
                library to accurately identify and extract handwritten text,
                streamlining data processing and analysis for enhanced
                efficiency and increased productivity.
              </p>
            </div>

            <div className="part2-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
              <div className="inner">
                <div className="title">
                  <h3>Full Stack Intern at PayRup</h3>
                  <h5> Duration (Feb 2024 - july 2024)</h5>
                </div>
                <div className="date" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
                  <h5>4.70/5</h5>
                </div>
              </div>
              <hr />
              <p>
                During my internship, I underwent a comprehensive training
                period in full-stack development, where I acquired valuable
                skills in JavaScript, Node.js, React, Next.js, and other
                essential technologies. This training equipped me with the
                necessary knowledge to tackle web
                development projects effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
