//import React from "react"
import AccountMenu from './navbar.js'
import * as React from 'react';
import MyCard from './cards.js';
import Footer from './footer.js';
import Carousel from './Carousel.js';



const Homepage = () => {



    return (
        <>
            <AccountMenu />
            <Carousel />
            <MyCard />
            <Footer />
        </>
    )
}

export default Homepage


