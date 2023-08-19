import React from 'react'
import './howitwork.scss'
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import How from './How';

const HowItWorks = () => {
  return (
    <div className='howItWork'>
        <h2>How It Works</h2>
        <div className='hBox'>
            <How hImg={step1} hHeader="Choose Category" hParagraph="Select a category  and submit a request"/>
        </div>
    </div>
  )
}

export default HowItWorks