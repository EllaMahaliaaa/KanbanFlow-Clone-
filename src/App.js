import logo from "./logo.svg";
import React, {useEffect, useState} from "react";

import "./App.css";

function App() {
  const [testData, setTestData] = useState();

  useEffect(() => {
    fetch("/api/5").then((response) =>
      response.json().then((json) => setTestData(json))
    );
  }, []);

  return (
    <div class="split-container">
      <div class="left">
        <h1>Brello.</h1>
        <p>Text describing what Brello does</p>
      </div>
      <div class="right flex flex-col">
        <h1>Get started {testData?.name}</h1>
        <div class="flex btn-group">
          <button class="btn">Log in</button>
          <button class="btn btn-right">Sign up</button>
        </div>

        <div class="flex flex-col justify-center bottom-absolute">
          <h3>Brello.</h3>
          <div class="privacy-stuff flex space-around">
            <a href="">Privacy Policy</a>
            <span> | </span>
            <a href="">Terms of use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
