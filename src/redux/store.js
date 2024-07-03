import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import ConditionCheckerMyLogger from './middleware/ConditionCheckerMyLogger';

const store = createStore(
    rootReducer,
    applyMiddleware(ConditionCheckerMyLogger)
);

export default store;