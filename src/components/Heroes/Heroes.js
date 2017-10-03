import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeroesList from "../Heroes/HeroesList";
import "./Heroes.css";

class Heroes extends Component {
  //state. stuff our component wants to know about
  state = {
    selectedHero: {
      name: "",
      id: undefined //haven't picked one yet!!! so do it already!
    }
  };

  //life cycle hooks. do stuff when init
  componentWillMount() {}

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
          heroes={this.props.heroes}
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

const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Heroes);
