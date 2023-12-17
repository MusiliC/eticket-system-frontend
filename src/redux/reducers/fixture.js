/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  addFixtureAction,
  deleteFixtureAction,
  getFixtureAction,
  getOneFixtureAction,
  updateFixtureAction,
} from "../actions/fixtureAction";

const initialState = {
  fixture: {},
  totalFixtures: [],
  loading: false,
  addingFixture: false,
  updatingFixture: false,
  fixtureById: null,
  deletingFixture: false,
};

export const fixtureSlice = createSlice({
  name: "fixture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFixtureAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFixtureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.totalFixtures = action.payload?.totalFixtures;
      })
      .addCase(getFixtureAction.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getOneFixtureAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneFixtureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.fixture = action.payload?.fixture;
      })
      .addCase(getOneFixtureAction.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(deleteFixtureAction.pending, (state) => {
        state.deletingFixture = true;
      })
      .addCase(deleteFixtureAction.fulfilled, (state, action) => {
        state.totalFixtures = state.totalFixtures.filter(
          (fixture) => fixture?.id !== action.payload?._id
        );
        state.deletingFixture = false;
      })
      .addCase(deleteFixtureAction.rejected, (state) => {
        state.deletingFixture = false;
      });

    builder
      .addCase(addFixtureAction.pending, (state) => {
        state.addingFixture = true;
      })
      .addCase(addFixtureAction.fulfilled, (state, action) => {
        state.addingFixture = false;
        if (action.payload?.fixture) {
          state.totalFixtures = [
            action.payload?.fixture,
            ...state.totalFixtures,
          ];
        }
      })
      .addCase(addFixtureAction.rejected, (state) => {
        state.addingFixture = false;
      });

    builder
      .addCase(updateFixtureAction.pending, (state) => {
        state.updatingFixture = true;
      })
      .addCase(updateFixtureAction.fulfilled, (state, action) => {
        state.updatingFixture = false;

        state.fixture = action.payload?.fixture
          ? action.payload.fixture
          : state.fixture;
      })
      .addCase(updateFixtureAction.rejected, (state) => {
        state.updatingFixture = false;
      });
  },
});

export default fixtureSlice.reducer;
