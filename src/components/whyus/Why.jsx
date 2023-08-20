import React from "react";
import { styled } from "styled-components";
const Why = ({ wImg, wHeader, wParagraph, wColor }) => {
  const WhyBox = styled.div`
    &:hover {
      background-color: ${wColor};
    }
    display: flex;
    width: 40vw;
    min-height: 25vh;
    margin: 35px;
    border-radius: 16px;
    transition: all ease 300ms;
  `;
  
  const WhyImg = styled.div`
    background-color: ${wColor};
  `;

  return (
    <WhyBox className="why">
      <WhyImg className="whyImg">
        <img src={wImg} alt="whyus" />
      </WhyImg>
      <div className="whyContent">
        <h3>{wHeader}</h3>
        <p>{wParagraph}</p>
      </div>
    </WhyBox>
  );
};

export default Why;
