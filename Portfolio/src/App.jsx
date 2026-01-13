import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Achievements from "./Pages/Achievement";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
