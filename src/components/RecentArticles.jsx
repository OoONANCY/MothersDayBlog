import { useState } from 'react';
import Pagination from './Pagination';
import GuideSection from './GuideSection';

const ARTICLES_PER_PAGE = 6;

const RecentArticles = ({ articles, currentCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = currentCategory
    ? articles.filter((a) => a.category.toLowerCase() === currentCategory)
    : articles;

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <section className="my-12 px-4 md:px-8 lg:px-16 scale-[0.97]">
      <h2 className="text-xl font-serif font-semibold mb-6">
        Recent articles
      </h2>

      {paginatedArticles.length === 0 ? (
        <div className="text-center py-12">No articles found in this category.</div>
      ) : (
        <>
          {paginatedArticles.map((article, idx) => (
            <div key={article.id}>
              <div className="w-full max-w-[858px] h-auto md:h-[310px] flex flex-col md:flex-row gap-6 mb-8 mx-auto">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-1/2 h-60 md:h-full object-cover"
                />
                <div className="w-full md:w-1/2 h-full flex flex-col justify-between py-4 pr-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {article.category} • {article.readingTime}
                    </p>
                    <h3 className="text-xl font-serif font-semibold leading-tight mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                  </div>
                  <a
                    href={`/articles/${article.id}`}
                    className="inline-block bg-black text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-colors w-fit"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* Guide section after 3rd article */}
              {idx === 2 && <GuideSection />}
            </div>
          ))}
        </>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default RecentArticles;
