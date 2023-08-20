import React from "react";
import stepBg from "../../assets/stepBg.png"

const How = ({ hImg, hHeader, hParagraph, barStyle }) => {

  return (
    <div className="how">
      <div className="hLeft">
        <img src={hImg} alt="step" className="mockup"/>
        <img src={stepBg} alt="step" className="stepBg"/>
      </div>
      <div className="hRight" style={barStyle}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="content">
          <h3>{hHeader}</h3>
          <p>{hParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default How;
