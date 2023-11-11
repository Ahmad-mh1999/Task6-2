import React from 'react'
import './NewArrivels.css'
import CardSlide from '../CardSlide/CardSlide'
import ProductsCards from './../ProductsCards/ProductsCards';
import { Data } from "../../Data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function NewArrivels() {
    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <section className='Sec4'>
            <div className="container">
            <div className='text-center'>
                <h1 className="fw-semibold">NEW ARRIVALS</h1>
                <p className="fs-3 opacity-50  ">FIND THE PERFECT PHONE FOR YOU</p>
            </div>
            <CardSlide />

            </div>
        </section>

    )
}

export default NewArrivels