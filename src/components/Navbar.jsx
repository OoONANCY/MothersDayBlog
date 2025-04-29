import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close mobile nav when screen resizes above lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="z-40 flex items-center justify-between px-4 sm:px-8 lg:px-0 lg:absolute w-full lg:w-[1440px]"
        style={{
          top: '40px',
          left: '240px',
          height: '39px',
        }}
      >
        {/* Hamburger Toggle */}
        <div
          className="cursor-pointer lg:hidden flex-shrink-0"
          onClick={() => setMobileNavOpen(prev => !prev)}
        >
          {mobileNavOpen ? (
            <FiX className="text-white w-8 h-8 transition-transform duration-300 rotate-90" />
          ) : (
            <FiMenu className="text-white w-8 h-8 transition-transform duration-300" />
          )}
        </div>

        {/* Overlay Menu Hamburger (desktop only) */}
        <div
          className="hidden lg:block cursor-pointer flex-shrink-0"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu className="text-white w-8 h-8" />
        </div>

        {/* Center Title */}
        <div
          className="text-white text-lg sm:text-2xl lg:text-[35px] text-center flex-grow"
          style={{ fontFamily: `'Cormorant Garamond', serif` }}
        >
          Personal Travel Blog
        </div>

        {/* Search Icon */}
        <div className="flex-shrink-0">
          <FiSearch className="text-white w-8 h-8" />
        </div>
      </nav>

      {/* Mobile Collapsible Menu */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-black bg-opacity-95 text-white absolute top-[90px] left-0 w-full z-30 px-6 py-8 animate-slide-down">
          <ul className="space-y-6 text-xl font-serif">
            {['Home', 'About me', 'Categories', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="block hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Full screen overlay menu (desktop) */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
