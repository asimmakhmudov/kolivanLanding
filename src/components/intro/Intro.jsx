import React from 'react'
import './intro.scss'
import mailIcon from "../../assets/mailIcon.svg"
import sendIcon from "../../assets/sendIcon.svg"

const Intro = () => {
  return (
    <div className='intro'>
        <h1>Transportation of passengers and cargo</h1>
        <p>Cargo and passenger transportation services offer reliable and efficient solutions for moving goods and people from one location to another.</p>
        <form action="">
          <img src={mailIcon} alt="" />
          <input type="email" placeholder='Enter your email'/>
          <button><img src={sendIcon} alt="sendIcon" /><p>Send</p></button>
        </form>
    </div>  
  )
}

export default Intro