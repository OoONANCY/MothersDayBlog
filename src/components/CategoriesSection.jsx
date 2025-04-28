import { useState, useRef } from 'react';

const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`min-w-[120px] h-[120px] flex flex-col items-center justify-center text-center cursor-pointer border border-gray-200 p-4 transition-all ${
        isActive 
          ? 'bg-black text-white' 
          : 'bg-white text-black hover:bg-gray-50'
      }`}
    >
      <div className="text-2xl mb-2">{category.icon}</div>
      <div className="text-sm font-medium">{category.name}</div>
    </div>
  );
};

const CategoriesSection = ({ categories, onCategorySelect, activeCategory }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  
  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    
    const scrollAmount = 240; // Approx width of two cards
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(
          container.scrollWidth - container.clientWidth,
          scrollPosition + scrollAmount
        );
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
    
    setScrollPosition(newPosition);
  };
  
  return (
    <section className="my-12">
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-xl font-semibold mb-6">Explore by category</h2>
        
        <div className="relative">
          {/* Previous button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10"
            aria-label="Scroll categories left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {/* Categories container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 pt-2 px-2 -mx-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                category={category}
                isActive={activeCategory === category.slug}
                onClick={() => onCategorySelect(category.slug)}
              />
            ))}
          </div>
          
          {/* Next button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10"
            aria-label="Scroll categories right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;