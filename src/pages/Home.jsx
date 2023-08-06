import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Intro from '../components/intro/Intro'
import About from '../components/about/About'
import Services from '../components/service/Services'
import Info from '../components/info/Info'
import Whyus from '../components/whyus/Whyus'
import { Faqs } from '../components/faq/Faqs'
import { Footer } from '../components/footer/Footer'
import { Team } from '../components/team/Team'

const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Intro/>
        <About/>
        <Services/>
        <Info/>
        <Whyus/>
        <Team/>
        <Faqs/>

        <Footer/>
    </>
  )
}

export default Home