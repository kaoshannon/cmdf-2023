import './App.css';
import { React, useState } from 'react';
import { TextField, Button , ThemeProvider} from '@mui/material';
import { Link } from 'react-router-dom';
import theme from './theme';

const Page1 = (objectYAY) => {

  const [resumeInput, setResumeInput] = useState('');
  const [jobDescripInput, setJobDescripInput] = useState('');

    const update = () => {
        objectYAY.prop.setProp({
            text: "I want to be a software developer in the future.",
            jobDesc: "Work 28 hours a week with children."
        })

        handleResumeInputChange()
        handleJobDescripInputChange()
        console.log("successfully handled changes")
    }

    const handleResumeInputChange = (event) => {
      setResumeInput(event.target.value);
      console.log("handling resume input")
    };

    const handleJobDescripInputChange = (event) => {
      setJobDescripInput(event.target.value);
      console.log("handling job descrip input")
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
                    <h1>
                        Step 1. Copy & Paste
                    </h1>
                    <div className="row">
                        <TextField id="resume-basic" label="Resume" value={resumeInput} variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20, marginRight: 20 }} />
                        <TextField id="job-basic" label="Job Description" value={jobDescripInput} variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20 }} />
                    </div>
                    <Link to="/page2">
                    <ThemeProvider theme={theme}>
                      <Button onClick={update} variant="contained" color="secondary" link="">Next</Button>
                      </ThemeProvider>
                    </Link>
                </div>
        </div>
    </div >
  );
}

export default Page1;
