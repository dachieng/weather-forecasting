import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { citiesReducer } from "@/redux/cities/reducer";

const logger = createLogger();

const middlewares = [logger, thunk];

const rootReducer = combineReducers({
  cities: citiesReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
