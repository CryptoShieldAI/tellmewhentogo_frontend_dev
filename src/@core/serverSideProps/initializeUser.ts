import actions from "../store/actions";
import getToken from "./helpers/getToken";
import axios from "axios";
import { AnyAction, Store } from "redux";
import { RootState } from "../store/types/global.types";



// if the page is being loaded in the server, get auth token from the cookie, and update redux state:
export default async function configUser(
  ctx: any,
  store: Store<RootState, AnyAction>
): Promise<any> {
  
  const token = getToken(ctx, store);
  if (token) {
    try {
      const { data } = await axios.get(`${process.env.API_URL}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (data.user) {
        store.dispatch(actions.reauthenticate(token, data.user));
      }
    } catch (e) {
      console.log(e);
    }
  }
}
