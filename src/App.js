import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/layout/TopNavBar";
import Test98 from "./components/Test98";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <h1>client Setup</h1>

        <Test98 />
      </Router>
    </div>
  );
}

export default App;
