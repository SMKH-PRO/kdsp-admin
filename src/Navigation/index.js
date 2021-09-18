import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Login } from "./../Screen";
import { useSelector } from "react-redux";
import {Sidebar} from "./../Components"
import ROUTES, { loginPath } from "./routes";
const Navigation = () => {
  const currentUser = useSelector((state) => state.userReducer?.currentUser);
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact={true} path={loginPath}>
          <Login />
        </Route>

        {ROUTES.map((route) => {
          return (
            <Route
              key={route?.path}
              exact={route?.exact === false ? false : true}
              path={route?.path}
            >
              <Sidebar>
                <route.component {...route} />
              </Sidebar>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Navigation;
