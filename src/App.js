import "./App.css";
import Page1 from "./page1.js";
import Page2 from "./page2.js";
import Page3 from "./page3.js";
import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [objectInput, changeState] = useState({
    resume: "",
    jobDesc: "",
    addtlInfo: "",
    coverLetter: "",
  });

  //   function update(text){
  //     changeState({
  //         text1: "x",
  //         jobDesc: "y"
  //     })
  // }

  const obj = { prop: objectInput, setProp: changeState };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home prop={obj} />} />
        <Route path="page1" element={<Page1 prop={obj} />} />
        <Route path="page2" element={<Page2 prop={obj} />} />
        <Route path="page3" element={<Page3 prop={obj} />} />
      </Routes>
    </div>
  );
};

export default App;
