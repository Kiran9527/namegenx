import { Link, Navigate, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import AllGenerators from "./pages/AllGenerators";
import SearchPage from "./pages/SearchPage";
import GuidesPage from "./pages/GuidesPage";

import GeneratorPage from "./pages/GeneratorPage";
import { categoryRoutes, generatorCatalog } from "./data/catalog";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const NotFound = () => (
  <main className="not-found-page">
    <section className="not-found-card">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        The page you’re looking for no longer exists or was moved. Head back to
        the homepage to keep generating fresh username ideas.
      </p>
      <Link to="/" className="primary-link">
        Back to home
      </Link>
    </section>
    <FAQSection page="notFound" title="Need help finding a generator?" />
  </main>
);

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-generators" element={<AllGenerators />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/guides" element={<GuidesPage />} />

        {categoryRoutes.map((category) => (
          <Route
            key={category.key}
            path={category.path}
            element={<CategoryPage categoryKey={category.key} />}
          />
        ))}
        {generatorCatalog.map((generator) => (
          <Route
            key={generator.id}
            path={generator.path}
            element={<GeneratorPage generator={generator} />}
          />
        ))}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
