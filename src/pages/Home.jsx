import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Intro from '../components/intro/Intro'
import About from '../components/about/About'
import Services from '../components/service/Services'
import Info from '../components/info/Info'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Intro/>
        <About/>
        <Services/>
        <Info/>
    </>
  )
}

export default Home