import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventContainer from "./components/Event/EventContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/events" component={EventContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
