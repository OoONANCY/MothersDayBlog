import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-[150px] pt-10 flex items-center justify-between">
      {/* Left: Hamburger or Close Icon */}
      <div
        className="hidden lg:block cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? (
          <FiX className="w-8 h-8 transition-all duration-300 text-white" />
        ) : (
          <FiMenu className="w-8 h-8 transition-all duration-300 text-black" />
        )}
      </div>

      {/* Center: Blog Title */}
      <Link to="/" className="text-center">
        <h1
          className={`text-xl font-serif font-medium transition-colors duration-300 ${
            menuOpen ? 'text-white' : 'text-black'
          }`}
        >
          Mother's Day Blog
        </h1>
      </Link>

      {/* Right: Search Icon */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
            menuOpen ? 'text-white' : 'text-black'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m2.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
