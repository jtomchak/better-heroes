import React, { Component } from "react";
import "./App.css";

const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  //state. stuff our component wants to know about
  state = {
    heroes: HEROES, //property of state. an array of heroes
    selectedHero: {
      name: "",
      id: undefined //haven't picked one yet!!! so do it already!
    }
  };

  //takes selected hero and updates selectedHero Property
  handleSelectedHero = hero => {
    this.setState({
      selectedHero: {
        ...hero
      }
    });
  };

  //takes event from form input and updates selectedHero name
  handleInputChange = event => {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  };

  //handle submit update heroes array for state
  handleHeroSubmit = event => {
    const hero = this.state.selectedHero;
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, heroIndex),
        { id: hero.id, name: hero.name },
        ...this.state.heroes.slice(heroIndex + 1, this.state.heroes.length)
      ]
    });
    event.preventDefault();
  };

  render() {
    const heroesList = this.state.heroes.map(hero => (
      <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
        <span className="badge">{hero.id}</span> {hero.name}
      </li>
    ));
    return (
      <div className="App">
        <h1>Git Heroes</h1>
        <ul className="heroes">{heroesList}</ul>
        <div>
          <div>
            <label>ID: </label>
            {this.state.selectedHero.id}
          </div>
          <form onSubmit={this.handleHeroSubmit}>
            <label>Hero Name: </label>
            <input
              type="text"
              value={this.state.selectedHero.name}
              onChange={e => this.handleInputChange(e)}
            />
            <input className="button" type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
