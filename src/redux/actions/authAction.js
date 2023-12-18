/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";
import { jwtDecode } from "jwt-decode";

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

export const loginUserAction = createAsyncThunk("auth/login", async (user) => {
  try {
    const res = await API.post("auth/login", user);

    localStorage.setItem("token", res?.data);
    const decoded = jwtDecode(res?.data);

    return {
      token: res.data,
      user: decoded.username,
      userId: decoded.userId,
      success: true,
    };
  } catch (error) {
    console.error("Error signing up:", error);
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
