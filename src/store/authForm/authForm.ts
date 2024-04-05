import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthFormState {
  forms: any[];
  activeFormId: number;
}

const initialState: AuthFormState = {
  forms: [
    {
      id: 0,
      name: "Sign In",
    },
    {
      id: 1,
      name: "Sign Up",
    },
  ],
  activeFormId: 0,
};

export const authForm = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    setActiveAuthForm: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        activeFormId: action.payload,
      };
    },
  },
});

export const { setActiveAuthForm } = authForm.actions;

export default authForm.reducer;
