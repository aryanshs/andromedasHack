import React, { useState } from "react";
import { fetchStudyData } from "../services/appService";
import "../App.css";
import BannerImage from "../images/homepage-mouse.jfif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import rat from "../images/rat.jpg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeContainer bodyScreenFit">
      <div className="left">
        <div className="header">
          <h1 className="home-heading">
            Visualize Biological Experiments in Space
          </h1>
        </div>

        <div className="paragraph">
          <p1 className="home-text">
            Bringing complex biological space data to life through compelling
            visualizations.
          </p1>
        </div>

        <div className="homeButtons">
          <button
            className="homeExperimentButton"
            onClick={() => navigate("/experiments")}
          >
            Explore Experiments
          </button>
          <button
            className="homeAboutButton"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="right">
        <img src={rat} alt="mouse in space.img" />
      </div>
    </div>
  );
}
