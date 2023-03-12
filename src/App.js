import './App.css';
import Page1 from './page1.js'
import Page2 from './page2.js'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Page1/> } />
        <Route path="page1" element={ <Page1/> } />
        <Route path="page2" element={ <Page2/> } />
      </Routes>
    </div>
  );
}

export default App;