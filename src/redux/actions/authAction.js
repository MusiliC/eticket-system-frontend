/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const getUsers = createAsyncThunk("user/list", async () => {
  try {
    const res = await API.get("user/list");

    return {
      users: res?.data,
      success: true,
    };
  } catch (error) {
    return error.message;
  }
});

export const registerUserAction = createAsyncThunk(
  "user/register",
  async (user) => {
    try {
      const res = await API.post("user/register", user);
      console.log(res.data);
      return {
        user: res?.data,
        success: true,
      };
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }
);
