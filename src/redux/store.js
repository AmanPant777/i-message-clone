import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import chatReducer from "./Slice/chatSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
export default store;
