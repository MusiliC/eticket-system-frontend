/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addTicketManagementAction = createAsyncThunk(
  "ticketmanagement/add",
  async (event) => {
    try {
      const res = await API.post("ticketmanagement/add", event);
      return {
        ticketEvent: res?.data,
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
        ticketEvents: res?.data,
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
        ticketEvent: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const updateTicketManagementAction = createAsyncThunk(
  "ticketmanagement/update/id",
  async (id, event) => {
    try {
      const res = await API.put(`ticketmanagement/update/${id}`, event);
      return {
        ticketEvent: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);


export const deleteTicketEventAction = createAsyncThunk(
  "ticketmanagement/delete/id",
  async (id) => {
    try {
      const res = await API.delete(`ticketmanagement/delete/${id}`);
      return {
        _id: res?.data,
        success: true,
        message: "Event deleted!"
      };
    } catch (error) {
      return error.messag;
    }
  }
);
