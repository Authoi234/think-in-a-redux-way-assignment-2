import { BOOK, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    const maxId = state.reduce((prev, current) => {
        if (current.id > prev) {
            return current.id
        }
        else {
            return prev;
        }
    }, 0);

    if (action.type === BOOK) {
        return [...state, { ...action.payload, id: maxId + 1}];
    }
    else if (action.type === DELETE) {
        const filtered = state.filter(item => item.id !== action.payload);
        return filtered;
    }
    else {
        return state;
    }
};

export default bookingReducer;