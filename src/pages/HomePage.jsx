import { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoriesSection from '../components/CategoriesSection';
import RecentArticles from '../components/RecentArticles';
import Sidebar from '../components/Sidebar';
import articles from '../data/articles.json';
import categories from '../data/categories.json';
import destinations from '../data/destinations.json';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  
  useEffect(() => {
    const featured = articles.filter(article => article.featured);
    setFeaturedArticles(featured.length > 0 ? featured : [articles[0]]);
  }, []);
  
  const handleCategorySelect = (categorySlug) => {
    setActiveCategory(prevCategory => 
      prevCategory === categorySlug ? null : categorySlug
    );
  };

  const slides = [
    {
      id: 1,
      title: 'Discover Nature',
      excerpt: 'Explore the beauty of nature through our articles.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80',
      category: "travel",
    },
    {
      id: 2,
      title: 'Technology Trends',
      excerpt: 'Stay updated with the latest tech trends of 2025.',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1350&q=80',
      category: "beaches",
    },
    {
      id: 3,
      title: 'Art & Design',
      excerpt: 'Dive into the world of creativity and design.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',
      category: "hehaw",
    },
  ];

  
  return (
    <div>
      {/* Hero Section */}
      <div>
        <HeroCarousel slides={slides} />
        {/* You can add more content below if needed */}
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16">
        <CategoriesSection
          categories={categories}
          onCategorySelect={handleCategorySelect}
          activeCategory={activeCategory}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <RecentArticles 
              articles={articles} 
              currentCategory={activeCategory}
            />
          </div>
          
          <div>
            <Sidebar destinations={destinations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
