// src/App.js
import React, { useState } from "react";
import VisualizeStudy from "./components/VisualizeStudy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Experiments from "./components/Experiments";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Visualization from "./components/Visualization";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/visualize/:studyId" element={<Visualization />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
