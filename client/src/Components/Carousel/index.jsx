import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';


const Carousel = (props) => {

    const PrevArrow = (props) => {
        const { className, onClick } = props
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <IoIosArrowDropleftCircle    />
            </div>
        )
    };

    const NextArrow = (props) => {
        const { className, onClick } = props
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <IoIosArrowDroprightCircle  />
            </div>
        )
    };


    let settings = {
        arrows: true,
        speed: 800,
        slidesToShow: props.show,
        slidesToScroll: props.scroll,
        initialSlide: 0,
        useCSS: true,
        infinite: false,
        useTransform: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider  {...settings}>
            {props.children}
        </Slider>
    )
}

export default Carousel;
