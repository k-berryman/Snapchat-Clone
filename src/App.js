import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview"
import Chats from "./Chats";

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
        <Route path="/chats" element={<Chats />}/>
        <Route path="/preview" element={<Preview />}/>
        <Route exact path="/" element={<WebcamCapture />}/>
      </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
