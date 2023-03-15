import "./App.css";
import axios from "axios";
import { React, useState } from "react";
import { TextField, Button, ThemeProvider } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import theme from "./theme";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
    const prompt_questions =
      "Based on this resume:" +
      object.prop.prop.resume +
      "\n And based on this job description:" +
      object.prop.prop.jobDesc +
      "\n Generate 5 smart questions to get to know me better in my cover letter--";
    console.log(prompt_questions);
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
        prompt: prompt_questions,
        // prompt: 'Based on this\nGenerate five guiding questions about my past experience for me to answer in my cover letter that aligns with what the job description is looking for--'
      },
    };
    console.log("just sent a POST request to generate questions");
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.generations[0].text);
        setQuestions(response.data.generations[0].text);
        console.log("just set questions");
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
      const prompt_generate =
        "Based on this resume:" +
        object.prop.prop.resume +
        "\n And based on this job description:" +
        object.prop.prop.jobDesc +
        "\n and these important information:" +
        addtlInfoInput +
        "\n Use all this information to generate a cover letter for my job application--";
      console.log(prompt_generate);
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
        },
      };

      const response = await axios.request(options);
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
        navigate("/page3");
      }, 150);
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
          <h1>Step 2. Add Info</h1>
        </div>

        <div className="row">
          <h3>We’re only as smart as the information you give us.</h3>
          <br></br>
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

          {/* <Box
            sx={{
              width: 600,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.50",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "600",
              paddingLeft: "80px",
              paddingBottom: "30px",
            }}
          >
            <pre >{questions}</pre>
          </Box> */}

          <TextField
            id="final-cover-letter"
            value={questions}
            variant="outlined"
            multiline
            rows={8}
            style={{ width: 800, marginBottom: 20, marginRight: 20 }}
          />

          <div className="row">
            <TextField
              id="addtl-info-basic"
              label="Another chance to prove that you're the perfect candidate!"
              value={addtlInfoInput}
              onChange={handleAddtlInfo}
              variant="outlined"
              multiline
              rows={10}
              style={{ width: 800, marginBottom: 20, marginRight: 20 }}
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
      </div>
    </div>
  );
}

export default Page2;
