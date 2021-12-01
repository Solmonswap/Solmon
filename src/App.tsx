import React from "react";
import "./App.less";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <div className="Banner">
        <div className="Banner-description">
        This page is in beta and for testing purposes only.
        </div>
      </div>
    </div>
  );
}

export default App;
