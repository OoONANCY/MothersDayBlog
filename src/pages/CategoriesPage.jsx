import { useEffect, useRef } from 'react';
import articles from '../data/articles.json';

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-white flex-shrink-0 w-[280px]">
      <div className="relative w-full h-[200px] bg-gray-200 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase">{article.category}</span>
          <span className="text-xs text-gray-500 mx-2">•</span>
          <span className="text-xs text-gray-500">{article.readingTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <a
          href={`/articles/${article.id}`}
          className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Read more
        </a>
      </div>
    </article>
  );
};

const CategorySection = ({ category, articles }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 280;
    const gap = 16;
    const scrollAmount = (cardWidth + gap) * 3;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full max-w-[1180px] mx-auto mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">{category}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 bg-black text-white flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 bg-black text-white flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ width: '980px' }}
      >
        <div className="flex gap-8 w-max">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the first 3 unique categories
  const uniqueCategories = [...new Set(articles.map((a) => a.category))].slice(0, 3);

  return (
    <div className="w-full bg-white py-12">
      {uniqueCategories.map((category) => {
        const categoryArticles = articles.filter((a) => a.category === category);
        return (
          <CategorySection key={category} category={category} articles={categoryArticles} />
        );
      })}
    </div>
  );
};

export default CategoriesPage;
