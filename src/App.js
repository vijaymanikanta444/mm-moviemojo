import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/layout/topNavBar/TopNavBar";
import SideBar from "./components/layout/sidebar/SideBar";
import LoginPage from "./components/pages/LoginPage";
import Test98 from "./components/Test98";

function App() {
  const [sidebar, setsidebar] = useState(true);

  const showSidebar = () => setsidebar(!sidebar);
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />
        <div className={sidebar ? "test" : "test1"}>
          <Switch>
            <Route exact path="/" component={Test98} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
