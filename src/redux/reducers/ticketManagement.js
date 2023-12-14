/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  addTicketManagementAction,
  getOneTicketManagementAction,
  getTicketManagementAction,
} from "../actions/ticketManagementAction";

const initialState = {
  ticketEvent: {},
  ticketEvents: [],
  loading: false,
  addingEvent: false,
  updatingEvent: false,
  eventById: null,
  deletingEvent: false,
};

export const ticketManagementSlice = createSlice({
  name: "ticketManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTicketManagementAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTicketManagementAction.fulfilled, (state, action) => {
        state.ticketEvents = action.payload?.ticketEvents;
        state.loading = false;
      })
      .addCase(getTicketManagementAction.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(addTicketManagementAction.pending, (state) => {
        state.addingEvent = true;      
      })
      .addCase(addTicketManagementAction.fulfilled, (state, action) => {
        state.addingEvent = false;
        if (action.payload.ticketEvent) {
          state.ticketEvents = [
            action.payload?.ticketEvent,
            ...state.ticketEvents,
          ];
        }
      })
      .addCase(addTicketManagementAction.rejected, (state) => {
        state.addingEvent = false;
      });

    builder
      .addCase(getOneTicketManagementAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTicketManagementAction.fulfilled, (state, action) => {
        state.ticketEvent = action.payload?.ticketEvent;
        state.loading = false;
      })
      .addCase(getOneTicketManagementAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

//export const {} = ticketManagementSlice.actions;

export default ticketManagementSlice.reducer;
