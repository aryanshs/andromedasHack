import React, { useEffect, useState } from "react";
import { fetchStudyData } from "../services/appService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Visualization() {
  const location = useLocation();

  const [studyData, setStudyData] = useState(null);

  const studyId = location.state.studyId;

  useEffect(() => {
    fetchStudyData(studyId).then((data) => {
      //   console.log(data);
      setStudyData(JSON.stringify(data));
    });
  }, [studyId]);

  return (
    <div className="visualizationContainer bodyScreenFit">
      <div className="backButtonContainer">
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      <div className="visualizeStudyBox">
        <h1>Study: {studyData}</h1>
        {/* {studyData && (
          <div>
            <h2>Study Data:</h2>
            <pre>{JSON.stringify(studyData, null, 2)}</pre>
          </div>
        )} */}
      </div>
    </div>
  );
}
