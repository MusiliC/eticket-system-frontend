/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  loginUserAction,
  registerUserAction,
} from "../actions/authAction";

const initialState = {
  users: [],
  user: null,
  userId: null,
  token: "",
  loading: false,
  signInLoading: false,
  signUpLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.loading = false;
    },
  },
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
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.signUpLoading = true;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.signUpLoading = false;
        if (action.payload?.user) {
          state.users = [action.payload?.user, ...state.users];
        }
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.signUpLoading = false;
      });
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.signInLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.signInLoading = false;
        state.user = action?.payload?.user;
        state.token = action?.payload?.token;
        state.userId = action?.payload?.userId;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.signInLoading = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
