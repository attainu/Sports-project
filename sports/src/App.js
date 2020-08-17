import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import AllLeague from "./pages/League/AllLeague";
import SingleLeague from "./pages/SingleLeague/SingleLeague";
import SingleTeam from "./pages/SingleTeam/SingleTeam";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/allLeague" component={AllLeague} />
          <Route
            exact
            path="/singleLeague/:leagueID"
            component={SingleLeague}
          />
          <Route exact path="/singleTeam/:teamID" component={SingleTeam} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
