import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rides } from "../../data/mockData";
import { Ride } from "./types";

interface RideState {
  rides: Ride[];
}

export const initialState: RideState = {
  rides,
};

export const rideSlice = createSlice({
  name: "rideRequest",
  initialState,
  reducers: {},
});

export default rideSlice.reducer;
