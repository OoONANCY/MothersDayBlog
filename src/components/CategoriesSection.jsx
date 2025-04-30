import { useRef } from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 w-[166px] h-[166px] overflow-visible"
    >
      {/* Position container to allow expansion in all directions */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Scale uniformly from center */}
        <div
          className="absolute w-full h-full transition-all duration-300 ease-in-out hover:scale-125 hover:z-10 group"
          style={{ transformOrigin: 'center' }}
        >
          {/* Hover image - now using group/group-hover to coordinate the elements */}
          <div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Text content */}
          <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center relative z-10 text-center transition-opacity duration-300 group-hover:opacity-0">
            <div className="mb-1 w-4 h-0.5 bg-white" />
            <div className="text-base font-medium">{category.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoriesSection = ({ categories, onCategorySelect }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 150 * 3 + 2 * 16;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full max-w-6xl mt-16 px-0 mx-auto overflow-hidden">
      {/* Header + Buttons */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Explore by category</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 bg-black text-white flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 bg-black text-white flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-visible scroll-smooth scrollbar-hide"
        style={{ height: '250px' }} // Increased height to accommodate expansion
      >
        <div className="flex gap-4 w-max py-10"> {/* Added padding to ensure cards have room to expand */}
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => onCategorySelect(category.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;