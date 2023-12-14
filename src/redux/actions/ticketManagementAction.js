/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError, API } from "../api/utilis";

export const addTicketManagementAction = createAsyncThunk("ticketmanagement/add")