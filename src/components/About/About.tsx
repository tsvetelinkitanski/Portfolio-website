import React from "react";
import "./About.css";


export default function About() {

  const img = require ('../../images/profilepicture.jpg').default;
  return (
    <div id="about">
      <img className="picture" src={img} alt="Profile picture" />

      <div>
        Hi there, I'm Tsvetelin Kitanski, a young intern web developer with a
        passion for information technology. I'm excited about the endless
        possibilities that the industry offers and eager to learn as much as I
        can. My goal is to become a successful web developer and contribute to
        the ever-growing digital landscape. I'm constantly seeking new
        challenges and opportunities to expand my skills, so feel free to reach
        out and connect with me!
      </div>

    </div>
  );
}
