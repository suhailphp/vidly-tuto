import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Home from "./components/home";

function App() {
  return (
    <div>
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
