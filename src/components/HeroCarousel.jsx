import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      (prevIndex + 1) % slides.length
    );
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 h-[900px]">
      {/* Sliding background */}
      <div
        className="flex h-full transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex-shrink-0 h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* White Card */}
      <div
        className="absolute bg-white text-black shadow-lg z-10 p-4 sm:p-6 lg:p-8"
        style={{
          width: '705px',
          height: '498px',
          left: '240px',
          top: '402px',
        }}
      >
        <div
          className="absolute"
          style={{
            width: '605px',
            height: '356px',
            left: '71px',
            top: '75px',
          }}
        >
          {/* Category */}
          <p className="mb-2" style={{ fontSize: '18px', lineHeight: '26px', color: '#030303' }}>
            {slides[currentIndex].category}
          </p>

          {/* Title */}
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: '60px',
              color: '#000000',
            }}
          >
            {slides[currentIndex].title}
          </h2>

          {/* Excerpt */}
          <p className="mb-6" style={{ fontSize: '22px', lineHeight: '32px', color: '#949799' }}>
            {slides[currentIndex].excerpt}
          </p>

          {/* Read more button */}
          <Link
            to={`/articles/${slides[currentIndex].id}`}
            className="inline-flex items-center justify-center bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            style={{ width: '155px', height: '55px' }}
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className="absolute flex z-20"
        style={{
          width: '128px',
          height: '64px',
          top: '402px',
          left: '881px',
        }}
      >
        {/* Left */}
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="w-1/2 h-full flex items-center justify-center bg-black text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="w-1/2 h-full flex items-center justify-center bg-white text-black border-t border-b border-r border-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
