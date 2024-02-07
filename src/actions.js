import * as actions from "./actionTypes";

export function addBug(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: description
    }
  };
}