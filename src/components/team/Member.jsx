import React from 'react'
import "./team.scss"
import tLinkedin from '../../assets/linkedin.png'

export const Member = ({ mImg, mName, mPosition, mLinkedin}) => {
  return (
    <div className='member'>
        <img src={mImg} alt="member" />
        <h2>{mName}</h2>
        <p>{mPosition}</p>
        <a href={mLinkedin}>
            <img src={tLinkedin} alt="" />
        </a>
    </div>
  )
}
