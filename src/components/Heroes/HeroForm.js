import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveHero } from "../../actions/actions";

import { getHeroById } from "../../heroes.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: this.props.hero
    };
  }

  //Lifecycle method
  componentWillMount() {}

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
    const hero = this.state.hero;
    this.props.onSave(hero.id, hero.name);
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

const mapStatetoProps = (state, props) => {
  const heroid = parseInt(props.match.params.heroid);
  return {
    hero: state.heroes.find(hero => hero.id === heroid)
  };
};

//we need to connect our dispatch to this component
const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveHero, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(HeroForm);
