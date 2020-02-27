import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventContainer from "./components/Event/EventContainer";
import TicketsListContainer from "./components/TicketsList/TicketsListContainer";
import TicketContainer from "./components/Ticket/TicketContainer";
import TicketDetailsContainer from "./components/TicketDetails/TicketDetailsContainer";
import EventListContainer from "./components/EventList/EventListContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/" component={EventListContainer} />
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
          <Route
            exact
            path="/ticket/:ticketId"
            component={TicketDetailsContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
