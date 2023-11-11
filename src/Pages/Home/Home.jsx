import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import CameraBattary from '../../Components/CameraBattary/CameraBattary'
import PossiblitiesPerformance from '../../Components/PossiblitiesPerformance/PossiblitiesPerformance'
import Innovative from '../../Components/Innovative/Innovative'
import NewArrivels from '../../Components/NewArrivels/NewArrivels'
import AccordionAh from '../../Components/AccordionAh/AccordionAh'
import FooterAh from '../../Components/FooterAh/FooterAh'
function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CameraBattary />
            <PossiblitiesPerformance />
            <Innovative />
            <NewArrivels />
            <AccordionAh />
            <FooterAh />
        </div>
    )
}

export default Home