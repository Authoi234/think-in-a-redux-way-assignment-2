import { BOOK, DELETE } from "./actionTypes";

export const addBooking = (data) => {
    return {
        type: BOOK,
        payload: data
    };
};

export const deleteBooking = (data) => {
    return {
        type: DELETE,
        payload: data
    };
};