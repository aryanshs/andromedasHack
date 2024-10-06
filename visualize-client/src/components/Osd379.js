import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import rocket from "../images/roxket.JPG";
import oldMan from "../images/oldMan.jpeg";
import launching_space from "../images/launching_space.JPG";
import "../styles/Osd379.css";

export default function Osd379() {
  const [osd379Data, setOsd379Data] = useState([]);
  const navigate = useNavigate();

  const visualizeStudy = () => {
    window.location.href = "/viz_379.html";
  };

  return (
    <div className="nasaStudyContainer bodyScreenFit">
      <div className="nasaStudyHeadingBox">
        <div className="nasaStudyHeadingText">
          <h1>
            NASA <span className="nasaStudyName">OSD-379</span> Study:
          </h1>
          <p>
            Transcriptional profiling of livers from mice flown on Rodent
            Research Reference Mission-1 (RRRM-1).
          </p>
        </div>

        <div className="nasaStudyHeadingButtonBox">
          <button className="visualizeStudyButton" onClick={visualizeStudy}>
            Visualize Study
          </button>
        </div>
      </div>
      <div className="studyIntroBox">
        <p>
          The Rodent Research Reference Mission-1 (RRRM-1) was designed to
          investigate the effects of spaceflight on aging and disease
          progression, using 160 female BALB/cAnNTac mice in two age groups
          (10-12 weeks and 32 weeks). Scientists conduct space missions like
          this to understand how the microgravity environment impacts biological
          systems—particularly molecular changes that occur in organs like the
          liver. These studies help researchers learn about long-term
          spaceflight risks, human health in space, and how biological
          processes, such as aging and disease, differ in space. The mission
          focused on how spaceflight and subsequent re-entry affected the liver
          at the molecular level, utilizing RNA-seq analysis to observe changes
          in gene expression. The outcomes from such studies provide critical
          data for developing countermeasures to health risks astronauts may
          face on long-duration space missions, and they can also enhance our
          understanding of diseases like osteoporosis, muscle atrophy, and
          cardiovascular dysfunction, which may be influenced by space travel.
        </p>
        <div className="studyRocketIntroImageContainer">
          <img src={rocket} alt="rocket" className="studyRocketIntroImage" />
        </div>
      </div>
      <div className="hrFirst">
        <hr />
      </div>

      <div className="studyNasaObjectivesConditionsImageBox">
        <div className="studyNasaImageBox">
          <img src={oldMan} className="studyNasaOldMan" />
        </div>
        <div className="studyNasaObjectivesConditionsBox">
          <div className="studyNasaObjectivesBox">
            <h2>Study Objectives:</h2>
            <ul>
              <li>
                Muscle Atrophy Analysis: Study molecular pathways responsible
                for muscle degradation during spaceflight.
              </li>
              <li>
                Molecular Marker Changes: Evaluate how spaceflight influences
                blood and organ molecular markers.
              </li>
              <li>
                Microgravity Impact: Investigate how microgravity affects
                skeletal tissues to assist future bone-related drug development.
              </li>
            </ul>
          </div>
          <div className="studyNasaConditionsBox">
            <h2>Study Conditions:</h2>
            <div className="conditionsHeadingBox">
              <p>
                Age Groups: 10-12 weeks old, 32 weeks old. Flight Conditions:
                Microgravity during spaceflight, followed by re-entry and
                recovery.
              </p>
              <p>Mice Studied:</p>
            </div>
            <ul>
              <li>40 spaceflown mice: 20 young, 20 older.</li>
              <li>
                Groups: 10 young and 10 old mice each for ISS Terminal (ISS-T)
                and Live Animal Return (LAR).
              </li>
              <li>
                Controls: 10 mice per group for ground, vivarium, and basal
                conditions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hrSecond">
        <hr />
      </div>

      <div className="nasaStudyExperimentalOverviewBox">
        <div className="nasaStudyExperimentalDescriptionBox">
          <h2>Experimental Overview:</h2>
          <p>How did we Conduct this Space Experiment?</p>
          <div className="experimentList">
            <p>Subjects Per Group:</p>
            <ul>
              <li>Total: 160 female BALB/cAnNTac mice</li>
              <li>
                Spaceflown Mice:{" "}
                <ul>
                  <li>40 mice: 20 young (10-12 weeks), 20 older (32 weeks)</li>
                  <li>
                    Sacrificed On-Orbit: 10 young, 10 old after 22-23 days
                  </li>
                  <li>
                    Returned to Earth: 10 young, 10 old after 40 days with 2-day
                    recovery
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="launchRocketImageBox">
          <img
            src={launching_space}
            alt="launching_space"
            className="launchRocketImage"
          />
        </div>
      </div>
    </div>
  );
}
