import React, { useState } from 'react';
import slide from "../assets/img/background-slide.png";
function Carousel() {
    const slides = [slide, slide, slide];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-full overflow-hidden">
            <div className="relative w-full">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full">
                            <img src={slide} alt={`slide ${index + 1}`} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Điều khiển Carousel */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                onClick={prevSlide}>
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;