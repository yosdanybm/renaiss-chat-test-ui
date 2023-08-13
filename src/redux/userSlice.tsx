import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: 'User',
  hiddenSidebar: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // const { username } = action.payload;
      state.username = action.payload;
    },
    changeSidebar: (state, action) => {
      state.hiddenSidebar = action.payload;
    },
  },
});

export const { addUser, changeSidebar } = userSlice.actions;
export default userSlice.reducer;
