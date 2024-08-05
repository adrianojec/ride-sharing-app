import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rides } from "../../data/mockData";
import { Ride } from "./types";
import { RideStatus } from "../../constants/enums";

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
    setSelectedRide: (state, action: PayloadAction<Ride>) => {
      state.selectedRide = action.payload;
    },
    clearSelectedRide: (state) => {
      if (state.selectedRide?.status !== RideStatus.PENDING) return;
      state.selectedRide = null;
    },
    declineRideRequest: (state) => {
      if (state.selectedRide === null) return;

      const selectedRide = {
        ...state.selectedRide,
        status: RideStatus.DECLINED,
      };

      state.selectedRide = selectedRide;

      const selectedRideIndex = state.rides.findIndex(
        (ride) => ride.id === selectedRide.id
      );

      if (selectedRideIndex === -1) return;

      state.rides[selectedRideIndex] = selectedRide;
    },
    undoDeclinedRideRequest: (state, action: PayloadAction<String>) => {
      const rides = [...state.rides];

      const selectedRideIndex = state.rides.findIndex(
        (ride) => ride.id === action.payload
      );

      if (selectedRideIndex === -1) return;

      const recentlyDeclinedRide = {
        ...rides[selectedRideIndex],
        status: RideStatus.PENDING,
      };

      rides[selectedRideIndex] = recentlyDeclinedRide;

      state.rides = rides;
    },
    acceptRideRequest: (state) => {
      if (state.selectedRide === null) return;

      const selectedRide = {
        ...state.selectedRide,
        status: RideStatus.ACCEPTED,
      };

      state.selectedRide = selectedRide;

      const selectedRideIndex = state.rides.findIndex(
        (ride) => ride.id === selectedRide.id
      );

      if (selectedRideIndex === -1) return;

      state.rides[selectedRideIndex] = selectedRide;
    },
  },
});

export const {
  setSelectedRide,
  clearSelectedRide,
  declineRideRequest,
  undoDeclinedRideRequest,
  acceptRideRequest,
} = rideSlice.actions;

export default rideSlice.reducer;
