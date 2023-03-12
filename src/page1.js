import './App.css';
import React from 'react';
import { TextField, Button } from '@mui/material';


const page1 = (objectYAY) => {

    const update = () => {
        objectYAY.prop.setProp({
            text: "I want to be a software developer in the future.",
            jobDesc: "Work 28 hours a week with children."
        })
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
                        Step 1. Copy & Paste
                    </h1>
                    <div className="row">
                        <TextField id="resume-basic" label="Resume" variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20, marginRight: 20 }} />
                        <TextField id="job-basic" label="Job Description" variant="outlined" multiline rows={20} style={{ width: 400, marginBottom: 20 }} />
                    </div>
                    <Button variant="contained" color="secondary">Generate</Button>
                </div>

                <div className="App-header">
                    {console.log(objectYAY.prop.setProp)}
                    {/* {console.log(prop.setProp)} */}
                    <button onClick={update}> Generate now</button>
                    {console.log(objectYAY.prop)}
                    <p>
                        this is page 1
                    </p>
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </div>
        </div>
    </div >
  );
}



export default page1;
