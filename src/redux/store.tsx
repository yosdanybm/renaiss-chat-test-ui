/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});

type AppState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppState = <T extends (state: AppState) => any>(selector: T): ReturnType<T> => useSelector(selector);

export default store;
