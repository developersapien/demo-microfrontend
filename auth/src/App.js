import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
