import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rides } from "../../data/mockData";
import { Ride } from "./types";

interface RideState {
  rides: Ride[];
  selectedRide: Ride | null;
}

export const initialState: RideState = {
  rides,
  selectedRide: null,
};

export const rideSlice = createSlice({
  name: "rideRequest",
  initialState,
  reducers: {
    setSelectedRide: (state, action: PayloadAction<Ride | null>) => {
      state.selectedRide = action.payload;
    },
  },
});

export const { setSelectedRide } = rideSlice.actions;

export default rideSlice.reducer;
