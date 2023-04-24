import { combineReducers } from "redux";
import authenticationReducer from "./authentication.reducer";
import loaderReducer from "./loader.reducer";
import alertReducer from "./alert.reducer";
import tradeReducer from "./trade.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  loader: loaderReducer,
  alert: alertReducer,
  trade: tradeReducer,
  user: userReducer
});

export default rootReducer;
