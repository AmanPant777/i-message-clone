import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { chatId: null, chatName: null },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});
export const { setChat } = chatSlice.actions;
export const selectChat = (state) => state.chat.chatName;
export const selectId = (state) => state.chat.chatId;
export default chatSlice.reducer;
