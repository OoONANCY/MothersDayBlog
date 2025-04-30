import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OverlayMenu from './components/OverlayMenu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import instagramData from './data/instagram.json';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar with menuOpen logic */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Overlay menu shown when menuOpen is true */}
        <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <div className="py-20 text-center">
                  <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer instagramPosts={instagramData} />
      </div>
    </Router>
  );
}

export default App;
