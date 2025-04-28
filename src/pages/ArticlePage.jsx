import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import articlesData from '../data/articles.json';
import destinationsData from '../data/destinations.json';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);
  
  useEffect(() => {
    const fetchArticle = () => {
      setLoading(true);
      setTimeout(() => {
        const foundArticle = articlesData.find(a => a.id === parseInt(id));
        if (foundArticle) {
          setArticle(foundArticle);
          const related = articlesData
            .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
            .slice(0, 3);
          setRelatedArticles(related);
        }
        setLoading(false);
      }, 300);
    };
    
    fetchArticle();
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-12"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The article you're looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-4 py-2 font-medium hover:bg-gray-800 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <article>
            <header className="mb-8">
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase">{article.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{article.readingTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600">{article.excerpt}</p>
            </header>

            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Photo: Travel scene from {article.category}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum...
              </p>
              <p>
                Fusce quis commodo sapien. Sed tincidunt eros id pulvinar malesuada...
              </p>
              <h2>What to Expect When Visiting</h2>
              <p>
                Mauris ut sapien non felis fermentum vulputate...
              </p>
              <h2>Best Time to Visit</h2>
              <p>
                Integer commodo tortor at nisi tempus, id ultricies eros varius...
              </p>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">You May Also Like</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map(relatedArticle => (
                    <div key={relatedArticle.id} className="bg-white border border-gray-100">
                      <Link to={`/articles/${relatedArticle.id}`}>
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-40 object-cover"
                        />
                      </Link>
                      <div className="p-4">
                        <h4 className="font-medium mb-2">
                          <Link to={`/articles/${relatedArticle.id}`} className="hover:text-gray-600">
                            {relatedArticle.title}
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500">{relatedArticle.readingTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>

        <div>
          <Sidebar destinations={destinationsData} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
