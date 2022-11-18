import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
import About from "./component/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function App() {
  const [mode, setMode] = useState("light"); //Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null); //Wheather dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toogle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogle={toogle} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/about">
            <About about="About Us" mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils- Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
