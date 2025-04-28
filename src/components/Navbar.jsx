import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';
import OverlayMenu from './OverlayMenu'; // new import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="absolute z-40 flex items-center bg-transparent"
        style={{
          width: '1440px',
          height: '39px',
          left: '240px',
          top: '40px',
        }}
      >
        {/* Hamburger Menu */}
        <div
          className="absolute cursor-pointer"
          style={{
            width: '32px',
            height: '32px',
            left: '0px',
            top: '4px',
          }}
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={32} className="text-white" />
        </div>

        {/* Center Text */}
        <div
          className="absolute"
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontWeight: 'bold',
            fontSize: '32px',
            left: '590px',
            top: '4px',
          }}
        >
          Personal Travel Blog
        </div>

        {/* Search Icon */}
        <div
          className="absolute"
          style={{
            width: '31.94px',
            height: '31.94px',
            left: '1408px',
            top: '4px',
          }}
        >
          <FiSearch size={31.94} className="text-white" />
        </div>
      </nav>

      {/* Full screen menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
