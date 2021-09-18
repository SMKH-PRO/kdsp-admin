import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, NotFound404 } from "./../Screen";
import { useSelector } from "react-redux";
import { Sidebar } from "./../Components"
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

        {ROUTES.map((route, i) => {
          return (
            <Route
              key={route?.path}
              exact={route?.exact === false ? false : true}
              path={route?.path}
              key={i}
              render={(props) =>
                <Sidebar key={i} {...props}>
                  <route.component {...route} {...props} />
                </Sidebar>
              }
            />
          );
        })}

        <Route component={NotFound404} />

      </Switch>
    </Router >
  );
};

export default Navigation;
