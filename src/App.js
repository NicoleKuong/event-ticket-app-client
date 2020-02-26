import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventContainer from "./components/Event/EventContainer";
import TicketsListContainer from "./components/TicketsList/TicketsListContainer";
import TicketContainer from "./components/Ticket/TicketContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/events" component={EventContainer} />
          <Route
            exact
            path="/events/:eventId"
            component={TicketsListContainer}
          />
          <Route
            exact
            path="/events/:eventId/newticket"
            component={TicketContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
