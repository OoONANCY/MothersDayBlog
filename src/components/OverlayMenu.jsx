import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu = ({ isOpen, onClose }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowAnimation(true), 10);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black z-50 text-white transition-all duration-500 ease-out 
      ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ width: '1920px', height: '1080px' }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-12 left-16 text-white text-4xl"
      >
        <FiX />
      </button>

      {/* Blog Title */}
      <h1 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-3xl font-bold font-serif">
        Personal Travel Blog
      </h1>

      {/* Search Icon */}
      <div className="absolute top-12 right-16 text-white text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Sidebar Container */}
      <div
        className="absolute flex flex-col space-y-10 font-serif"
        style={{
          width: '706px',
          height: '449px',
          top: '316px',
          left: '240px',
          fontSize: '48px',
        }}
      >
        {['Home', 'About me', 'Categories', 'Contact'].map((item, index) => (
          <Link
            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
            key={index}
            onClick={onClose}
            onMouseEnter={() => setHoveredLink(item)}
            onMouseLeave={() => setHoveredLink(null)}
            className={`transition-all duration-300 ${hoveredLink === item ? 'text-white' : 'text-gray-400'
              }`}
          >
            {hoveredLink === item ? `--- ${item}` : item}
          </Link>
        ))}
      </div>

      {/* Newsletter Container */}
      <div
        className="absolute border border-gray-700 p-8"
        style={{
          width: '828px',
          height: '289px',
          top: '396px',
          left: '852px',
        }}
      >
        <h2 className="text-2xl font-serif mb-4">Newsletter</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Subscribe to receive exclusive content updates, travel & photo tips!
        </p>

        {/* Horizontal Flex */}
        <div className="flex items-center">
          {/* Left side: Label + Input */}
          <div className="flex flex-col">
            <label className="text-sm text-white mb-2">Email address</label>
            <input
              type="email"
              placeholder="example@"
              className="w-[450px] bg-transparent border-b border-gray-400 outline-none text-white placeholder-gray-500 py-2"
            />
          </div>

          {/* Right side: Subscribe Button */}
          <button
            className="ml-8 bg-white text-black font-semibold"
            style={{
              width: '245px',
              height: '55px',
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

    </div>
  );
};

export default OverlayMenu;
