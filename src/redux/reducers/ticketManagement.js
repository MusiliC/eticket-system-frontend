/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  addTicketManagementAction,
  deleteTicketEventAction,
  getOneTicketManagementAction,
  getTicketManagementAction,
  updateTicketManagementAction,
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
      .addCase(updateTicketManagementAction.pending, (state) => {
        state.updatingEvent = true;
      })
      .addCase(updateTicketManagementAction.fulfilled, (state, action) => {
        state.updatingEvent = false;

        state.event = action.payload?.ticketEvent
          ? state.action.payload
          : state.event;
      })
      .addCase(updateTicketManagementAction.rejected, (state) => {
        state.updatingEvent = false;
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

    builder
      .addCase(deleteTicketEventAction.pending, (state) => {
        state.deletingEvent = true;
      })
      .addCase(deleteTicketEventAction.fulfilled, (state, action) => {
        state.ticketEvents = state.ticketEvents.filter(
          (event) => event?.id !== action.payload?._id
        );
        state.deletingEvent = false;
      })
      .addCase(deleteTicketEventAction.rejected, (state) => {
        state.deletingEvent = false;
      });
  },
});

//export const {} = ticketManagementSlice.actions;

export default ticketManagementSlice.reducer;
