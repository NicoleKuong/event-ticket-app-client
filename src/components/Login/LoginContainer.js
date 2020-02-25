import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user";
import { connect } from "react-redux";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <div>
            <h1>You are logged in</h1>
          </div>
        ) : (
          <LoginForm
            text="Login"
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.token !== null
  };
};

export default connect(mapStateToProps)(LoginContainer);
