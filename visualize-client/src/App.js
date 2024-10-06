import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Experiments from "./components/Experiments";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Visualization from "./components/Visualization";
import Osd379 from "./components/Osd379";
import Osd665 from "./components/Osd665";
import "./App.css";

const App = () => {
  const [isExperimentSelected, setIsExperimentSelected] = useState(false);

  return (
    <Router>
      <div
        className={`appContainer ${
          isExperimentSelected ? "experimentsBackground" : ""
        }`}
      >
        <Navigation setExpermentBackground={setIsExperimentSelected} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/visualize/:studyId" element={<Visualization />} />
          <Route path="/osd379" element={<Osd379 />} />
          <Route path="/osd665" element={<Osd665 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
