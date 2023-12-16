/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addBookTicketAction = createAsyncThunk(
  "bookticket/add",
  async (ticket) => {
    try {
      const res = await API.post("bookticket/add", ticket);
      console.log(res.data);
      return {
        ticket: res?.data,
        success: true,
      };
    } catch (error) {
      console.error("Error adding book ticket:", error);

      // If the error is a response error, log the response data
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      return error.message;
    }
  }
);

export const getBookTicketAction = createAsyncThunk(
  "bookticket/list",
  async () => {
    try {
      const res = await API.get("bookticket/list");
      return {
        totalTickets: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const getOneTicketAction = createAsyncThunk(
  "bookticket/list/id",
  async (ticketId) => {
    try {
      const res = await API.get(`bookticket/list/${ticketId}`);
      return {
        ticket: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const getUserTickets = createAsyncThunk(
  "bookticket/list/userId",
  async (userId) => {
    try {
      const res = await API.get(`bookticket/list/${userId}`);
      return {
        totalTickets: res?.data,
        success: true,
      };
    } catch (error) {
      return error.message;
    }
  }
);
