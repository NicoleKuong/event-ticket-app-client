import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventContainer from "./components/Event/EventContainer";
import TicketsListContainer from "./components/TicketsList/TicketsListContainer";
import TicketContainer from "./components/Ticket/TicketContainer";
import TicketDetailsContainer from "./components/TicketDetails/TicketDetailsContainer";
import EventListContainer from "./components/EventList/EventListContainer";
import EditTicketContainer from "./components/EditTicket/EditTicketContainer";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  protectedRoute = (Component, routerProps) => {
    const { token } = this.props.user;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={EventListContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route
              exact
              path="/events"
              render={(routerProps) =>
                this.protectedRoute(EventContainer, routerProps)
              }
            />
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
            <Route
              exact
              path="/ticket/:ticketId/edit"
              component={EditTicketContainer}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
