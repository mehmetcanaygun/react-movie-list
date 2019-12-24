import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/movies/Movie";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";
import MovieState from "./context/MovieState";

const App = () => {
  return (
    <MovieState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
