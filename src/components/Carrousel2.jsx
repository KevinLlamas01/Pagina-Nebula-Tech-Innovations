import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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

import empresa1 from '.././assets/LogoHBMF.webp';
import empresa2 from '.././assets/LogoLaCurva.webp';
import empresa3 from '.././assets/LogoUneme.webp';
import empresa4 from '.././assets/LogoElPino.webp';

const Carousel2 = () => {
    return (
        <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            arrows={false}
            showDots={false}
            swipeable={true}
            draggable={true}
            itemClass="carousel-item2"
        >
            <img className='w-auto h-[85px]' src={empresa1} alt="Logotipo empresa 1" />
            <img className='w-auto h-[85px]' src={empresa2} alt="Logotipo empresa 2" />
            <img className='w-auto h-[85px]' src={empresa3} alt="Logotipo empresa 3" />
            <img className='w-auto h-[85px]' src={empresa4} alt="Logotipo empresa 4" />
        </Carousel>
    );
}

export default Carousel2;
