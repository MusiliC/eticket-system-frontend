/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketEvents: [],
    loading: false,
    addingEvent: false,
    updatingEvent: false,
    eventById: null,
    deletingEvent: false
}

export const ticketManagementSlice = createSlice({
    name:"ticketManagement",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})


//export const {} = ticketManagementSlice.actions;

export default ticketManagementSlice.reducer;