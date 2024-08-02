import { configureStore } from "@reduxjs/toolkit";
import landingFooterReducer from "./landing/footer";
import analyseContractReducer from "./landing/analyseContract";
import authFormReducer from "./authForm/authForm";

export const store = configureStore({
  reducer: {
    landingFooter: landingFooterReducer,
    landingAnalyseContract: analyseContractReducer,
    authForm: authFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
