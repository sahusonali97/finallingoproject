import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'





const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING' text='Our virtual classes are real-time live streaming with native teachers who have years of experience teaching foreign languages. You will learn and practice foreign language at your convenience without stepping out from your home or office.
' />
            <TrainingSection />
           
            <Footer />
        </div>
    )
}

export default Training