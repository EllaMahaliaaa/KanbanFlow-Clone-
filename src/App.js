import logo from "./logo.svg";
import React from "react";

import "./App.css";

function App() {
  return (
    <div class="split-container">
      <div class="left">
        <h1>Brello.</h1>
        <p>Text describing what Brello does</p>
      </div>
      <div class="right flex flex-col">
        <h1>Get started</h1>
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
