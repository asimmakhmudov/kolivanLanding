import React, { useState } from "react";
import "./about.scss";
import aboutImg from "../../assets/truck1.png";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const buttonStyle = {
    background: readMore ? "var(--white)" : "var(--primary)",
    color: readMore ? "var(--secondary)" : "var(--white)",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    padding: "15px",
    margin: "15px 10px",
    width: "200px",
    borderRadius: "6px",
    cursor: "pointer",
    outline: "none",
    border: readMore ? "1px solid red" : "none",
    transition: "all ease 400ms",
    
  };
  
  const paragraphStyle = {
    height: readMore ? "120px" : "0px",
    transition: "all ease 400ms",
  };

  const readMoreHandling = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about">
      <div className="cont">
        <div>
          <h2>About us</h2>
          <p>
            Kolivan is a revolutionary platform that aims to connect vehicle
            owners with customers, making the process of finding cargo or
            passenger transportation simple and efficient. Our cutting-edge
            technology utilizes AI models to offer optimal transportation
            solutions.
          </p>
          <p
            style={paragraphStyle}
          >
            Finding the right transportation service can often be a daunting and
            time-consuming task. Whether you need to transport goods or
            passengers, the process typically involves numerous phone calls,
            negotiations, and logistical challenges. Kolivan streamlines this
            process by providing a user-friendly platform where customers can
            easily find the transportation they need.
          </p>
          <button onClick={readMoreHandling} style={buttonStyle}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="cont">
        <img src={aboutImg} alt="aboutTruck" />
      </div>
    </div>
  );
};

export default About;
