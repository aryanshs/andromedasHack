import React, { useState } from "react";
import { fetchStudyData } from "../services/appService";
import "../App.css";
import BannerImage from "../images/homepage-mouse.jfif"
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="homeContainer bodyScreenFit">



    <div className= 'left'>

      <div className= 'header'>
      <h1 className ="home-heading">
      Visualize Biological <br />
      Experiments in Space <br />


      </h1>
      </div>

      <div className= 'paragraph'>
      <p1 className = "home-text"> 
      Bringing complex biological space data to life through compelling visualizations.</p1>
      </div>

      <div className= 'experiment'>
      <Link to="/Experiments" className="button1">
        Explore Experiments 
      </Link>
      </div>

      <div className= 'about'>
      <Link to="/About" className="button2">
        About
        </Link>
        </div>

      </div>

    <div className= "right">
      <div className = "homeImage">
        <img src = {BannerImage} alt="mouse in space.img"/>

      </div>
    </div>


    </div>  
  );
}
