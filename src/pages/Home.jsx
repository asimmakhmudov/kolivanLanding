import React from 'react'
import Intro from '../components/intro/Intro'
import About from '../components/about/About'
import Services from '../components/service/Services'
import Info from '../components/info/Info'
import Whyus from '../components/whyus/Whyus'
import { Faqs } from '../components/faq/Faqs'
import { Footer } from '../components/footer/Footer'
import { Team } from '../components/team/Team'
import HowItWorks from '../components/howitwork/HowItWorks'
import Contact from '../components/contact/Contact'
import Ads from '../components/googleads/Ads'

const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Intro/>
        <About/>
        <Services/>
        <Info/>
        <Ads dataAdSlot='2127429688'/>
        <Whyus/>
        <HowItWorks/>
        <Team/>
        <Faqs/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home