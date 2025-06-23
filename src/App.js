import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import CGU from "./pages/CGU";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Background />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            <Route path="/cgu" element={<CGU />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
