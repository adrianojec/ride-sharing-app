import { LatLng } from "react-native-maps";
import { RideStatus } from "../../constants/enums";

export type Ride = {
  id: string;
  userId: string;
  driverId: string | null;
  pickupLocation: LatLng;
  destination: LatLng;
  status: RideStatus;
  pickupTime: Date;
  timestamp: Date;
};
