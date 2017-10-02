import React, { Component } from "react";

import { getHeroById } from "../../heroes.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroid: parseInt(props.match.params.heroid),
      hero: undefined
    };
  }

  //Lifecycle method
  componentWillMount() {
    getHeroById(this.state.heroid).then(hero => {
      this.setState({
        hero: hero
      });
    });
  }

  //takes event from form input and updates selectedHero name
  handleInputChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  };

  //handle submit update heroes array for state
  handleHeroSubmit = event => {
    this.props.history.goBack();
    event.preventDefault();
  };

  render() {
    if (!this.state.hero) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <h2>{this.state.hero.name}</h2>
        <div>
          <label>ID: </label>
          {this.state.hero.id}
        </div>
        <form onSubmit={this.handleHeroSubmit}>
          <label>Hero Name: </label>
          <input
            type="text"
            value={this.state.hero.name}
            onChange={this.handleInputChange}
          />
          <input className="button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default HeroForm;
