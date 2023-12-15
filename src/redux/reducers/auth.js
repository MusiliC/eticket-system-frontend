/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/authAction";

const initialState = {
  users: [],
  user: null,
  loading: false,
  signInLoading: false,
  signUpLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {      
      state.loading = false;
      state.users = action.payload?.users;
    })
    .addCase(getUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
