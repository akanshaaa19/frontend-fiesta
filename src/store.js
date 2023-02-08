import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { authState: false },
  reducers: {
    toggleAuth(state, action) {
      state.authState = action.payload;
      console.log(state.authState);
    },
  },
});

const authSLice = createSlice({
  name: "auth",
  initialState: { authStatus: false },
  reducers: {
    authStatus(state, action) {
      state.authStatus = action.payload;
    },
  },
});
const store = configureStore({ reducer: { ui: uiSlice.reducer, auth: authSLice.reducer } });

export const uiActions = uiSlice.actions;
export const authActions = authSLice.actions;

export default store;
