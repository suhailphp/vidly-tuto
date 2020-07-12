import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Customers from "./components/cutomers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
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

export default App;
