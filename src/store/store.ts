import { configureStore } from "@reduxjs/toolkit";
import landingHeaderReducer from "./landing/header";
import landingFooterReducer from "./landing/footer";

export const store = configureStore({
  reducer: {
    landingHeader: landingHeaderReducer,
    landingFooter: landingFooterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
