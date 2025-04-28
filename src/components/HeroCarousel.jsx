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
    <div className="relative overflow-hidden bg-gray-100" style={{ height: '900px' }}>
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
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        className="absolute flex"
        style={{
          width: '128px',
          height: '64px',
          top: '402px',
          left: '881px',
        }}
      >
        {/* Left Button */}
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

        {/* Right Button */}
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

      {/* White Card */}
      <div
        className="absolute bg-white text-black p-8 flex flex-col justify-start shadow-lg"
        style={{
          width: '605px',
          height: '498px',
          left: '290px',
          top: '402px',
        }}
      >
        {/* Category Text */}
        <p className="text-sm mb-2" style={{ fontSize: '16px' }}>
          {slides[currentIndex].category}
        </p>
        
        {/* Title */}
        <h2
          className="font-bold mb-4 leading-tight"
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: '32px',
          }}
        >
          {slides[currentIndex].title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 text-sm">
          {slides[currentIndex].excerpt}
        </p>

        {/* Read more button */}
        <Link
          to={`/articles/${slides[currentIndex].id}`}
          className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HeroCarousel;
