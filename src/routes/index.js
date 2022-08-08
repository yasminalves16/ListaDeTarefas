import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
