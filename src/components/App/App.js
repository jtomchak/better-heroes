import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Heroes from "../Heroes/Heroes";
import HeroForm from "../Heroes/HeroForm";
import NewHero from "../Heroes/AddHero";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/newhero" activeClassName="active">
              New Hero
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/heroes" component={Heroes} />
          <Route path={"/heroes/details/:heroid"} component={HeroForm} />
          <Route path="/newhero" component={NewHero} />
        </div>
      </Router>
    );
  }
}

export default App;
