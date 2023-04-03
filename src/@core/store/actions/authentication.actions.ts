import axios from "axios";
import Router from "next/router";
import { setCookie, removeCookie } from "../../utils/cookie";
import actions from ".";

import { AUTHENTICATE, DEAUTHENTICATE } from "../types/authentication.types";
import { FormValuesType } from "../../interfaces";
import { User } from "../../interfaces";


const registerUser = (formData: FormValuesType): any => {
  return async (dispatch: any) => {
    try {
      const data: any = await axios.post(`${process.env.API_URL}/auth/register`, formData).then(res => res.data)
      if (data.status === 'success') {
        setCookie("token", data.auth_token)
        dispatch({ type: AUTHENTICATE, payload: { token: data.auth_token, user: data.user } })
        await Router.push("/")
      } else {
        dispatch(actions.showAlert(data.message, 'error'))
      }
    } catch (e: any) {
      const { response } = e
      const textMessage = response.data.message ? response.data.message : "Error, try again";
      dispatch(actions.showAlert(textMessage, "error"));
    }
  }
}

// gets token from the api and stores it in the redux store and in a cookie
const loginUser = (
  formData: FormValuesType,
): any => {

  return async (dispatch: any) => {
    try {
      const data = await axios.post(`${process.env.API_URL}/auth/login`, formData)
        .then(res => res.data);
      if (data.status === 'success') {
        setCookie("token", data.auth_token)
        dispatch({ type: AUTHENTICATE, payload: { token: data.auth_token, user: data.user } })
        Router.push('/')
      } else {
        dispatch(actions.showAlert(data.message, 'error'))
      }
    } catch (e: any) {
      const textMessage = e.message ? e.message : "Error, try again";
      dispatch(actions.showAlert(textMessage, "error"));
    }
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token: string, user: User): any => {
  return async (dispatch: any) => {
    dispatch(actions.showLoader());
    dispatch({ type: AUTHENTICATE, payload: { token, user } });
    dispatch(actions.hideLoader());
  };
};

// removing the token
const deauthenticate = () => {
  return async (dispatch: any) => {
    removeCookie("token");
    await Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
    dispatch(actions.hideLoader());
  };
};

const updateUserData = (token: string | null, body: any) => {
  return async (dispatch: any) => {
    if (token) {
      const {
        data: { user },
      } = await axios.put("/api/user", body, {
        headers: {
          authorization: token,
        },
      });
      if (user) {
        dispatch({ type: AUTHENTICATE, payload: { user, token } });
      }
    }
  };
};


export default {
  registerUser,
  loginUser,
  reauthenticate,
  deauthenticate,
  updateUserData,
};
