// CategoriesSection.jsx
import { useRef } from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 w-[215px] h-[215px] overflow-visible"
    >
      {/* Scale this entire wrapper on hover */}
      <div
        className="relative w-full h-full origin-center transition-transform duration-300 ease-in-out group hover:scale-[1.186] hover:z-10"
        style={{ transformOrigin: 'center' }}
      >
        {/* Image background - fades in */}
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content on top */}
        <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center relative z-10 text-center transition-opacity duration-300 group-hover:opacity-0">
          <div className="mb-1 w-6 h-0.5 bg-white" />
          <div className="text-lg font-medium">{category.name}</div>
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

    const scrollAmount = 215 * 7 + 6 * 16;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <section
      className="relative mx-auto"
      style={{
        width: '1685px',
        marginTop: '64px',
        overflow: 'visible',
      }}
    >
      {/* Header with title and nav buttons */}
      <div className="flex items-center justify-between mb-[0px]">
        <h2 className="text-xl font-semibold">Explore by category</h2>
        <div className="flex gap-2 mr-40">
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

      {/* Carousel of cards */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pt-[47px]"
        style={{
          height: '367px',
          // overflow: 'visible',
          width: '1685',
        }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => onCategorySelect(category.slug)}
          />
        ))}
      </div>


    </section>
  );
};

export default CategoriesSection;
