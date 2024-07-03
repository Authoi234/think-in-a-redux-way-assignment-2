import { combineReducers } from "redux";
import bookingReducer from "./book/bookingReducer";

const rootReducer = combineReducers({
    bookings: bookingReducer,
});

export default rootReducer;