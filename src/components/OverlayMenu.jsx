import { useEffect, useState } from 'react';
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
    <div
      className={`fixed inset-0 z-30 text-white transition-all duration-500 ease-out ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}

      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="relative w-full h-full max-w-[1920px] mx-auto">

        {/* Menu Links - Centered vertically, aligned left */}
        <div
          className="absolute flex flex-col space-y-10 font-serif"
          style={{
            width: '706px',
            fontSize: '48px',
            top: '50%',
            left: '140px',
            transform: 'translateY(-50%)',
          }}
        >
          {['Home', 'About me', 'Categories', 'Contact'].map((item, index) => (
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
              key={index}
              onClick={onClose}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`transition-all duration-300 ${
                hoveredLink === item ? 'text-white' : 'text-gray-400'
              }`}
            >
              {hoveredLink === item ? `— ${item}` : item}
            </Link>
          ))}
        </div>

        {/* Newsletter Box - Right side */}
        <div
          className="absolute border border-gray-700 p-8 backdrop-blur-sm"
          style={{
            width: '580px',
            height: '225px',
            top: '50%',
            left: '800px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
          }}
        >
          <h2 className="text-xl font-serif mb-2">Newsletter</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe to receive exclusive content updates, travel & photo tips!
          </p>

          <div className="flex items-center">
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Email address</label>
              <input
                type="email"
                placeholder="example@"
                className="w-[260px] bg-transparent border-b border-gray-400 outline-none text-white placeholder-gray-500 py-1"
              />
            </div>
            <button
              className="ml-4 bg-white text-black font-semibold"
              style={{ width: '140px', height: '40px' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
