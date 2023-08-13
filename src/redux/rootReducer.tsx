import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import chatReducer from './chatSlice';

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

export default rootReducer;
