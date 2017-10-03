import { combineReducers } from "redux";
import heroes from "./heroes";

const rootReducer = combineReducers({
  heroes
});

export default rootReducer;
