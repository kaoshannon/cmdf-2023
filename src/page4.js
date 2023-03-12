import "./App.css";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import theme from "./theme";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Page4(object) {
  const navigate = useNavigate();
  const [addtlInfoInputDummy, setaddtlInfoInputDummy] = useState("");
  const [coverLetterOutput, setCoverLetterOutput] = useState(
    object.prop.prop.coverLetter
  );

  const [dummyResult, setDummyResult] = useState("");
  const [bestResult, setBestResult] = useState("");

  console.log(object);
  console.log(object.prop);
  const [questions, setQuestions] = useState("");
  const apiKey = process.env.API_KEY;
  const generateQs = () => {
    const input_arr = addtlInfoInputDummy.split("- ");
    const removedElement = input_arr.shift();
    console.log(input_arr);
    const prompt_examples = [
      {
        text: "Developed value-added business strategies and comprehensive go to market plans that boosted revenue by 80%",
        label: "Business Analyst",
      },
      {
        text: "Participate in knowledge transfer and requirement gathering sessions to help clarify business goals and improvement areas",
        label: "Business Analyst",
      },
      {
        text: "Developed and executed detailed product roadmaps using Agile methodology that laid the foundation for launching 15 new products in 3 years, equating to $20M in revenue.",
        label: "Product Manager",
      },
      {
        text: "Played a pivotal role in shaping GTM strategy, including product testing, naming, audience targeting, social media, event activations, and digital marketing.",
        label: "Product Manager",
      },
      {
        text: "Led the redesign of the e-Commerce site, managed a team of 6 to move from Amazon platform to Magento, resulting in improved data analytics, ease of user capabilities, 70% increase in mobile traffic, and 40% increase in revenue.",
        label: "Product Manager",
      },
      {
        text: "Communicates with staff or clients to understand specific system requirements.",
        label: "System Engineer",
      },
      {
        text: "Provides advice on project costs, design concepts, or design changes.",
        label: "System Engineer",
      },
      {
        text: "Evaluates utility of software or hardware technologies.",
        label: "System Engineer",
      },
      {
        text: "Collaborates with engineers or software developers to select appropriate design solutions or ensure the compatibility of system components.",
        label: "System Engineer",
      },
    ];
    const options = {
      method: "POST",
      url: "https://api.cohere.ai/v1/classify",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: "Bearer oeSQtij6wRDr91pa34NznONl3zjShiQo1EUVTjcQ",
      },
      data: {
        inputs: input_arr,
        examples: prompt_examples,
        truncate: "END",
        model: "large",
        // prompt: 'Based on this\nGenerate five guiding questions about my past experience for me to answer in my cover letter that aligns with what the job description is looking for--'
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.classifications);
        setDummyResult(response.data.classifications);
      })
      .catch(function (error) {
        console.error(error);
      });

    const words = ["Business Analyst", "Product Manager", "System Engineer"];
    function elementCount(arr, element) {
      return arr.filter(
        (currentElement) => currentElement.prediction == element
      ).length;
    }
    const num_PM = elementCount(dummyResult, "Product Manager");
    const num_Dev = elementCount(dummyResult, "System Engineer");
    const num_Analyst = elementCount(dummyResult, "Business Analyst");
    if (num_PM > num_Dev + num_Analyst) {
      setBestResult("Product Manager");
    } else if (num_Dev > num_PM + num_Analyst) {
      setBestResult("System Engineer");
    } else if (num_Analyst > num_PM + num_Dev) {
      setBestResult("Business Analyst");
    }
  };

  const handleAddtlInfo = (event) => {
    setaddtlInfoInputDummy(event.target.value);
    console.log("handling addtl info input");
  };

  // const handleCoverLetter = (event) => {
  //   setCoverLetterOutput(event.target.value);
  //   console.log("handling cover letter output");
  //   generateCoverLetter();
  // };

  return (
    <div className="row">
      <div className="sidebar">
        <h2>Dear Hiring Manager...</h2>
        <h3>💎 Dashboard</h3>
        <h3>🔥 Copy & Paste</h3>
        <h3>👉 Add info</h3>
        <h3>🚀 View results</h3>
        <u>
          <h3>❓ Who am I?</h3>
        </u>
      </div>

      <div className="main">
        <div className="row">
          <h1>See how your resume is classified!</h1>
        </div>

        <Stack spacing={3} alignItems="center">
          <div className="row">
            <TextField
              id="addtl-info-basic"
              label="Post some resume bullet points, break each point by '•'"
              value={addtlInfoInputDummy}
              onChange={handleAddtlInfo}
              variant="outlined"
              multiline
              rows={10}
              style={{ width: 400, marginBottom: 20, marginRight: 20 }}
            />
          </div>

          <div className="row">
            <Button onClick={generateQs} variant="contained" color="secondary">
              Classify it 👇
            </Button>
          </div>

          <div>
            <h3>You sound like a... {bestResult}</h3>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Page4;
