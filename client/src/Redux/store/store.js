import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "../filter/filter.reducer";

const rootReducer = combineReducers({
  auth: filterReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
