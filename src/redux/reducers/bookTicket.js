/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticket:{},
    totalTickets: [],
    totalUserTickets: [],
    loading: false,
    addingTicket: false,
    updatingTicket: false,
    ticketById: null,
    deletingTicket: false
}

export const ticketSlice = createSlice({
    name:"ticket",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})




export default ticketSlice.reducer;