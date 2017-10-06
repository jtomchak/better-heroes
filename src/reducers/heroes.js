import * as types from "../ActionTypes";

export default function heroes(state = [], action) {
  switch (action.type) {
    case types.SAVE_HERO:
      const heroIndex = state.map(x => x.id).indexOf(action.id);
      //do logic to save hero, and return new state
      return [
        ...state.slice(0, heroIndex),
        { ...state[heroIndex], name: action.name },
        ...state.slice(heroIndex + 1, state.length)
      ];
    case types.ADD_HERO:
      return [...state, { ...action.hero }];
    default:
      return state;
  }
}
