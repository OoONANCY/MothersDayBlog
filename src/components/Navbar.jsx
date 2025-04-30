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
      <nav className="absolute top-0 left-0 w-full z-40 px-[150px]">
        <div className="mx-auto w-full flex items-center justify-between pt-10">
          {/* Hamburger (mobile) */}
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setMobileNavOpen(prev => !prev)}
          >
            {mobileNavOpen ? (
              <FiX className="text-white w-8 h-8 rotate-90 transition-transform duration-300" />
            ) : (
              <FiMenu className="text-white w-8 h-8 transition-transform duration-300" />
            )}
          </div>

          {/* Hamburger (desktop overlay menu) */}
          <div
            className="hidden lg:block cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="text-white w-8 h-8" />
          </div>

          {/* Center Logo */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 text-white text-xl sm:text-2xl lg:text-[30px]"
            style={{ fontFamily: `'Cormorant Garamond', serif` }}
          >
            Mother's Day Blog
          </div>

          {/* Search Icon (right) */}
          <div>
            <FiSearch className="text-white w-8 h-8" />
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
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

      {/* Desktop Overlay Menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
