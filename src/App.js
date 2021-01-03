import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/layout/TopNavBar";
import LoginPage from "./components/pages/LoginPage";
import Test98 from "./components/Test98";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Test98} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
