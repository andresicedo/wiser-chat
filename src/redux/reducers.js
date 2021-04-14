import { GET_MESSAGE } from "./actions"

const defaultState = {
    message: []
}

export function messageReducer(state=defaultState, action) {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                message: [...state, action.message]
            };
        default:
            return state;
    };
};