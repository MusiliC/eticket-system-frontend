/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addFixtureAction = createAsyncThunk(
  "fixture/add",
  async (fixture) => {
    try {
      const res = await API.post("fixture/add", fixture);
      return {
        fixture: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const getFixtureAction = createAsyncThunk("fixture/list", async () => {
  try {
    const res = await API.get("fixture/list");

    return {
      totalFixtures: res?.data,
      success: true,
    };
  } catch (error) {
    return error.message;
  }
});

export const getOneFixtureAction = createAsyncThunk(
  "fixture/list/id",
  async (id) => {
    try {
      const res = await API.get(`fixture/list/${id}`);
      return {
        fixture: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const updateFixtureAction = createAsyncThunk(
  "fixture/update",
  async ({ id, fixture }) => {
    try {
      const res = await API.put(`fixture/update/${id}`, fixture);
      console.log(id);
      console.log(fixture);
      return {
        fixture: res?.data,
        success: true,
      };
    } catch (error) {
      console.error("Error response from server:", error.response);
      throw error;
    }
  }
);

export const deleteFixtureAction = createAsyncThunk(
  "fixture/delete/id",
  async (id) => {
    try {
      const res = await API.delete(`fixture/delete/${id}`);
      return {
        _id: res?.data,
        success: true,
        message: "Fixture deleted!",
      };
    } catch (error) {
      return error.messag;
    }
  }
);
