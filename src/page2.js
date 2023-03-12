import './App.css';
import axios from 'axios';
import { useState } from 'react';

function Page2() {

    const [questions, setQuestions] = useState('')
    
    const hitAPI = () => {
        const options = {
            method: 'POST',
            url: 'https://api.cohere.ai/v1/generate',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer oeSQtij6wRDr91pa34NznONl3zjShiQo1EUVTjcQ'
            },
            data: {
                max_tokens: 300,
                return_likelihoods: 'NONE',
                truncate: 'END',
                temperature: 0.9,
                p: 0.75,
                prompt: 'Based on this cover letter below:\nMy most relevant working experience that replicates a Product Manager is at my most recent role at Procter & Gamble as an IT Manager, where I created a process to help automatically validate contracts. The previous processes involved people manually checking multiple fields across different datasets, each validation required around 10-15 minutes per contract. For example, whether the submitter had the correct permission and whether the supplier was valid. Furthermore, there were multiple data entry errors because there was no template available. To solve this, I ideated from scratch the process improvements, technical features, and user journeys. I communicated, pitched my solution to product owners of the datasets that the team used, reached out to cloud architect directors, and obtained approval from the global application manager for Coupa to launch the application in production.This experience taught me essential skills in product management, such as how to develop user stories, manage a dev team, and how to ensure that scope creep does not happen throughout the product development life cycle. In this case, I learned how to communicate to the client when a feature was out of scope, which we could work on within our team’s next sprint and explain why certain features could or could not be built. Furthermore, as we are only a small team spread out globally, I was also a developer and built the tool utilizing Microsoft Azure Logic Apps. \n\nGenerate 5 smart questions to get more information about me for my cover letter:'
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
        <div className="App">
            <header className="App-header">
                <h2> Start generating questions from your resume and cover letter.</h2>
                <button onClick={hitAPI}> Generate now</button>
                <p> {questions} </p>
                <p>
                    this is page 2
                </p>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </header>
        </div>
    );
}

export default Page2;