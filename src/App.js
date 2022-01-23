import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";

// react-router-dom v6 replaced "Switch" with "Routes"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
    <div className='app__body'>
      <Routes>
        <Route exact path="/" element={<WebcamCapture />}/>
      </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
