import "./App.css";
import Darkmode from "./Components/Darkmode";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";

import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes, link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const darkmode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("You Just Enable Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("You Just Enable Light Mode", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="demoText" mode={mode} darkmode={darkmode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textarea mode={mode} />}></Route>
            <Route path="/about" element={<Darkmode mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
