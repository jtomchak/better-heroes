import React, { Component } from "react";
// import { ADD_HERO } from "../../ActionTypes";
import * as types from "../../ActionTypes";

class AddHero extends Component {
  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.github.com/users/${this.refs.userInput
        .value}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
    )
      .then(res => res.json())
      .then(payload => console.log(payload))
      .catch(err =>
        this.setState({
          error: err
        })
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" type="text" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default AddHero;
