import store from "./store";
import * as actions from "./actionTypes";
import { addBug, resolveBug, removeBug } from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(addBug("Bug 1"));
store.dispatch(addBug("Bug 2"));
store.dispatch(resolveBug(1));
store.dispatch(removeBug(1));

unsubscribe();