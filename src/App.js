import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';

// Composant racine — structure principale de l'application
function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/artisan/:id" element={<Artisan />} />
        <Route path="/mentions-legales" element={<NotFound />} />
        <Route path="/donnees-personnelles" element={<NotFound />} />
        <Route path="/accessibilite" element={<NotFound />} />
        <Route path="/cookies" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;