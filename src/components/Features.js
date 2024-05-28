import React from "react";

function Features(props) {
  return (
    <body>
      <section className="features" id="features">
        <h4 className="smell">FEATURES</h4>
        <h2 className="horse" style={{color: props.mode ? "#3c3e41" : "#54585f"}}>What I Do</h2>
        <div className="features-content">
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}} >
            <i className="fa-solid fa-code"></i>
            <h3 >Web Development</h3>
            <p>
              I specialize in web
              development, crafting functional and user-friendly interfaces from
              design concepts. With expertise and precision, I ensure seamless
              online experiences, advancing technology with every keystroke.
            </p>
          </div>
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}} >
            <i className="fa-brands fa-android"></i>
            <h3>APP Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              repellendus cum nemo laborum a sint, non recusandae cumque
              deleniti veniam nam, libero velit ab dicta adipisci laudantium
              facere alias.
            </p>
          </div>
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <i className="fa-brands fa-apple"></i>
            <h3>IOS Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              repellendus cum nemo laborum a sint, non recusandae cumque
              deleniti veniam nam, libero velit ab dicta adipisci laudantium
              facere alias.
            </p>
          </div>
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <i className="fa-brands fa-google"></i>
            <h3>Google Expert</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              repellendus cum nemo laborum a sint, non recusandae cumque
              deleniti veniam nam, libero velit ab dicta adipisci laudantium
              facere alias.
            </p>
          </div>
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <i className="fa-brands fa-aws"></i>
            <h3>AWS Certification</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              repellendus cum nemo laborum a sint, non recusandae cumque
              deleniti veniam nam, libero velit ab dicta adipisci laudantium
              facere alias.
            </p>
          </div>
          <div className="features-box" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "5px 5px 6px #d1d9e6, -5px -5px 6px #ffffff"}}>
            <i className="fa-solid fa-cloud"></i>
            <h3>Cloud Expert</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              repellendus cum nemo laborum a sint, non recusandae cumque
              deleniti veniam nam, libero velit ab dicta adipisci laudantium
              facere alias.
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Features;
