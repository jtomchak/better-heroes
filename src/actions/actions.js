import * as types from "../ActionTypes";

export const saveHero = (id, name) => ({
  type: types.SAVE_HERO,
  id,
  name
});
