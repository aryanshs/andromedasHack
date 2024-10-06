import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import rocket from "../images/roxket.JPG";
import oldMan from "../images/oldMan.jpeg";
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
          <h1>NASA OSD-665 Study:</h1>
          <p>
            Transcriptional profiling of right extensor digitorum longus muscle
            from mice flown on the RR-23 mission
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
          To understand the effects of spaceflight on ocular vascular
          structures—specifically arteries, veins, and lymphatic vessels—the
          Rodent Research-23 (RR-23) mission was designed to investigate their
          role in vision maintenance and address Spaceflight-Associated
          Neuro-ocular Syndrome (SANS). The study involved 60 male C57BL/6J
          mice, divided into three groups: 20 mice exposed to microgravity in
          the Flight group, 20 in the Habitat Ground Control (HGC), and 20 in
          the Vivarium Ground Control (VGC). The mission provided insights into
          how spaceflight affects ocular health and vision.The mission also
          explored the molecular mechanisms behind these changes by analyzing
          tissues like the extensor digitorum longus muscles. This in-depth
          analysis helps address the long-term health risks astronauts face,
          particularly visual impairments, which are often linked to SANS.
          Understanding these effects is crucial for future long-duration space
          missions, where maintaining visual and overall physiological health is
          critical.
        </p>
        <div className="studyRocketIntroImageContainer">
          <img src={rocket} alt="rocket" className="studyRocketIntroImage" />
        </div>
      </div>
      <hr />
      <div className="studyNasaObjectivesConditionsImageBox">
        <div className="studyNasaImageBox">
          <img src={oldMan} className="studyNasaOldMan" />
        </div>
        <div className="studyNasaObjectivesConditionsBox">
          <div className="studyNasaObjectivesBox">
            <h2>Study Objectives:</h2>
            <ul>
              <li>
                Ocular Hydrodynamics: Investigate how spaceflight alters blood
                and lymphatic structures in the eyes.
              </li>
              <li>
                Vascular System Impact: Assess the effect of spaceflight on
                ocular arteries and lymphatic vessels, contributing to visual
                impairments in astronauts.
              </li>
            </ul>
          </div>
          <div className="studyNasaConditionsBox">
            <h2>Study Conditions:</h2>
            <div className="conditionsHeadingBox">
              <p>
                60 male C57BL/6J mice, 16-17 weeks old, split into three groups:
              </p>
            </div>
            <ul>
              <li>Flight: 20 mice flown to the ISS for 38 days.</li>
              <li>
                Habitat Ground Control (HGC): 20 mice under simulated
                conditions.
              </li>
              <li>
                Vivarium Ground Control (VGC): 20 mice in standard ground
                conditions.
              </li>
            </ul>
          </div>
          <div className="sampleCollectionBox">
            <h2>Sample Collection:</h2>
            <p>
              Post-flight, the right extensor digitorum longus muscles were
              collected from 9 mice per group for RNA extraction and
              transcriptomic profiling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
