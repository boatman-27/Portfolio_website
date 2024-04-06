import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Skillset from "./Components/Skillset/Skillset";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import PreLoader from "./PreLoader";
import "./styles.css";

const App = () => {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <PreLoader load={load} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skillset" element={<Skillset />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
