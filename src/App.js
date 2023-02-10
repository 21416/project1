import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const togglemode = () => {
    if (mode == 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("dark mode disabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode enabled", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          

          <Route exact path='/' element={<TextForm showAlert={showAlert} text="Enter Your Text" mode={mode} />}/>
            
          
          <Route exact path='/about' element={<About />}/>
            
          
        </Routes>

      </div>
      </Router>
    </>

  );
}

export default App;
