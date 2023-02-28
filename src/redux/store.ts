import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { newsSlice, newsStoreKey } from "./news";

export const store = configureStore({
  reducer: {
    [newsStoreKey]: newsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
