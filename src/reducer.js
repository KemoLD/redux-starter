import * as actions from './actionTypes';

let lastId = 0;
export default function reducer(state = [], action) {
    if (action.type === actions.ADD_BUG) {
        return [
            ...state, 
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
            
    }else if(action.type === actions.RESOLVE_BUG){
        return state.filter(bug => bug.id !== action.payload.id)
    }

    return state;

}