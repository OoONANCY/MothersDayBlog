import { Link } from 'react-router-dom';

const InstagramGallery = ({ posts }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-center">Follow me on Instagram</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link} 
            className="aspect-square overflow-hidden bg-gray-200 relative group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={post.image} 
              alt="Instagram post" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm hover:underline">About Me</Link></li>
            <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
            <li><Link to="/work-with-me" className="text-sm hover:underline">Work With Me</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            <li><Link to="/category/asia" className="text-sm hover:underline">Asia</Link></li>
            <li><Link to="/category/europe" className="text-sm hover:underline">Europe</Link></li>
            <li><Link to="/category/africa" className="text-sm hover:underline">Africa</Link></li>
            <li><Link to="/category/americas" className="text-sm hover:underline">Americas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Destinations</h4>
          <ul className="space-y-2">
            <li><Link to="/destination/japan" className="text-sm hover:underline">Japan</Link></li>
            <li><Link to="/destination/italy" className="text-sm hover:underline">Italy</Link></li>
            <li><Link to="/destination/morocco" className="text-sm hover:underline">Morocco</Link></li>
            <li><Link to="/destination/peru" className="text-sm hover:underline">Peru</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Travel Tips</h4>
          <ul className="space-y-2">
            <li><Link to="/travel-tips/packing" className="text-sm hover:underline">Packing Tips</Link></li>
            <li><Link to="/travel-tips/budget" className="text-sm hover:underline">Budget Travel</Link></li>
            <li><Link to="/travel-tips/photography" className="text-sm hover:underline">Photography</Link></li>
            <li><Link to="/travel-tips/solo" className="text-sm hover:underline">Solo Travel</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          <p>Personal Travel Blog © 2025. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-gray-800">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-800">Terms of Use</Link>
          <Link to="/sitemap" className="hover:text-gray-800">Sitemap</Link>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ instagramPosts }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="px-4 md:px-8 lg:px-16">
        <InstagramGallery posts={instagramPosts} />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;