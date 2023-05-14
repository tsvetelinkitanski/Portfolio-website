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
    <>
      <div className="title-wrapper">
        <div>Hi there👋, I'm</div>
        <div className="name">Tsvetelin Kitanski</div>
        <p className="description">
          Transforming ideas into functional, elegant solutions - let's
          collaborate!{" "}
        </p>
      </div>
      <Button
        onClick={() => scroll.scrollToBottom()}
        sx={{ marginLeft: 10, marginTop: 5 }}
        variant="outlined"
        size="large"
      >
        Get in touch
      </Button>

      <About/>

      {/* <Headline name = "Projects"/>  */}
      <Experience/>
      {/* <Headline name = "Projects"/>  */}

      <Projects />

      {/* <Headline name = "Contacts"/>  */}

      <Contact />
    </>
  );
}
