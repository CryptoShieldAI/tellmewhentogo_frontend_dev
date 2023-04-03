import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, Middleware } from "redux";
import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";


const isOnProduction = process.env.NODE_ENV === "production";



const bindMiddleware = (middleware: Array<Middleware>) => {
  if (!isOnProduction) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const makeStore = () =>
  createStore(rootReducer, bindMiddleware([thunk]));

export const wrapper = createWrapper(makeStore, {
  debug: !isOnProduction,
});
