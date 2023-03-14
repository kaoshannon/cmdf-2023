import "./App.css";
import axios from "axios";
import { React, useState, useRef } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "./theme";

function Page3(object) {
  const [coverLetterOutput, setCoverLetterOutput] = useState("");
  console.log(object);
  console.log(object.prop);

  const apiKey = process.env.API_KEY;

  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div className="row">
      <div className="sidebar">
        <a href="/">
          <h2>Dear Hiring Manager...</h2>
        </a>
        <h3>💎 Dashboard</h3>
        <a href="/page1">
          <h3>🔥 Copy & Paste</h3>
        </a>
        <a href="/page2">
          <h3>👉 Add info</h3>
        </a>
        <a href="/page3">
          <h3>🚀 View results</h3>
        </a>
        <a href="/page4">
          <h3>❓ Who am I?</h3>
        </a>
      </div>

      <div className="main">
        <div className="row">
          <h1>Your custom cover letter 💫</h1>
        </div>
        <div className="row">
          <TextField
            inputRef={inputRef}
            id="final-cover-letter"
            value={object.prop.prop.coverLetter}
            variant="outlined"
            multiline
            rows={20}
            style={{ width: 400, marginBottom: 20, marginRight: 20 }}
          />
          <Button
            onclick={handleCopy}
            color="secondary"
            style={{ marginRight: 10, marginLeft: 10 }}
          >
            Copy
          </Button>
        </div>
        <div className="row">
          <Link to="/page2">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: 5, marginLeft: 10 }}
              >
                Add more info
              </Button>
            </ThemeProvider>
          </Link>
          <Link to="/page1">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                Restart
              </Button>
            </ThemeProvider>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page3;
