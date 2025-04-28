import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-white mb-8">
      <div className="aspect-w-16 aspect-h-9 mb-4 relative overflow-hidden bg-gray-200">
        <Link to={`/articles/${article.id}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="px-1">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase">{article.category}</span>
          <span className="text-xs text-gray-500 mx-2">•</span>
          <span className="text-xs text-gray-500">{article.readingTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/articles/${article.id}`} className="hover:text-gray-700">
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <Link 
          to={`/articles/${article.id}`} 
          className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;