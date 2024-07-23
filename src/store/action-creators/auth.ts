import { AuthAction, AuthActionTypes } from "@/types/auth";
import { Dispatch } from "redux";

export const setActiveAuthForm = (id: number) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.SET_ACTIVE_AUTH_FORM, payload: id });
  };
};
