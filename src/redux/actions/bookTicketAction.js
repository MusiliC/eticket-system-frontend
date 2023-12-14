/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addBookTicketAction = createAsyncThunk(
    "bookticket/add",
    async (ticket) => {
      try {
        const res = await API.post("bookticket/add", ticket);
        return {
          ticket: res?.data?.ticket,
          success: true,
        };
      } catch (error) {
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
          totalTickets: res?.data?.totalTickets,
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
          ticket: res?.data?.ticket,
          success: true,
        };
      } catch (error) {
        return error.message;
      }
    }
  );