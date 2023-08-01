import React from 'react'
import "./service.scss"

const Service = ({sImg, sHeader, sParagraph}) => {
  return (
    <div className='service'>
        <img src={sImg} alt="" />
        <h3>{sHeader}</h3>
        <p>{sParagraph}</p>
    </div>
  )
}

export default Service