/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fixture:{},
    totalFixtures: [],
    loading: false,
    addingFixture: false,
    updatingFixture: false,
    fixtureById: null,
    deletingFixture: false
}

export const fixtureSlice = createSlice({
    name:"fixture",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})




export default fixtureSlice.reducer;