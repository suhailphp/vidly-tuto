import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Customers from "./components/cutomers";
import Rental from "./components/rental";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
