import React from "react";
import "../styles/Experiments.css"; // Ensure this path is correct

export default function Experiments() {
  return (
    <div className="experimentsContainer bodyScreenFit">
      {/* image background with an overlay */}
      <div className="experimentSolarImageContainer">
        <div className="imageOverlay"></div> {/* Semi-transparent overlay */}
        <div className="experimentsHeadingContainer">
          <h1>Explore</h1>
          <h1>Experiments</h1>
          <div className="experimentSearchBar">
            <input type="text" placeholder="Search experiments Coming Soon.." />
          </div>
        </div>
      </div>

      <div className="experimentsStudyCardsContainer">
        <div className="experimentsStudyCard card379">
          <div className="experimentsHeadingBox">
            <h2>OSD-379</h2>
          </div>
          <div className="experimentsDescriptionBox">
            <p>
              Transcriptional profiling of livers from mice flown on Rodent
              Research Reference Mission-1 (RRRM-1)
            </p>
          </div>

          <button>View Details</button>
        </div>
        <div className="experimentsStudyCard card665">
          <div className="experimentsHeadingBox">
            <h2>OSD-665</h2>
          </div>
          <div className="experimentsDescriptionBox">
            <p>
              {" "}
              Transcriptional profiling of right extensor digitorum longus
              muscle from mice flown on the RR-23 mission
            </p>
          </div>

          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}
