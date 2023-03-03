import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../authentication/auth.reducer";
import { filterReducer } from "../filter/filter.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
