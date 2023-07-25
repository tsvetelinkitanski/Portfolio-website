import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Headline from "./Headline/Headline";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Experience from "../Experience/Experience";

export default function Home() {
  return (
    <div className="content-wrapper">
      <div className="title-and-picture-wrapper">
        <div className="picture-wrapper">
          <img
            className="picture"
            src={require("../../images/profilepicture.jpg").default}
            alt="Profile picture"
          />
        </div>
        <div className="title-wrapper">
          <div>Hi there👋, I'm</div>
          <div className="name">Tsvetelin Kitanski</div>
          <p className="description">
            Transforming ideas into functional, elegant solutions - let's
            collaborate!{" "}
          </p>
          <Button
            // onClick={() => scroll.scrollToBottom()}
            sx={{ marginLeft: 0, marginTop: 5, marginBottom: "50px", background: "#10F0FC", color: "#1C2025" }}
            variant="outlined"
            size="large"
          >
            Download Resume
          </Button>
        </div>
      </div>

      <Headline name="About" />

      <About />

      <Headline name="Experience" />

      <Experience />

      <Headline name="Projects" />

      <Projects />

      <Headline name="Contacts" />

      <Contact />
    </div>
  );
}
