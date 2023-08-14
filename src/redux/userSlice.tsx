import { createSlice } from "@reduxjs/toolkit";
import { UserState } from '../interfaces/openAI/openAI';

const initialState: UserState = {
  username: 'User',
  hiddenSidebar: false,
  showSettingDrawer: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload;
    },
    changeSidebar: (state, action) => {
      state.hiddenSidebar = action.payload;
    },
    changeSettingDrawer: (state, action) => {
      state.showSettingDrawer = action.payload;
    },
  },
});

export const { addUser, changeSidebar, changeSettingDrawer } = userSlice.actions;
export default userSlice.reducer;
