import React from "react";

const HeroForm = props => (
  <div>
    <div>
      <label>ID: </label>
      {props.selectedHero.id}
    </div>
    <form onSubmit={props.heroSubmit}>
      <label>Hero Name: </label>
      <input
        type="text"
        value={props.selectedHero.name}
        onChange={e => props.inputChange(e)}
      />
      <input className="button" type="submit" value="submit" />
    </form>
  </div>
);

export default HeroForm;
