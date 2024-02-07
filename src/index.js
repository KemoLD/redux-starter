import store from "./store";
import * as actions from "./actionTypes";
import { addBug } from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(addBug("Bug 1"));
store.dispatch(addBug("Bug 2"));

store.dispatch({
    type: actions.RESOLVE_BUG,
    payload: {
        id: 1,
    },
});

unsubscribe();