import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  users: [],
  author: "",
  selectedPost: "",
};

const counterSlice = createSlice({
  name: "addingData",
  initialState,
  reducers: {
    SetPostsInRedux(state, action) {
      state.posts = action.payload;
    },
    SetUsersRedux(state, action) {
      state.users = action.payload;
    },
    SetAuthorRedux(state, action) {
      state.author = action.payload;
    },
    SetselectedPostRedux(state, action) {
      state.selectedPost = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
