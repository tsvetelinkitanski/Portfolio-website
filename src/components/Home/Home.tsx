import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="title-wrapper">
        <div>Hi there👋, I'm</div>
        <div className="name">Tsvetelin Kitanski</div>
        <p className="description">I try to make awesome websites</p>
      </div>
      <Button
        sx={{ marginLeft: 10, marginTop: 5 }}
        variant="outlined"
        size="large"
        onClick={()=>navigate("/Contact")}
      >
        Get in touch
      </Button>
    </>
  );
}
