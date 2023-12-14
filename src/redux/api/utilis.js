/* eslint-disable no-unused-vars */
import axios from "axios";
import { API_BASE_URL } from "../../components/constants";

export const API = axios.create({
  baseURL: API_BASE_URL,
});

export const handleApiError = (error) => {
  let errorMessage = "An unexpected error occurred.";
  if (error.response?.data?.message)
    errorMessage = error.response?.data?.message;

  return errorMessage;
};
