import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroesList from "../Heroes/HeroesList";
import HeroForm from "../Heroes/HeroForm";
import "./Heroes.css";

import { getHeroes } from "../../heroes.service";

class Heroes extends Component {
  //state. stuff our component wants to know about
  state = {
    heroes: [], //property of state. an array of heroes
    selectedHero: {
      name: "",
      id: undefined //haven't picked one yet!!! so do it already!
    }
  };

  //life cycle hooks. do stuff when init
  componentWillMount() {
    getHeroes.then(payload => {
      this.setState({
        heroes: payload
      });
    });
  }

  //takes selected hero and updates selectedHero Property
  handleSelectedHero = hero => {
    this.setState({
      selectedHero: {
        ...hero
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Git Heroes</h1>
        <HeroesList
          heroes={this.state.heroes}
          handleSelectedHero={this.handleSelectedHero}
        />
        {this.state.selectedHero.id && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Heroes;
