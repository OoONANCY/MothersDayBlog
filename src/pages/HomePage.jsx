import { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoriesSection from '../components/CategoriesSection';
import RecentArticles from '../components/RecentArticles';
import Sidebar from '../components/Sidebar';
import articles from '../data/articles.json';
import categories from '../data/categories.json';
import destinations from '../data/destinations.json';
import CategoryCarousel from '../components/CategoryCarousel';

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
      title: 'The Beauty of Motherhood',
      excerpt: 'Explore touching stories and heartfelt messages that honor the unconditional love of mothers everywhere.',
      image: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      title: 'Modern Moms & Timeless Love',
      excerpt: 'Discover how today’s tech-savvy moms balance love, career, and care with inspiring grace.',
      image: 'https://pilbox.themuse.com/image.jpg?filter=antialias&h=343&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F21109.jpg&w=700',
      category: "inspiration",
    },
    {
      id: 3,
      title: 'Creative Gifts for Mom',
      excerpt: 'Get inspired by DIY ideas and artistic creations that make the perfect heartfelt gifts this Mother’s Day.',
      image: 'https://images.unsplash.com/photo-1504629141121-a95007fe9190?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "gifts",
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
