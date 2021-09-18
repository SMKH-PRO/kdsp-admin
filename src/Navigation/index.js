import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Login } from "./../Screen";
const Navigation = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/users">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
