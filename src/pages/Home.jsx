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

const Home = () => {
  return (
    <>
        <Intro/>
        <About/>
        <Services/>
        <Info/>
        <Whyus/>
        {/* <HowItWorks/> */}
        <Team/>
        <Faqs/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home