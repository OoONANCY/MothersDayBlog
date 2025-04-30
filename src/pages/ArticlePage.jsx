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
    { id: 'dedication', title: 'To the Woman Who Held It All Together' },
    { id: 'strength', title: 'Silent Strength and Sacrifice' },
    { id: 'memories', title: 'The Little Things I Remember' },
    { id: 'love', title: 'Love Beyond Words' },
    { id: 'resilience', title: 'What You Taught Me' }
  ];

  return (
    <div className="w-full bg-white">
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      <section className="relative z-20 -mt-[150px] mx-auto w-[1180px] bg-white text-center px-6 pt-20 pb-20 shadow-lg">
        <aside className="hidden lg:block absolute left-[20px] top-40 mt-20 w-[200px] text-left">
          <div className="sticky top-32 text-sm font-medium text-gray-600 space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="flex items-center space-x-2 group">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-black transition-colors"></span>
                <a href={`#${section.id}`} className="hover:text-black block">
                  {section.title}
                </a>
              </div>
            ))}
          </div>
        </aside>

        {/* Right CTA with Left Alignment, No Card Effect */}
        <aside className="hidden lg:block absolute right-[5px] top-1/2 transform -translate-y-1/2 w-[250px] h-[100px] p-4 text-left border-l-2 border-black bg-transparent">
          <p className="text-sm font-serif text-gray-800 mb-2">
            Check the gifts to cherish your mom!
          </p>
          <p className="text-xs text-gray-600 mb-4">
            Come on she deserves it. What you will do with all that money huh???
          </p>
          <Link
            to="/categories/asia"
            className="inline-block bg-black text-white text-sm font-medium px-4 py-1 hover:bg-gray-800 transition"
          >
            Check Out
          </Link>
        </aside>


        <h1 className="text-5xl font-serif font-bold mb-4 max-w-3xl break-words mx-auto text-center">{article.title}</h1>

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

        <p className="italic text-gray-500 text-lg mb-10 border-t border-gray-300 pt-6 max-w-[600px] mx-auto">
          “A mother’s love is quiet, but unshakable.”
        </p>

        <div className="text-left max-w-2xl mx-auto text-sm text-gray-800 leading-loose">
          <div id="dedication">
            <h2 className="text-2xl font-serif font-semibold mb-4">To the Woman Who Held It All Together</h2>
            <p className="mb-4">Dear Maa,</p>
            <p className="mb-4">
              There are moments when words fail me—when gratitude feels too small a word for what I carry in my heart. But today, I want to try.
            </p>
            <p className="mb-4">
              I want to tell the world about the quiet strength you wore like armor, the sacrifices you made without ever asking for recognition, and the unconditional love that wrapped around us like the safest blanket on stormy nights.
            </p>
            <img
              src="https://i.guim.co.uk/img/media/a64ee09ac6a3465656f07f802891638a5d468fbc/0_249_640_384/master/640.jpg?width=1200&quality=85&auto=format&fit=max&s=7d09516d725b035803d9cc29c78f3b49"
              alt="Mother holding baby"
              className="w-full my-6 rounded-lg shadow-md"
            />
          </div>

          <div id="strength">
            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">Silent Strength and Sacrifice</h2>
            <p className="mb-4">
              You didn’t just raise us—you built a home out of courage. After Papa passed, the world expected you to fall apart. But you stood taller. Stronger. Not because it was easy, but because it was necessary.
            </p>
            <p className="mb-4">
              You were suddenly mother, father, protector, provider—and somehow still soft enough to braid our hair gently every morning before school.
            </p>
            <img
              src="https://media.istockphoto.com/id/1200281880/photo/working-at-home-mom.jpg?s=612x612&w=0&k=20&c=ehpu7dzDTwQndpE8UWXz85tLmHcCTFbpUYWERhloNLw="
              alt="Single mom working with child"
              className="w-full my-6 rounded-lg shadow-md"
            />
          </div>

          <div id="memories">
            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">The Little Things I Remember</h2>
            <p className="mb-4">
              I remember those little things. The way you used to leave a light on in the hallway so we’d never feel alone. The sound of your whisper-prayers before bed, asking the universe for just a little more strength for tomorrow.
            </p>
            <p className="mb-4">
              The warm rotis wrapped in foil for school lunch, even when you were running late for your own classes. The clothes you wore until they were worn thin so that we could have new books, new shoes, new dreams.
            </p>
            <img
              src="https://www.shutterstock.com/image-photo/parents-kindergarten-asian-students-packing-600nw-2353528535.jpg"
              alt="Mother helping child with school bag"
              className="w-full my-6 rounded-lg shadow-md"
            />
          </div>

          <div id="love">
            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">Love Beyond Words</h2>
            <p className="mb-4">
              You once told me that a mother’s love is quiet, but unshakable. I know now what you meant. Because yours was the love that hid its bruises and wore its battles like a second skin.
            </p>
            <p className="mb-4">
              The love that faced judgment, fear, and exhaustion, and still managed to show up every day with a smile and open arms.
            </p>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Mother hugging child"
              className="w-full my-6 rounded-lg shadow-md"
            />
          </div>

          <div id="resilience">
            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">What You Taught Me</h2>
            <p className="mb-4">
              Maa, I am in awe of you. Of the way you refused to let grief win. Of how you showed two young daughters what resilience looks like. Of how you protected our childhood when yours was torn away.
            </p>
            <img
              src="https://revoloon.com/wp-content/uploads/2021/04/2pexels-noelle-otto-906106.jpg"
              alt="Strong woman walking alone"
              className="w-full my-6 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

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
