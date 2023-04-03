import { getCookie } from "../../utils/cookie";
import { GetServerSidePropsContext } from "next-redux-wrapper";
import { Store } from "redux";

export default function getToken(
  ctx: GetServerSidePropsContext & {
    store: Store;
  }
): string | null {
  return ctx.req
    ? getCookie("token", ctx.req)
    : ctx.getState().authentication.token;
}
