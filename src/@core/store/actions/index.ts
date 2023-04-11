import alertActions from "./alert.actions";
import authenticationActions from "./authentication.actions";
import loaderActions from "./loader.actions";
import tradeActions from "./trade.actions";

const actions = {
  ...alertActions,
  ...authenticationActions,
  ...loaderActions,
  ...tradeActions
};

export default actions;
