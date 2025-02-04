import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../../api/adminApi";

export const fetchCurrentSessionInfo = createAsyncThunk(
    "user/fetchUser",
    async (_, { rejectWithValue }) => {
      try {
        const response = await adminApi.get("/current-session");
        return response.data;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to Fetch Session Info"
        );
      }
    }
  );