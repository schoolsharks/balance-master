import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, fetchUser, reset } from "./userActions";

export interface User {
  name: string;
  loading: boolean;
  trustScore:number;
  timeInHand:number;
  status:"LOGGED_IN"|"IDLE";
  error: string | null;
}

const initialState: User = {
  name: "",
  loading: true,
  trustScore:0,
  timeInHand:0,
  error: null,
  status:"IDLE"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name ?? state.name;
      state.loading=action.payload.loading??state.loading;
      state.trustScore=action.payload.trustScore??state.trustScore;
      state.timeInHand=action.payload.timeInHand??state.timeInHand;
      state.status=action.payload.status??state.status
    },
    setError:(state,action)=>{
      state.error=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
          }>
        ) => {
          state.loading=false,
          state.error=null,
          state.name = action.payload.name ?? state.name;
          state.status="LOGGED_IN"
        }
      )
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status="IDLE"

      })
      .addCase(reset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        reset.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
          }>
        ) => {
          state.loading=false,
          state.error=null,
          state.name = action.payload.name ?? state.name;
          state.status="IDLE"
        }
      )
      .addCase(reset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status="IDLE"

      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
            trustScore: number;
            timeInHand: number;
          }>
        ) => {
          state.loading=false,
          state.error=null,
          state.name = action.payload.name ?? state.name;
          state.trustScore=action.payload.trustScore??state.trustScore
          state.timeInHand=action.payload.timeInHand??state.timeInHand
          state.status="LOGGED_IN"
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status="IDLE"

      })
  },
});

export const { setUser,setError } = userSlice.actions;

export default userSlice.reducer;
