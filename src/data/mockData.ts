import { Region } from "react-native-maps";
import { RideStatus } from "../constants/enums";
import { Ride } from "../store/ride/types";

export const initialMapRegion: Region = {
  latitude: 37.78760047087826,
  latitudeDelta: 0.042471434912783934,
  longitude: -122.40626893937588,
  longitudeDelta: 0.02478964626787672,
};

export const currentDriver = {
  driverId: "driver001",
  name: "John Doe",
  email: "w5gZ3@example.com",
  image: require("../assets/images/user.png"),
};

export const currentUser = {
  userId: "user001",
  name: "Jane Doe",
  email: "w5gZ3@example.com",
  image: require("../assets/images/user.png"),
};

export const rides: Ride[] = [
  {
    id: "ride1",
    userId: "user001",
    driverId: null,
    pickupLocation: {
      address: "555 California St, San Francisco",
      latitude: 37.7898,
      longitude: -122.4055,
    },
    destination: {
      address: "650 California St, San Francisco",
      latitude: 37.7911,
      longitude: -122.4032,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T10:00:00Z",
    timestamp: "2024-08-04T09:30:00Z",
  },
  {
    id: "ride2",
    userId: "user002",
    driverId: null,
    pickupLocation: {
      address: "601 Montgomery St, San Francisco",
      latitude: 37.7869,
      longitude: -122.407,
    },
    destination: {
      address: "1 Embarcadero Center, San Francisco",
      latitude: 37.7882,
      longitude: -122.4041,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T11:00:00Z",
    timestamp: "2024-08-04T10:00:00Z",
  },
  {
    id: "ride3",
    userId: "user003",
    driverId: null,
    pickupLocation: {
      address: "500 Pine St, San Francisco",
      latitude: 37.7852,
      longitude: -122.4062,
    },
    destination: {
      address: "345 California St, San Francisco",
      latitude: 37.7873,
      longitude: -122.4005,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T12:00:00Z",
    timestamp: "2024-08-04T11:00:00Z",
  },
  {
    id: "ride4",
    userId: "user004",
    driverId: null,
    pickupLocation: {
      address: "44 Montgomery St, San Francisco",
      latitude: 37.7845,
      longitude: -122.409,
    },
    destination: {
      address: "101 California St, San Francisco",
      latitude: 37.789,
      longitude: -122.4033,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T13:00:00Z",
    timestamp: "2024-08-04T12:00:00Z",
  },
  {
    id: "ride5",
    userId: "user005",
    driverId: null,
    pickupLocation: {
      address: "1 Post St, San Francisco",
      latitude: 37.7832,
      longitude: -122.4102,
    },
    destination: {
      address: "100 Pine St, San Francisco",
      latitude: 37.7851,
      longitude: -122.402,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T14:00:00Z",
    timestamp: "2024-08-04T13:00:00Z",
  },
  {
    id: "ride6",
    userId: "user006",
    driverId: null,
    pickupLocation: {
      address: "400 Montgomery St, San Francisco",
      latitude: 37.7883,
      longitude: -122.4052,
    },
    destination: {
      address: "275 Battery St, San Francisco",
      latitude: 37.7871,
      longitude: -122.4003,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T15:00:00Z",
    timestamp: "2024-08-04T14:00:00Z",
  },
  {
    id: "ride7",
    userId: "user007",
    driverId: null,
    pickupLocation: {
      address: "350 Sansome St, San Francisco",
      latitude: 37.7848,
      longitude: -122.403,
    },
    destination: {
      address: "101 Montgomery St, San Francisco",
      latitude: 37.7893,
      longitude: -122.405,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T16:00:00Z",
    timestamp: "2024-08-04T15:00:00Z",
  },
  {
    id: "ride8",
    userId: "user008",
    driverId: null,
    pickupLocation: {
      address: "275 Bush St, San Francisco",
      latitude: 37.7825,
      longitude: -122.4055,
    },
    destination: {
      address: "235 Montgomery St, San Francisco",
      latitude: 37.787,
      longitude: -122.4025,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T17:00:00Z",
    timestamp: "2024-08-04T16:00:00Z",
  },
  {
    id: "ride9",
    userId: "user009",
    driverId: null,
    pickupLocation: {
      address: "1 Bush St, San Francisco",
      latitude: 37.7891,
      longitude: -122.408,
    },
    destination: {
      address: "100 First St, San Francisco",
      latitude: 37.7833,
      longitude: -122.406,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T18:00:00Z",
    timestamp: "2024-08-04T17:00:00Z",
  },
  {
    id: "ride10",
    userId: "user010",
    driverId: null,
    pickupLocation: {
      address: "555 Market St, San Francisco",
      latitude: 37.7867,
      longitude: -122.4048,
    },
    destination: {
      address: "101 Second St, San Francisco",
      latitude: 37.79,
      longitude: -122.4075,
    },
    status: RideStatus.PENDING,
    pickupTime: "2024-08-05T19:00:00Z",
    timestamp: "2024-08-04T18:00:00Z",
  },
];
