import alertActions from "./alert.actions";
import authenticationActions from "./authentication.actions";
import loaderActions from "./loader.actions";
import tradeActions from "./trade.actions";
import userActions from "./user.actions";

const actions = {
  ...alertActions,
  ...authenticationActions,
  ...loaderActions,
  ...tradeActions,
  ...userActions
};

export default actions;
