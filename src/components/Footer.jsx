import { Link } from 'react-router-dom';

const InstagramGallery = ({ posts }) => {
  return (
    <div className="relative w-full mt-12">
      <div className="flex flex-wrap w-full">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="relative group w-1/3 md:w-1/6 aspect-square"
          >
            {/* Hover Banner ABOVE image */}
            <div className="absolute -top-[36px] w-[225px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 pointer-events-none">
              <div className="bg-black text-white px-5 py-2 w-[120%] text-sm flex justify-between items-center font-semibold">
                <span>Follow me on Instagram</span>
                <svg className="w-6 h-6 fill-white mr-2" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm7.45 3.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                </svg>
              </div>
            </div>

            {/* Instagram Image */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
            </div>

            {/* Likes + Comments Center Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 stroke-white fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 
                      2 12.28 2 8.5 2 5.42 4.42 3 
                      7.5 3c1.74 0 3.41 0.81 4.5 
                      2.09C13.09 3.81 14.76 3 16.5 
                      3 19.58 3 22 5.42 22 
                      8.5c0 3.78-3.4 6.86-8.55 
                      11.54L12 21.35z"/>
                  </svg>
                  <span className="text-sm mt-1">1,231</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 stroke-white fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M20 2H4a2 2 0 0 0-2 2v20l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                  </svg>
                  <span className="text-sm mt-1">543</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




const FooterLinks = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 text-sm">
      <div>
        <p className="font-serif text-lg font-medium mb-4 md:mb-0">Personal Travel</p>
        <p className="space-x-6 text-gray-600">Copyrights © 2020. All Rights Reserved.</p>
      </div>
      <div className="flex space-x-6 text-gray-600">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/about" className="hover:text-black">About me</Link>
        <Link to="/categories" className="hover:text-black">Categories</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
      </div>
    </div>
  );
};


const Footer = ({ instagramPosts }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <InstagramGallery posts={instagramPosts} />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
