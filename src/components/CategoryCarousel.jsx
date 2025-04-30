import { useRef } from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative group flex-shrink-0 w-[215px] h-[215px] overflow-visible"
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-in-out origin-center group-hover:scale-[1.186,_1.465] group-hover:z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ backgroundImage: `url(${category.image})` }}
        />
        <div className="relative w-full h-full bg-black text-white z-10 flex flex-col items-center justify-center text-center">
          <div className="w-6 h-0.5 bg-white mb-2" />
          <div className="text-lg font-medium">{category.name}</div>
        </div>
      </div>
    </div>
  );
};

const CategoriesCarousel = ({ categories, onCategorySelect }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 215 * 3 + 2 * 16;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <section
      className="relative mt-16 px-[134px] w-full overflow-hidden"
      style={{
        boxSizing: 'border-box',
      }}
    >
      {/* Header and buttons */}
      <div className="flex items-center justify-between mb-[47px]">
        <h2 className="text-xl font-semibold">Explore by category</h2>
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

      {/* Scrollable Cards Row */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-visible scroll-smooth scrollbar-hide"
        style={{
          height: '315px',
          paddingBottom: '8px',
        }}
      >
        <div className="flex gap-4 w-max">
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

export default CategoriesCarousel;