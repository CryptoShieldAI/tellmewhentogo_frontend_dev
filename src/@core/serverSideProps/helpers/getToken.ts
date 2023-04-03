import { getCookie } from "../../utils/cookie";
import { Store } from "redux";

export default function getToken(
  ctx: any,
  store: Store
): string | null {
  return ctx?.req
    ? getCookie("token", ctx.req)
    : store.getState().authentication.token;
}
