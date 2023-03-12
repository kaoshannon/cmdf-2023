import './App.css';
import axios from 'axios';
import { React, useState } from 'react';
import { TextField, Button, ThemeProvider} from '@mui/material';
import { Link } from 'react-router-dom';
import theme from './theme';

function Page2(object) {

    console.log(object)
    console.log(object.prop)
    const [questions, setQuestions] = useState('')
    const apiKey = process.env.API_KEY;
    const hitAPI = () => {
        const options = {
            method: 'POST',
            url: 'https://api.cohere.ai/v1/generate',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: apiKey
            },
            data: {
                model: 'command-xlarge-nightly',
                max_tokens: 120,
                return_likelihoods: 'GENERATION',
                truncate: 'END',
                temperature: 0.3,
                p: 0.75,
                prompt: 'Based on this cover letter below:\nMy most relevant working experience that replicates a Product Manager is at my most recent role at Procter & Gamble as an IT Manager, where I created a process to help automatically validate contracts. The previous processes involved people manually checking multiple fields across different datasets, each validation required around 10-15 minutes per contract. For example, whether the submitter had the correct permission and whether the supplier was valid. Furthermore, there were multiple data entry errors because there was no template available. To solve this, I ideated from scratch the process improvements, technical features, and user journeys. I communicated, pitched my solution to product owners of the datasets that the team used, reached out to cloud architect directors, and obtained approval from the global application manager for Coupa to launch the application in production.This experience taught me essential skills in product management, such as how to develop user stories, manage a dev team, and how to ensure that scope creep does not happen throughout the product development life cycle. In this case, I learned how to communicate to the client when a feature was out of scope, which we could work on within our team’s next sprint and explain why certain features could or could not be built. Furthermore, as we are only a small team spread out globally, I was also a developer and built the tool utilizing Microsoft Azure Logic Apps. \n\nGenerate 5 smart questions to get more information about me for my cover letter--'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                console.log(response.data.generations[0].text)
                setQuestions(response.data.generations[0].text)
            })
            .catch(function (error) {
                console.error(error);
            });
    }


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
            <h1>
              Step 2. Add Info
            </h1>
          </div>
            
        <div className="row">
            <h3>
            We’re only as smart as the information you give us. 
            </h3>
          </div>

        <div className="row">
            <h3>
              Please answer these three questions based on the job description so we can further personalize your cover letter
              </h3>
            </div>

        <div className="row">
          {/* DROP DOWN */}
          <h3>Smart Question Generator 👇</h3>
          <h5>
            {questions}
            </h5>
          </div>
        
          <div className="row">
            <TextField id="addtl-info-basic" label="What else do you want us to know?" variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20, marginRight: 20 }} />       
          </div> 

          <div className="row">
            <Link to="/page1">
              <ThemeProvider theme={theme}>
                  <Button onClick={questions} variant="contained" color="secondary" style={{marginRight:20}}>Back</Button>
                </ThemeProvider>
            </Link>
            <ThemeProvider theme={theme}>
              <Button onClick={hitAPI} variant="contained" color="secondary">Generate!</Button>
            </ThemeProvider>
            
          </div>
        </div>
      </div>
    );
}

export default Page2;