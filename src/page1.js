import './App.css';
import { React, useState } from 'react';
import { TextField, Button , ThemeProvider} from '@mui/material';
import { Link } from 'react-router-dom';
import theme from './theme';

const Page1 = (objectYAY) => {

  const [resumeInput, setResumeInput] = useState(objectYAY.prop.prop.text);
  const [jobDescripInput, setJobDescripInput] = useState(objectYAY.prop.prop.jobDesc);

  // rename the states 
  // figure out text val into text and jd into job descrip -> within YAY, text =resuminput which i wrote for another usestate
  // where event is from 

    const update = () => {
        // objectYAY.prop.setProp({
        //     text: resumeInput,
        //     jobDesc: jobDescripInput
        // })
        objectYAY.prop.setProp({
            text: resumeInput,
            jobDesc: jobDescripInput
        })
        console.log("successfully handled changes")
        // redirect here or something 
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
                    {/* <h1>{resumeInput}</h1> */}
                    <div className="row">
                        <TextField id="resume-basic" label="Resume" value={resumeInput} onChange={handleResumeInputChange} variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20, marginRight: 20 }} />
                        <TextField id="job-basic" label="Job Description" value={jobDescripInput} onChange={handleJobDescripInputChange} variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20 }} />
                    </div>
                    <div>
                        {/* <Button onClick={update} variant="contained" color="secondary" link="">Next</Button> */}
                    </div>
                    <Link to="/page2">
                    <ThemeProvider theme={theme}>
                      <Button onClick={update} variant="contained" color="secondary">Next</Button>
                      </ThemeProvider>
                    </Link>
                </div>
        </div>
    </div >
  );
}

export default Page1;
