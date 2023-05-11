import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Headline from "./Headline/Headline";
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="title-wrapper">
        <div>Hi there👋, I'm</div>
        <div className="name">Tsvetelin Kitanski</div>
        <p className="description">Transforming ideas into functional, elegant solutions - let's collaborate! </p>
      </div>
      <Button
        sx={{ marginLeft: 10, marginTop: 5 }}
        variant="outlined"
        size="large"
        onClick={()=>navigate("/Contact")}
      >
        Get in touch
      </Button>

      <Headline name = "Projects"/> 

      <Projects/>

      <Headline name = "Contacts"/> 

    <Contact/>
    </>
  );
}
