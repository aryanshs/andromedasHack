import React, { useEffect, useState } from "react";
import { fetchStudyData } from "../services/appService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Visualization() {
  const location = useLocation();
  const [studyData, setStudyData] = useState(null);
  const studyId = location.state.studyId;

  useEffect(() => {
    // Log the studyId to ensure it's correct
    console.log("Study ID:", studyId);

    // Fetch the study data and handle any potential errors
    fetchStudyData(studyId)
      .then((data) => {
        console.log("Fetched Study Data:", data); // Debugging data
        setStudyData(data); // Set the fetched data
      })
      .catch((error) => {
        console.error("Error fetching study data:", error); // Handle errors
      });
  }, [studyId]);

  const visualizeStudy = () => {
    window.location.href = "/viz_379.html"; 
  };

  return (
    <div className="visualizationContainer bodyScreenFit">
      <h1>Visualization</h1>
      
      {/* Render the button regardless of studyData */}
      <button onClick={visualizeStudy} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Visualize Study
      </button>

      {studyData ? (
        <div style={{ marginTop: '20px' }}>
          <h2>Study Data:</h2>
          <pre>{JSON.stringify(studyData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading study data...</p>
      )}
    </div>
  );
}
