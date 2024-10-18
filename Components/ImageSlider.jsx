import React from 'react';
import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import './ImageSlider.css';

export default function ImageSlider({ SlideImages }) {
    const Images = SlideImages.SlideImgs;
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prevSlide) => (prevSlide === Images.length - 1 ? 0 : prevSlide + 1));
        }, 5000)
        return () => clearInterval(interval);
    }, [Images.length])
    // Right Arrow click
    const nextSlide = () => {
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);

    }
    // Left Arrow click
    const prevSlide = () => {
        setSlide(slide === 0 ? Images.length - 1 : slide - 1);

    }

    return (
        <div className="ImageSlider-container">
            <BsArrowLeftCircleFill className='arrow arrow-Left' onClick={prevSlide} />
            {
                Images.map((img, index) => {
                    return (
                        <img
                            src={img.src}
                            alt={img.alt}
                            key={index}
                            className={slide === index ? 'slide' : 'slide slide-hidden'} />
                    )
                })
            }
            <BsArrowRightCircleFill className='arrow arrow-Right' onClick={nextSlide} />

            <span className='indicators'>
                {
                    Images.map((_, index) => {
                        return (
                            <button
                                key={index}
                                className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
                                onClick={() => setSlide(index)}></button>
                        )
                    })
                }
            </span>

        </div>
    )
}
