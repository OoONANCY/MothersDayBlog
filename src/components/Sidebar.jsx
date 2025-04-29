import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

const AuthorProfile = () => {
  const iconComponents = {
    facebook: <FaFacebookF className="text-xl" />,
    instagram: <FaInstagram className="text-xl" />,
    youtube: <FaYoutube className="text-xl" />,
    globe: <FaGlobe className="text-xl" />,
  };

  return (
    <div className="relative w-full md:w-[338px] h-[580px] mx-auto mt-6">
      {/* Border box */}
      <div className="absolute top-[76px] left-0 w-full h-[428px] border border-black bg-white z-0" />

      {/* Profile image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[152px] h-[152px] rounded-full overflow-hidden z-10 border-[6px] border-white bg-gray-200">
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/anna-from-when-marnie-was-there.jpg"
          alt="Author"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author content */}
      <div className="absolute top-[152px] w-full text-center px-6 z-10">
        <h3 className="text-[26px] font-bold font-serif mb-4">Nancy Sharma</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          For as long as I can remember I’ve been obsessed with the idea of travel.
          I was always that person who was forever daydreaming of foreign lands
          and unfamiliar cultures; coming up with travel itineraries that would
          challenge my perceptions and help me gain a deeper understanding of the world.
        </p>
      </div>

      {/* Follow + social icons block (outside bottom border) */}
      <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-full z-10">
        <div className="text-base font-semibold mb-2">Follow me</div>
        <div className="flex space-x-3">
          {[
            { icon: 'facebook', label: 'Facebook' },
            { icon: 'instagram', label: 'Instagram' },
            { icon: 'youtube', label: 'YouTube' },
            { icon: 'globe', label: 'Blog' },
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={item.label}
              className="bg-black text-white p-3 w-[52px] h-[52px] flex items-center justify-center"
            >
              {iconComponents[item.icon]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationsList = ({ destinations }) => (
  <div className="text-center flex flex-col pt-2 gap-2 mt-0 mb-[-8px] w-full md:w-[338.5px] px-6">
    <h3 className="text-black text-2xl font-semibold mb-0 text-left">Destinations</h3>
    {destinations.slice(0, 4).map((destination) => (
      <div
        key={destination.id}
        className="bg-black text-white w-full max-w-[306px] h-[93px] flex flex-col justify-center items-center border-t border-b border-white"
      >
        <div className="w-6 h-0.5 bg-white mb-2" />
        <div className="text-md">{destination.name}</div>
      </div>
    ))}
    <button className="bg-black text-white w-full max-w-[306px] h-[40px] text-sm font-medium">

      Read more
    </button>
  </div>
);

const Newsletter = () => (
  <div className="bg-white text-black border border-black text-center px-6 py-6 mt-[36px] w-full md:w-[338px] md:h-[316px]">
    <h3 className="text-2xl font-serif font-semibold mb-2">Newsletter</h3>
    <p className="text-sm mb-4 text-gray-700">
      Subscribe to receive exclusive content updates, travel & photo tips!
    </p>
    <label className="text-sm text-left mb-1 block">Email address</label>
    <input
      type="email"
      placeholder="example@"
      className="w-full border-b border-black bg-transparent py-1 mb-4"
    />
    <button className="bg-black text-white w-[278px] h-[55px] mt-6 py-2 text-sm font-medium">
      Subscribe
    </button>
  </div>
);

const WhereToNext = () => (
  <div className="bg-white text-black border border-black px-6 py-8 mt-6 w-full md:w-[338px] md:h-[439px]">
    <h3 className="text-2xl font-serif font-semibold mb-1">Where to next?</h3>
    <p className="text-sm text-gray-700 mb-4">There's a wide world waiting for you</p>

    <label className="text-sm block mb-1">Destination name</label>
    <input
      type="text"
      placeholder="Japan"
      className="w-full border-b border-black bg-transparent py-1 mb-8"
    />

    <label className="text-sm block mb-1"></label>
    <input
      type="text"
      placeholder="Check-in date"
      className="w-full border-b border-gray-300 bg-transparent py-1 mb-8"
    />

    <label className="text-sm block mb-1"></label>
    <input
      type="text"
      placeholder="Check-out date"
      className="w-full border-b border-gray-300 bg-transparent py-1 mb-8"
    />

    <button className="bg-black text-white w-[278px] h-[55px] mt-6 w-full py-2 text-sm font-medium">
      Read more
    </button>
  </div>
);

const Sidebar = ({ destinations }) => (
  <aside className="w-full md:w-[338.5px] px-4 md:px-0">
    <AuthorProfile />
    <DestinationsList destinations={destinations} />
    <Newsletter />
    <WhereToNext />
  </aside>
);

export default Sidebar;
