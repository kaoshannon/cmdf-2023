import "./App.css";
import axios from "axios";
import { React, useState, useRef } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "./theme";

function Page3(object) {
  const [questions, setQuestions] = useState("");
  const apiKey = process.env.API_KEY;
  const hitAPI = () => {
    const options = {
      method: "POST",
      url: "https://api.cohere.ai/v1/generate",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: apiKey,
      },
      data: {
        model: "command-xlarge-nightly",
        max_tokens: 120,
        return_likelihoods: "GENERATION",
        truncate: "END",
        temperature: 0.3,
        p: 0.75,
        prompt:
          "Based on this cover letter below:\nMy most relevant working experience that replicates a Product Manager is at my most recent role at Procter & Gamble as an IT Manager, where I created a process to help automatically validate contracts. The previous processes involved people manually checking multiple fields across different datasets, each validation required around 10-15 minutes per contract. For example, whether the submitter had the correct permission and whether the supplier was valid. Furthermore, there were multiple data entry errors because there was no template available. To solve this, I ideated from scratch the process improvements, technical features, and user journeys. I communicated, pitched my solution to product owners of the datasets that the team used, reached out to cloud architect directors, and obtained approval from the global application manager for Coupa to launch the application in production.This experience taught me essential skills in product management, such as how to develop user stories, manage a dev team, and how to ensure that scope creep does not happen throughout the product development life cycle. In this case, I learned how to communicate to the client when a feature was out of scope, which we could work on within our team’s next sprint and explain why certain features could or could not be built. Furthermore, as we are only a small team spread out globally, I was also a developer and built the tool utilizing Microsoft Azure Logic Apps. \n\nGenerate 5 smart questions to get more information about me for my cover letter--",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.generations[0].text);
        setQuestions(response.data.generations[0].text);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
        <h2>Dear Hiring Manager...</h2>
        <h3>💎 Dashboard</h3>
        <h3>🔥 Copy & Paste</h3>
        <h3>👉 Add info</h3>
        <h3>🚀 View results</h3>
      </div>

      <div className="main">
        <div className="row">
          <h1>Your custom cover letter</h1>
        </div>

        <div className="row">
          <TextField
            inputRef={inputRef}
            id="final-cover-letter"
            label="Your customized cover letter"
            variant="outlined"
            multiline
            rows={20}
            value={object.prop.prop.coverLetter}
            style={{ width: 400, marginBottom: 20, marginRight: 20 }}
          />
          <Button onclick={handleCopy}>Copy</Button>
        </div>

        <div className="row">
          <Link to="/page2">
            <ThemeProvider theme={theme}>
              <Button
                onClick={questions}
                variant="contained"
                color="secondary"
                style={{ marginRight: 20 }}
              >
                Add more info
              </Button>
            </ThemeProvider>
          </Link>
          <Link to="/page1">
            <ThemeProvider theme={theme}>
              <Button onClick={hitAPI} variant="contained" color="secondary">
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
