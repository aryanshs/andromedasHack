import React from "react";
import "../styles/About.css";
import placeholderImage from "../images/placeholder.png"; // Placeholder image for members without images
import marcus from "../images/marcus.jpg";
import nicole from "../images/nicole.jpg";
import aryansh from "../images/aryansh.jpeg";
import laiba from "../images/laiba.jpg";

const teamMembers = [
  { id: 1, name: "Marcus Yuen", image: marcus },
  { id: 2, name: "Aryansh Sharma", image: aryansh },
  { id: 3, name: "Maryam Sikander" },
  { id: 4, name: "Laiba Arshad", image: laiba },
  { id: 5, name: "Nicole Yang", image: nicole },
  { id: 6, name: "Uma Velmurugan" },
];

export default function About() {
  return (
    <div className="aboutContainer bodyScreenFit">
      <h1>About Us</h1>
      <div className="teamGrid">
        {teamMembers.map((member) => (
          <div key={member.id} className="teamMember">
            <img
              src={member.image || placeholderImage} // Use placeholder if image is missing
              alt={member.name}
              className="memberImage"
            />
            <p className="memberName">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
