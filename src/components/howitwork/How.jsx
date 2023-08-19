import React from "react";

const How = ({hImg, hHeader, hParagraph}) => {
  return (
    <div className="how">
      <div className="hLeft">
        <img src={hImg} alt="step" />
      </div>
      <div className="hRight">
        <div className="">
          <h3>{hHeader}</h3>
          <p>{hParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default How;
