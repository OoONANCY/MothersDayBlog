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
          Why choose one passion when you can sample them all?
        </p>

        {/* Paragraph - Updated with fun About Me content */}
        <div className="text-sm text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
          <p className="mb-4">
            Born and raised in the breathtaking valleys of Jammu and Kashmir (yes, it's as pretty as the postcards!), I'm that girl who's perpetually juggling too many hobbies while somehow managing to code my way through a computer science degree.
          </p>
          <p className="mb-4">
            My brain works in mysterious ways—one minute I'm debugging, the next I'm vibing to a song I've had on repeat for three days straight. Balance? Never heard of her.
          </p>
          <p className="mb-4">
            I'm a firm believer that breakfast foods should be served at all hours, that the best conversations happen after midnight, and that there's no problem a good cup of kahwa tea can't at least temporarily solve.
          </p>
        </div>

        {/* Side-by-side images - aligned to content box width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
          <div className="h-[550px] w-full flex items-center justify-center">
            <img
              src="https://www.japannakama.co.uk/wp-content/uploads/2024/12/10-Iconic-Female-Characters-in-Studio-Ghibli-Films.webp" // replace with your image URL
              alt="Image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[550px] w-full flex items-center justify-center">
            <img
              src="https://preview.redd.it/generate-studio-ghibli-style-images-with-chatgpt-heres-my-v0-v1kmyz9y1ere1.png?width=640&crop=smart&auto=webp&s=15a315e383a5d52ecd49285110c3ce8137f3d39c" // replace with your image URL
              alt="Image 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* More Fun About Me Content */}
        <div className="text-left max-w-4xl mx-auto text-sm text-gray-800 leading-loose">
          <p className="mb-4">
            My friends describe me as "chaotically organized" — my Google Calendar is color-coded to perfection, but I'll still show up five minutes late with mismatched socks and an elaborate story about why.
          </p>
          <p className="mb-6">
            Current obsessions include: Studio Ghibli films (Howl's Moving Castle has my whole heart), learning how to roller skate without embarrassing myself completely, and convincing everyone I know that my homemade cherry jam is worth the sticky kitchen disaster it creates.
          </p>
          <p className="mb-4">
            When I'm not convincing my laptop to cooperate with my coding assignments, you can find me:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Hunting down the perfect momos in hidden street corners</li>
            <li>Creating Spotify playlists for oddly specific scenarios like "walking dramatically in the rain while pretending you're in a music video"</li>
            <li>Attempting to teach my dog to high-five (progress: minimal)</li>
            <li>Collecting vintage film cameras I definitely don't need but absolutely must have</li>
            <li>On a mission to pet every street dog in my neighborhood. Current count: 23 and counting! 🐕</li>
          </ul>
          <p className="mb-4">
            I once spent an entire weekend building a website just to catalog all my favorite street food spots, complete with a sophisticated rating system based on taste, ambiance, and "likelihood of finding a hair in your food." My friends now consult it before any outing.
          </p>
          <p>
            So that's me—part tech nerd, part creative hurricane, 100% powered by chai and curiosity. My tabs are always too many, my projects are always unfinished, and my enthusiasm is always maxed out. Let's be friends?
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;