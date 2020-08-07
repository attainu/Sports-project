import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import AllLeague from "./pages/League/AllLeague";
import SingleLeague from "./pages/SingleLeague/SingleLeague";
import SingleTeam from "./pages/SingleTeam/SingleTeam";
import "./App.css";

class App extends Component {
  render()
  {
    return (
      <React.Fragment>
        <Switch>
          <Route exect path="/country" component={Country} />
          <Route path="/home" component={Home} />
          <Route path="/allLeague" component={AllLeague} />
          <Route path="/singleLeague" component={SingleLeague} />
          <Route path="/singleTeam" component={SingleTeam} />
        </Switch>
      </React.Fragment>
    )
  };
}

export default App;
