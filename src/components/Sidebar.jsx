import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthorProfile = () => {
  return (
    <div className="bg-gray-50 p-6 mb-8 text-center">
      <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-4">
        <img 
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Author" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold mb-1">Joypreet Bhamral</h3>
      <p className="text-sm text-gray-600 mb-4">
        Travel blogger and photographer exploring the world one country at a time. Sharing travel tips, guides and photography.
      </p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-gray-800 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.933.359.309.678.919.678 1.852 0 1.338-.012 2.417-.012 2.745 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6 5.82s-1.74-.24-3.58.32c-1.84.56-3.29 1.3-3.29 1.3S8.53 1.84 8.86 1.48C8.19 1.33 6.6 1.3 6.6 1.3S6.09 2.66 6.82 5.54c.73 2.88 2.24 7.5 2.24 7.5S6.38 14.7 5.43 16.56c-1.1 2.31-.32 3.77-.32 3.77s2.23.56 4.42-1.26c1.7-1.39 3.18-3.45 3.18-3.45s1.86.4 3.83.42c2.37.03 5.43-.93 5.43-.93s-1.51-2.95-1.6-4.28C20.3 10.02 21.4 8 21.4 8s-1.165-1.61-2.53-1.9c-.73-.16-1.45-.2-2.27-.26z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const DestinationsList = ({ destinations }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Destinations</h3>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id} className="border-b border-gray-100 py-2">
            <Link to={`/destinations/${destination.name.toLowerCase()}`} className="flex justify-between hover:text-gray-600">
              <span>{destination.name}</span>
              <span className="text-gray-500">({destination.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  return (
    <div className="bg-gray-50 p-6">
      <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Subscribe to get the latest travel tips and updates.
      </p>
      
      {isSubmitted ? (
        <div className="text-green-600 text-sm py-2">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-3 py-2 border border-gray-300 mb-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const WhereToNext = () => {
  const [destination, setDestination] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search - would link to search results in a real app
    if (destination) {
      alert(`Searching for ${destination}...`);
      setDestination('');
    }
  };
  
  return (
    <div className="bg-gray-50 p-6 mt-8">
      <h3 className="text-lg font-semibold mb-2">Where to next?</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination name..."
          className="w-full px-3 py-2 border border-gray-300 mb-2"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 font-medium hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

const Sidebar = ({ destinations }) => {
  return (
    <aside>
      <AuthorProfile />
      <DestinationsList destinations={destinations} />
      <Newsletter />
      <WhereToNext />
    </aside>
  );
};

export default Sidebar;