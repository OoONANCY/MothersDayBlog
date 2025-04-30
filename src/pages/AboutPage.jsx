import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Full-width hero image */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/anna-from-when-marnie-was-there.jpg')`, // replace with actual image
        }}
      >
      </section>

      {/* White overlay content box */}
      <section className="relative z-20 -mt-[150px] mx-auto w-[1180px] bg-white text-center px-6 pt-20 pb-20 shadow-lg">
        <h2 className="text-3xl font-serif mb-2">My name is</h2>
        <h3 className="text-5xl font-serif font-bold mb-6">Nancy Sharma</h3>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="bg-black text-white p-3 text-lg"><FaFacebookF /></a>
          <a href="#" className="bg-black text-white p-3 text-lg"><FaInstagram /></a>
          <a href="#" className="bg-black text-white p-3 text-lg"><FaYoutube /></a>
          <a href="#" className="bg-black text-white p-3 text-lg"><FaGlobe /></a>
        </div>

        {/* Quote */}
        <p className="italic text-gray-500 text-lg mb-10 border-t border-gray-300 pt-6 max-w-[600px] mx-auto">
          Some beautiful paths can't be discovered without getting lost.
        </p>

        {/* Paragraph */}
        <div className="text-sm text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
          <p>
            For as long as I can remember I’ve been obsessed with the idea of travel.
            I was always that person who was forever daydreaming of foreign lands
            and unfamiliar cultures; coming up with travel itineraries that would
            challenge my perceptions and help me gain a deeper understanding of the world.
          </p>
        </div>

        {/* Side-by-side images - aligned to content box width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
          <div className="bg-gray-300 h-[550px] w-full flex items-center justify-center">
            <span className="text-gray-500">Image 1 Placeholder</span>
          </div>
          <div className="bg-gray-300 h-[550px] w-full flex items-center justify-center">
            <span className="text-gray-500">Image 2 Placeholder</span>
          </div>
        </div>

        {/* Bulleted List and Paragraph */}
        <div className="text-left max-w-4xl mx-auto text-sm text-gray-800 leading-loose">
          <p className="mb-4">
            To keep you on the road to safety, here are a few basic tips for motorists at rail crossings:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Expect a train at any time. Trains can run anytime of day or night, on any track, in any direction.</li>
            <li>Don’t be fooled. The train is closer and faster than you think. It’s easy to misjudge a train’s speed and distance, especially at night. If you see a train, just wait.</li>
            <li>Trains can’t stop quickly or swerve; be prepared to yield.</li>
            <li>Stop and wait when gates are down or lights are flashing...</li>
          </ul>
          <p>
            These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a
            device that helps trains with braking to make train travel even better...
          </p>
          <p className="mb-4">
            To keep you on the road to safety, here are a few basic tips for motorists at rail crossings:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Expect a train at any time. Trains can run anytime of day or night, on any track, in any direction.</li>
            <li>Don’t be fooled. The train is closer and faster than you think. It’s easy to misjudge a train’s speed and distance, especially at night. If you see a train, just wait.</li>
            <li>Trains can’t stop quickly or swerve; be prepared to yield.</li>
            <li>Stop and wait when gates are down or lights are flashing...</li>
          </ul>
          <p>
            These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a
            device that helps trains with braking to make train travel even better...
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
