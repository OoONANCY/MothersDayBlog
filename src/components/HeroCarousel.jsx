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
    <div className="relative overflow-hidden bg-gray-100 h-[660px]">
      {/* Background image slides */}
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
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* White Card */}
      <div
        className="absolute bg-white text-black shadow-lg z-10 p-4 sm:p-6 lg:p-8"
        style={{
          width: '535px',
          height: '400px',
          left: '180px',
          top: '280px',
        }}
      >
        <div
          className="absolute"
          style={{
            width: '440px',
            height: '240px',
            left: '50px',
            top: '40px',
          }}
        >
          <p className="mb-0 mt-2 text-[13px] leading-[26px] text-black">
            {slides[currentIndex].category}
          </p>
          <h2
            className="mb-2 mt-2 leading-tight text-[50px] top-[4px]"
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              color: '#000000',
            }}
          >
            {slides[currentIndex].title}
          </h2>
          <p className="mb-4 mt-2 text-[16px] leading-[30px] text-[#949799]">
            {slides[currentIndex].excerpt}
          </p>
          <Link
            to={`/articles/${slides[currentIndex].id}`}
            className="inline-flex items-center justify-center bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            style={{ width: '125px', height: '40px' }}
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className="absolute flex z-20"
        style={{
          width: '118px',
          height: '54px',
          top: '280px',
          left: '657px',
        }}
      >
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="w-1/2 h-full flex items-center justify-center bg-black text-white"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="w-1/2 h-full flex items-center justify-center bg-white text-black border-t border-b border-r border-black"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
