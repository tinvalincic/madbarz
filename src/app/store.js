import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import feed from "./reducers/feedReducer";
import routing from "./reducers/routingReducer";
import workout from "./reducers/workoutReducer";

const logger = createLogger();

export default createStore(combineReducers({
    feed: feed,
    routing: routing,
    workout: workout
}), {}, applyMiddleware(logger, thunk));