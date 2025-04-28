import { FiX } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';

const OverlayMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-95 z-50 text-white flex flex-col items-start px-24 py-20" style={{ width: '1920px', height: '1080px' }}>
      {/* Close Icon */}
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

      {/* Sidebar Links */}
      <div className="flex flex-col mt-40 space-y-8 text-4xl font-serif font-light">
        <Link to="/" onClick={onClose} className="hover:underline">Home</Link>
        <Link to="/about" onClick={onClose} className="hover:underline">About me</Link>
        <Link to="/categories" onClick={onClose} className="hover:underline">Categories</Link>
        <Link to="/contact" onClick={onClose} className="hover:underline">Contact</Link>
      </div>

      {/* Newsletter Box */}
      <div className="absolute top-1/2 right-16 bg-transparent border border-gray-700 p-8 w-[600px]">
        <h2 className="text-2xl font-serif mb-4">Newsletter</h2>
        <p className="text-gray-400 mb-4 text-sm">Subscribe to receive exclusive content updates, travel & photo tips!</p>
        <form className="flex items-center space-x-2">
          <input 
            type="email" 
            placeholder="example@" 
            className="flex-1 bg-transparent border-b border-gray-400 outline-none text-white placeholder-gray-500 py-2"
          />
          <button type="submit" className="bg-white text-black px-4 py-2 text-sm font-semibold">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default OverlayMenu;
