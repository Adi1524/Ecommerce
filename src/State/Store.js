import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { customerCartReducer } from "./Cart/Reducer";
import { customerOrderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  customerProduct: customerProductReducer,
  customerCart: customerCartReducer,
  customerOrder: customerOrderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
