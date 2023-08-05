import React from 'react'
import Service from './Service'
import sImgOne from '../../assets/truckUnscreen.gif'
import sImgTwo from '../../assets/busUnscreen.gif'
import sImgThree from '../../assets/wheelUnscreen.gif'

const Services = () => {
  return (
    <div className='services'>
        <h2>Our Services</h2>
        <div className='servicesBox'>
            <Service sImg={sImgOne} sHeader={"Cargo transportation"} sParagraph={"Trucking service delivers your cargo safely from one point to another using trucks and other vehicles"}/>
            <Service sImg={sImgTwo} sHeader={"Cargo transportation"} sParagraph={"Trucking service delivers your cargo safely from one point to another using trucks and other vehicles"}/>
            <Service sImg={sImgThree} sHeader={"Cargo transportation"} sParagraph={"Trucking service delivers your cargo safely from one point to another using trucks and other vehicles"}/>
        </div>
    </div>
  )
}

export default Services