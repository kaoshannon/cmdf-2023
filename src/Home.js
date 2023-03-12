import "./App.css";
import { React } from "react";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="App">
      <div className="row">
        <h2 className="dhm" style={{ textAlign: "right", paddingLeft: "40px" }}>
          Dear Hiring Manager ...
        </h2>

        <div className="buttons">
          <Button
            variant="outlined"
            style={{ marginLeft: 800, marginRight: 20, borderRadius: 35 }}
          >
            About Us
          </Button>
          <Button variant="outlined" style={{ borderRadius: 35 }}>
            Cohere.Api
          </Button>
        </div>
      </div>

      <main-home>
        <div className="row">
          <h1 className="inside-box">
            Job Hunting <br></br> Made Easy <br></br> in 2 Steps <br></br>
            <img src="/icon.jpeg" alt="Icon"></img>
            <h6>
              Make a perfect cover letter in a matter of minutes. Spend your
              money, time, and energy on what matters.{" "}
            </h6>
            <Link to="/page1">
              <Button
                variant="contained"
                color="success"
                style={{ borderRadius: 35 }}
              >
                {" "}
                Start now{" "}
              </Button>
            </Link>
          </h1>
        </div>
        {/* <Stack sx={{ boxShadow: 12, margin: 20, padding: 20, borderRadius: 10 }} /> */}
      </main-home>
      <Divider></Divider>
      <h1>Key Benefits</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px" }}>
          <img src="icon.jpeg" alt="Image 1" />
          <h3>Save Time & Money</h3>
          <p>
            Generates a data-driven cover letter with a digital career expert
            within minutes.{" "}
          </p>
        </div>
        <div style={{ margin: "10px" }}>
          <h3>Personalized</h3>
          <p>
            Personalizes cover letters according to resumes and the job
            descriptions.
          </p>
        </div>
        <div style={{ margin: "10px" }}>
          <h3>Satisfaction Guarentee</h3>
          <p>
            If satisfaction is not met, smart questions will be generate to
            create better results.
          </p>
        </div>
      </div>

      {/* <footer>
        <div>Element 1</div>
        <div>Element 2</div>
        <div>Element 3</div>
    </footer> */}
    </div>
  );
};

export default home;
