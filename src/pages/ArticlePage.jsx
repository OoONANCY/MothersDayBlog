import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';
import articlesData from '../data/articles.json';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find((a) => a.id === parseInt(id));
    setArticle(foundArticle);
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) return <div className="text-center py-20">Loading...</div>;

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'basics', title: 'Japanese Seasons: The Basics' },
    { id: 'spring', title: 'Spring in Japan' },
    { id: 'summer', title: 'Summer in Japan' },
    { id: 'fall', title: 'Fall in Japan' },
    { id: 'winter', title: 'Winter in Japan' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Full-width hero image */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
      </section>

      {/* White overlay content box */}
      <section className="relative z-20 -mt-[150px] mx-auto w-[1180px] bg-white text-center px-6 pt-20 pb-20 shadow-lg">
        {/* Left Anchor Navigation */}
        <aside className="hidden lg:block absolute left-[20px] top-40 mt-20 w-[200px] text-left">
          <div className="sticky top-32 text-sm font-medium text-gray-600 space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="flex items-center space-x-2 group">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-black transition-colors"></span>
                <a
                  href={`#${section.id}`}
                  className="hover:text-black block"
                >
                  {section.title}
                </a>
              </div>
            ))}
          </div>
        </aside>

        {/* Right CTA with Left Alignment, No Card Effect */}
        <aside className="hidden lg:block absolute right-[5px] top-1/2 transform -translate-y-1/2 w-[250px] h-[100px] p-4 text-left border-l-2 border-black bg-transparent">
          <p className="text-sm font-serif text-gray-800 mb-2">
            Check the best apartments, rooms, hotels for spring in Japan!
          </p>
          <p className="text-xs text-gray-600 mb-4">
            Pellentesque ac porta nisi. Ut varius at nisi vitae sodales. Sed eu lectus magna.
          </p>
          <Link
            to="/categories/asia"
            className="inline-block bg-black text-white text-sm font-medium px-4 py-1 hover:bg-gray-800 transition"
          >
            Read more
          </Link>
        </aside>

        <h1 className="text-5xl font-serif font-bold mb-4 max-w-3xl break-words mx-auto text-center">{article.title}</h1>
        {/* Meta Info Row and Social Icons in a Single Row */}
        <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>{article.category}</span>
            <span className="text-gray-400">•</span>
            <span>{article.date}</span>
            <span className="text-gray-400">•</span>
            <span>{article.readingTime}</span>
          </div>
          <div className="flex space-x-2 pl-14">
            <a href="#" className="bg-black text-white p-2 text-base"><FaFacebookF /></a>
            <a href="#" className="bg-black text-white p-2 text-base"><FaInstagram /></a>
            <a href="#" className="bg-black text-white p-2 text-base"><FaYoutube /></a>
            <a href="#" className="bg-black text-white p-2 text-base"><FaGlobe /></a>
          </div>
        </div>

        {/* Quote */}
        <p className="italic text-gray-500 text-lg mb-10 border-t border-gray-300 pt-6 max-w-[600px] mx-auto">
          “Spring is nature's way of saying, 'Let's party.'”
        </p>

        {/* Article Sections */}
        <div className="text-left max-w-2xl mx-auto text-sm text-gray-800 leading-loose">
          {sections.map((section, index) => (
            <div key={index} id={section.id}>
              <h2 className="text-2xl font-serif font-semibold mb-4">{section.title}</h2>
              {section.id === 'overview' ? (
                <>
                  <p className="mb-4">
                    The good news for travelers is that there is no single best time of year to travel to Japan — yet this makes it difficult to decide when to visit, as each of Japan’s seasons has its own special highlights.
                  </p>
                  <p className="mb-4">
                    Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you’ll see when you visit, each season — and even sub-season! — is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan.
                  </p>
                  <p className="mb-4">
                    On the other hand, if your dates are flexible it’s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold — or the heat and humidity of summer — while others will do whatever it takes to avoid crowds! When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather or fewer tourists around?
                  </p>
                  <p className="mb-16">
                    Because there is so much to consider, we’ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    {section.title === 'Japanese Seasons: The Basics' && 'Placeholder for Japanese Seasons: The Basics content.'}
                    {section.title === 'Spring in Japan' && 'Spring is synonymous with cherry blossoms. Parks and riversides fill with people celebrating Hanami. The weather is mild and perfect for sightseeing.'}
                    {section.title === 'Summer in Japan' && 'Fireworks, festivals, and vibrant street life take over in summer. Although hot and humid, it’s a time of celebration.'}
                    {section.title === 'Fall in Japan' && 'The fall foliage turns Japan into a canvas of warm colors. Kyoto, Nara, and Hokkaido are top picks.'}
                    {section.title === 'Winter in Japan' && 'From snowy mountains to cozy onsens, winter is quiet and beautiful. Don’t miss the Sapporo Snow Festival.'}
                  </p>
                  {section.id !== 'basics' && (
                    <img
                      src={
                        section.title === 'Spring in Japan' ? 'https://images.unsplash.com/photo-1584382297420-c49c45e12998' :
                        section.title === 'Summer in Japan' ? 'https://images.unsplash.com/photo-1561974064-4fc21ddbb99f' :
                        section.title === 'Fall in Japan' ? 'https://images.unsplash.com/photo-1577880216142-b39f9eaf00b4' :
                        'https://images.unsplash.com/photo-1602849391025-e69c9331b92a'
                      }
                      alt={section.title}
                      className="w-full h-[400px] object-cover mt-6 mb-16"
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="w-full max-w-[1180px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-serif font-semibold mb-10">Interesting Articles to Read</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData
            .filter((a) => a.id !== article.id)
            .slice(0, 3)
            .map((item) => (
              <div key={item.id} className="bg-white border border-gray-200">
                <Link to={`/articles/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[240px] object-cover"
                  />
                </Link>
                <div className="p-4 text-left">
                  <p className="text-xs text-gray-500 mb-1 uppercase">
                    {item.category} • {item.readingTime}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 font-serif">
                    <Link to={`/articles/${item.id}`} className="hover:text-gray-700">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    to={`/articles/${item.id}`}
                    className="text-sm font-medium text-white bg-black px-4 py-2 inline-block hover:bg-gray-800 transition"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;