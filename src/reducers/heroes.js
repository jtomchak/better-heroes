import * as types from "../ActionTypes";

const initialState = [
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

export default function heroes(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_HERO:
      const heroIndex = state.map(x => x.id).indexOf(action.id);
      //do logic to save hero, and return new state
      return [
        ...state.slice(0, heroIndex),
        { ...state[heroIndex], name: action.name },
        ...state.slice(heroIndex + 1, state.length)
      ];
    default:
      return state;
  }
}
