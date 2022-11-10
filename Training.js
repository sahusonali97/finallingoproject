import React from 'react'
import Footer from './Footer'
import HeroImage from './HeroImage'
import Navbar from './Navbar'
import TrainingSection from './Training'





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
