import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from '../interfaces/openAI/openAI';

const initialState: ChatState  = {
  history: [],
  conversation: []
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateHistory: (state, action) => {
      state.history = action.payload;
    },
    updateConversation: (state, action) => {
      state.conversation = action.payload;
    }
  },
});

export const { updateHistory, updateConversation } = chatSlice.actions;
export default chatSlice.reducer;
