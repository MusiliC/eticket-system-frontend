/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  addBookTicketAction,
  getBookTicketAction,
  getOneTicketAction,
  getUserTickets,
} from "../actions/bookTicketAction";


const initialState = {
  ticket: {},
  totalTickets: [],
  totalUserTickets: [],
  loading: false,
  addingTicket: false,
  updatingTicket: false,
  ticketById: null,
  deletingTicket: false,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookTicketAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookTicketAction.fulfilled, (state, action) => {
        state.loading = false;
        state.totalTickets = action.payload?.totalTickets;
      })
      .addCase(getBookTicketAction.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getUserTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserTickets.fulfilled, (state,action) => {
        state.loading = false;
        state.totalUserTickets = action.payload?.totalUserTickets
      })
      .addCase(getUserTickets.rejected, (state) => {
        state.loading = false;
      })

    builder
      .addCase(getOneTicketAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTicketAction.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload?.ticket;
      })
      .addCase(getOneTicketAction.rejected,(state) => {
        state.loading  = false;
      })

    builder
      .addCase(addBookTicketAction.pending, (state) => {
        state.addingTicket = true;
      })
      .addCase(addBookTicketAction.fulfilled, (state, action) => {
     
        state.addingTicket = false;
        if (action.payload?.ticket) {
          state.totalTickets = [action.payload?.ticket, ...state.totalTickets];
        }
      })
      .addCase(addBookTicketAction.rejected, (state) => {
        state.addingTicket = false;
      });
  },
});

export default ticketSlice.reducer;
