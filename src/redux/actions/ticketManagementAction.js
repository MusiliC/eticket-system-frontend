/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addTicketManagementAction = createAsyncThunk(
  "ticketmanagement/add",
  async (event) => {
    try {
      const res = await API.post("ticketmanagement/add", event);
      return {
        ticketEvent: res?.data?.ticketEvent,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const getTicketManagementAction = createAsyncThunk(
  "ticketmanagement/list",
  async () => {
    try {
      const res = await API.get("ticketmanagement/list");
      return {
        ticketEvents: res?.data?.ticketEvents,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const getOneTicketManagementAction = createAsyncThunk(
  "ticketmanagement/list/id",
  async (id) => {
    try {
      const res = await API.get(`ticketmanagement/list/${id}`);
      return {
        ticketEvent: res?.data?.ticketEvent,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);
