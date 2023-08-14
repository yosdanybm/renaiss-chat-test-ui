import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from '../interfaces/openAI/openAI';

const initialState: ChatState  = {
  history: [],
  conversation: [],
  model: 'gpt-3.5-turbo',
  temperature: 0
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
    },
    updateModel: (state, action) => {
      state.model = action.payload;
    },
    updateTemperature: (state, action) => {
      state.temperature = action.payload;
    }
  },
});

export const { updateHistory, updateConversation, updateModel, updateTemperature } = chatSlice.actions;
export default chatSlice.reducer;
