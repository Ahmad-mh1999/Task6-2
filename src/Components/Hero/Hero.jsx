import Image1 from './../../image/phono-slider-1.jpeg'
import Image2 from './../../image/phono-slider-2.jpeg'
import Image3 from './../../image/phono-slider-3.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Hero.css';

function Hero() {
    return (
        
        <Carousel fade className='Carousel-all'>
            <Carousel.Item className='Carousel-all'>
            <img src={Image1 } />
                <Carousel.Caption className='carousel1'>
                    <h2 class="mb-2">Zania Black Edition</h2>
                    <h2 class="mb-2">Curvy Bevel Dual Audio</h2>
                    <Button class="mt-3 ">Shope Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Image2 } />
                <Carousel.Caption className='carousel2'>
                    <h3 class="mb-3">4K Resolution</h3>
                    <h1 class="mb-3">Exclusive Steel Frame</h1>
                    <Button class="  mt-2">buy Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Image3 } />
                <Carousel.Caption className='carousel3'>
                    <h2 class="mb-2">Delta Zertiga Processor</h2>
                    <h2 class="mb-2">Full Screen Display</h2>
                    <Button class="mt-3 ">Shope Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero


