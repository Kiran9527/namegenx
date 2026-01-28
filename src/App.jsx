import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import InstagramGenerator from "./pages/InstagramGenerator";
import YouTubeGenerator from "./pages/YouTubeGenerator";
import GamingGenerator from "./pages/GamingGenerator";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Generators */}
        <Route
          path="/instagram-username-generator"
          element={<InstagramGenerator />}
        />
        <Route
          path="/youtube-name-generator"
          element={<YouTubeGenerator />}
        />
        <Route
          path="/gaming-username-generator"
          element={<GamingGenerator />}
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
