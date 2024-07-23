import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { customerCartReducer } from "./Cart/Reducer";
import { customerOrderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: customerCartReducer,
  order: customerOrderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
