import './App.css';
import React from 'react';
import { TextField, Button } from '@mui/material';

function page1() {
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
        <TextField id="resume-basic" label="Resume" variant="outlined" multiline rows={20} style={{width:400, marginBottom: 20, marginRight: 20}}/>
        <TextField id="job-basic" label="Job Description" variant="outlined" multiline rows={20} style={{width:400, marginBottom: 20}}/>
        </div>
        <Button variant="contained" color="secondary">Generate</Button>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </div>
    </div>
    </div>
  );
}

export default page1;