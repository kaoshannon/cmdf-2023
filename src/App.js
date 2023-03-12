import './App.css';
import Page1 from './page1.js'
import Page2 from './page2.js'
import Home from './Home.js'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';

const App = () => {

  const [objectInput, changeState] = useState({
    text: '',
    jobDesc: ''
  })

  const obj = {prop: objectInput, setProp: changeState}

  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Page1 prop={obj}/>} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> f3ecf537dbec344aab6f777fe62885b7520cbaa6
        <Route path="page1" element={<Page1 prop={obj}/>} />
        <Route path="page2" element={<Page2 prop={obj}/>} />
      </Routes>
    </div>
  );
}

export default App;