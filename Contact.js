import React from 'react'
import Footer from './Footer'
import HeroImage from './HeroImage'
import Navbar from './Navbar'
import Form from './Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT' text='Contact With Us' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
