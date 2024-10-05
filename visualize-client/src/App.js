// src/App.js
import React, { useState } from "react";
import VisualizeStudy from "./components/VisualizeStudy";

const App = () => {
  const [studyData, setStudyData] = useState(null);

  const handleFetchSuccess = (data) => {
    setStudyData(data);
  };

  return (
    <div>
      <h1>NASA Study Visualizer</h1>
      <VisualizeStudy onFetchSuccess={handleFetchSuccess} />
      {studyData && (
        <div>
          <h2>Study Data:</h2>
          <pre>{JSON.stringify(studyData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
