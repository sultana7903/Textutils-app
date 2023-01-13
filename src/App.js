import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";

      // setInterval(() => {
      //   document.title = 'Textutils is very useful';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users ---> component 1
        /users/home ---> ---> component 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyze Below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
