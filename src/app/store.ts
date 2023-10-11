import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import eventReducer from "../features/events/eventSlice";
import actionReducer from "../features/actions/actionSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
    actions: actionReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
