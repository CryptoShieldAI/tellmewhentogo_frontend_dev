import { combineReducers } from "redux";
import authenticationReducer from "./authentication.reducer";
import loaderReducer from "./loader.reducer";
import alertReducer from "./alert.reducer";
import tradeReducer from "./trade.reducer";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  loader: loaderReducer,
  alert: alertReducer,
  trade: tradeReducer
});

export default rootReducer;
