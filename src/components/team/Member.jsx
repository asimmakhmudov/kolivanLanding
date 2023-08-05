import React from 'react'
import "./team.scss"
import tLinkedin from '../../assets/linkedin.png'

export const Member = ({ mImg, mName, mPosition }) => {
  return (
    <div className='member'>
        <img src={mImg} alt="member" />
        <h2>{mName}</h2>
        <p>{mPosition}</p>
        <a href="">
            <img src={tLinkedin} alt="" />
        </a>
    </div>
  )
}
