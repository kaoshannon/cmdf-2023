import "./App.css";
import { React, useState } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "./theme";

const home = () => {
  return (
    <div className="row">
      <div className="sidebar">
        <h2>Dear Hiring Manager...</h2>
        <h3>💎 Dashboard</h3>
        <h3>🔥 Copy & Paste</h3>
        <h3>👉 Add info</h3>
        <h3>🚀 View results</h3>
      </div>
    </div>
  );
};

export default home;
