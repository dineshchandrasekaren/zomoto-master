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
                <IoIosArrowDropleftCircle />
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
                <IoIosArrowDroprightCircle />
            </div>
        )
    };

    // isArrow, speed, show, scroll, isInitial, 
    // isInfinite, isAutoPlay, pause, scalable

    let settings = {
        arrows: props.isArrow,
        speed: props.speed,
        slidesToShow: props.show,
        slidesToScroll: props.scroll,
        initialSlide: props.isInitial,
        useCSS: true,
        infinite: props.isInfinite,
        useTransform: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: props.isAutoPlay,
        autoplaySpeed: 2000,
        pauseOnHover: props.pause,
        responsive: props.scalable && [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: props.lgShow ?props.lgShow:4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:props.mdShow ? props.mdShow:4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow:props.smShow ? props.smShow : 3,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <Slider  {...settings}>
            {props.children}
        </Slider>
    )
}

export default Carousel;
