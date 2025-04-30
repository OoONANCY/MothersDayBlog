import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OverlayMenu from './components/OverlayMenu';
import HeroCarousel from './components/HeroCarousel';
import CategoriesSection from './components/CategoriesSection';
import RecentArticles from './components/RecentArticles';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';

import articles from './data/articles.json';
import categories from './data/categories.json';
import destinations from './data/destinations.json';
import heroSlides from './data/heroSlides.js';
import instagram from './data/instagram.json';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleCategorySelect = (categorySlug) => {
    setCurrentCategory(categorySlug);
  };

  return (
    <Router>
      <div className="App">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                articles={articles}
                categories={categories}
                heroSlides={heroSlides}
                currentCategory={currentCategory}
                onCategorySelect={handleCategorySelect}
              />
            }
          />
          <Route path="/about" element={<AboutPage destinations={destinations} />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/page/:page"
            element={
              <>
                <HeroCarousel slides={heroSlides} />
                <CategoriesSection
                  categories={categories}
                  onCategorySelect={handleCategorySelect}
                />
                <div className="flex max-w-[1180px] mx-auto gap-8 px-4 lg:px-0">
                  <RecentArticles articles={articles} currentCategory={currentCategory} />
                  <Sidebar destinations={destinations} />
                </div>
              </>
            }
          />
        </Routes>
        <Footer instagramPosts={instagram} />
      </div>
    </Router>
  );
}

export default App;