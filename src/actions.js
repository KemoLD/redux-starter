import * as actions from "./actionTypes";

export function addBug(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: description
    }
  };
}

export function removeBug(bugId) {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id: bugId,
        },
    };
}

export function resolveBug(bugId) {
    return {
        type: actions.RESOLVE_BUG,
        payload: {
            id: bugId,
        },
    };
}