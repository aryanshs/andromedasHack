// src/components/StudyForm.js
import React, { useState } from "react";
import { fetchStudyData } from "../services/appService";

const VisualizeStudy = ({ onFetchSuccess }) => {
  const [studyId, setStudyId] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchStudyData(studyId);
      onFetchSuccess(data); // Send data to parent component for visualization
      setError(null);
    } catch (err) {
      setError("Error fetching study data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Study ID:
        <input
          type="text"
          value={studyId}
          onChange={(e) => setStudyId(e.target.value)}
        />
      </label>
      <button type="submit">Fetch Study Data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default VisualizeStudy;
