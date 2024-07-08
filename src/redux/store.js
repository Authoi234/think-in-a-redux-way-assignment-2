import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import ConditionCheckerMyLogger from './middleware/MyLogger';

const store = createStore(
    rootReducer,
    applyMiddleware(ConditionCheckerMyLogger)
);

export default store;