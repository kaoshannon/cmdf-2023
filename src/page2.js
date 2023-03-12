import "./App.css";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import theme from "./theme";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function Page2(object) {
  const navigate = useNavigate();
  const [addtlInfoInput, setaddtlInfoInput] = useState(
    object.prop.prop.addtlInfo
  );
  const [coverLetterOutput, setCoverLetterOutput] = useState(
    object.prop.prop.coverLetter
  );

  console.log(object);
  console.log(object.prop);
  const [questions, setQuestions] = useState("");
  const apiKey = process.env.API_KEY;
  const generateQs = () => {
    const options = {
      method: "POST",
      url: "https://api.cohere.ai/v1/generate",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: "Bearer oeSQtij6wRDr91pa34NznONl3zjShiQo1EUVTjcQ",
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
        // prompt: 'Based on this\nGenerate five guiding questions about my past experience for me to answer in my cover letter that aligns with what the job description is looking for--'
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

  const handleAddtlInfo = (event) => {
    setaddtlInfoInput(event.target.value);
    console.log("handling addtl info input");
  };

  const generateCoverLetter = async (event) => {
    console.log("handling cover letter output generation");
    try {
      // const response = await fetch('https://example.com/data');
      // const data = await response.json();
      // console.log(data);
      const prompt_generate = 'Based on this resume:' + object.prop.prop.resume + '\n And based on this job description:' + object.prop.prop.resume + '\n and these important information:' + addtlInfoInput + '\n Use all this information to generate a cover letter for my job application--'
      console.log(prompt_generate)
      const options = {
        method: "POST",
        url: "https://api.cohere.ai/v1/generate",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Bearer oeSQtij6wRDr91pa34NznONl3zjShiQo1EUVTjcQ",
        },
        data: {
          model: "command-xlarge-nightly",
          max_tokens: 320,
          return_likelihoods: "GENERATION",
          truncate: "END",
          temperature: 0.7,
          p: 0.75,
          prompt: prompt_generate,
          // prompt: 'Based on this\nGenerate five guiding questions about my past experience for me to answer in my cover letter that aligns with what the job description is looking for--'
        },
      };

      const response = await axios.request(options)
      // setCoverLetterOutput(response.data.generations[0].text)

      // axios
      //   .request(options)
      //   .then(function (response) {
      //     console.log(response.data);
      //     console.log(response.data.generations[0].text);
      //     setCoverLetterOutput(response.data.generations[0].text);
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });

      object.prop.setProp({
        resume: object.prop.prop.resume,
        jobDesc: object.prop.prop.jobDesc,
        addtlInfo: addtlInfoInput,
        coverLetter: response.data.generations[0].text,
      });
      console.log("set coverLetter text in object to pass to page 3");
      console.log(object.prop);
      setTimeout(() => {
        navigate("/page3")
      }, 150)
      // <Navigate to="/page3" />;
    } catch (error) {
      console.error(error);
    }
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
      </div>

      <div className="main">
        <div className="row">
          <h1>Step 2. Add Info</h1>
        </div>

        <div className="row">
          <h3>We’re only as smart as the information you give us.</h3>
          <h4>
            Please add anything else you're proud of or get guiding questions to
            address what your future employer is looking for!
          </h4>
        </div>

        <Stack spacing={3} alignItems="center">
          <div className="row">
            <Button onClick={generateQs} variant="contained" color="secondary">
              Smart Question Generator 👇
            </Button>
          </div>

          <Box
            sx={{
              width: 600,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
            }}
          >
            {questions}
          </Box>

        <div className="row">
          <TextField
            id="addtl-info-basic"
            label="What else do you want us to know?"
            value={addtlInfoInput}
            onChange={handleAddtlInfo}
            variant="outlined"
            multiline
            rows={10}
            style={{ width: 400, marginBottom: 20, marginRight: 20 }}
          />
        </div>

        </Stack>


        <div className="row">
          <Link to="/page1">
            <ThemeProvider theme={theme}>
              <Button
                onClick={questions}
                variant="contained"
                color="secondary"
                style={{ marginRight: 20 }}
              >
                Back
              </Button>
            </ThemeProvider>
          </Link>
          {/* <Link to="/page3"> */}
          <ThemeProvider theme={theme}>
            <Button
              onClick={generateCoverLetter}
              variant="contained"
              color="secondary"
            >
              Generate!
            </Button>
          </ThemeProvider>
          {/* </Link> */}
        </div>
      </div >
    </div >
  );
}

export default Page2;
