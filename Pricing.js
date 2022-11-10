import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PricingCards from './Pricing'
import HeroImage from './HeroImage'
import Video from './Video'
import LanGer from './LanGer'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Video/>
            <HeroImage heading='Choose your Language' text='.' />
            <PricingCards />
            <LanGer/>
            <Footer />
        </div>
    )
}

export default Pricing
