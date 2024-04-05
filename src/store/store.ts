import { configureStore } from "@reduxjs/toolkit";
import landingHeaderReducer from "./landing/header";
import landingFooterReducer from "./landing/footer";
import analyseContractReducer from "./landing/analyseContract";
import authFormReducer from "./authForm/authForm";

export const store = configureStore({
  reducer: {
    landingHeader: landingHeaderReducer,
    landingFooter: landingFooterReducer,
    landingAnalyseContract: analyseContractReducer,
    authForm: authFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
