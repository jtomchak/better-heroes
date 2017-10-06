import React, { Component } from "react";
// import { ADD_HERO } from "../../ActionTypes";
import * as types from "../../ActionTypes";

class AddHero extends Component {
  state = {
    hero: {},
    error: undefined
  };
  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.github.com/users/${this.refs.userInput
        .value}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
    )
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(payload =>
        this.setState({
          hero: {
            name: payload.name,
            bio: payload.bio,
            email: payload.email,
            id: payload.id
          },
          error: undefined
        })
      )
      .catch(err =>
        this.setState({
          hero: {},
          error: err
        })
      );
    this.refs.userInput.value = "";
  };

  render() {
    const hero = this.state.hero;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" type="text" />
          <button>Search</button>
        </form>
        <br />
        {hero.name && (
          <div>
            <label>Name: {hero.name}</label>
            <button onClick={() => console.log("ADD ME")}>Add hero</button>
          </div>
        )}
        {this.state.error && (
          <div>
            <p style={{ color: "red", fontSize: 24 }}>
              User {this.state.error.message}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default AddHero;
