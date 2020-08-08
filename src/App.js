import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Customers from "./components/cutomers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import { getCurrentUser } from "./services/authService";
class App extends Component {
  state = {};
  componentDidMount() {
    let user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:_id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
