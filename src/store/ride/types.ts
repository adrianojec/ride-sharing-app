import { RideStatus } from "../../constants/enums";

export type Address = {
  address: string;
  latitude: number;
  longitude: number;
};

export type Ride = {
  id: string;
  userId: string;
  driverId: string | null;
  pickupLocation: Address;
  destination: Address;
  status: RideStatus;
  pickupTime: string;
  timestamp: string;
};
