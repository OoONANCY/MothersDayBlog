import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const RecentArticles = ({ articles, currentCategory }) => {
  // Filter articles by category if a category is selected
  const filteredArticles = currentCategory 
    ? articles.filter(article => article.category.toLowerCase() === currentCategory)
    : articles;
  
  return (
    <section className="my-12">
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-xl font-semibold mb-6">Recent articles</h2>
        
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p>No articles found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination currentPage={1} totalPages={5} />
          </>
        )}
      </div>
    </section>
  );
};

export default RecentArticles;