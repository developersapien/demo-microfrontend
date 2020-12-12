import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "../components/Landing";
import Pricing from "../components/Pricing";

export default ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
