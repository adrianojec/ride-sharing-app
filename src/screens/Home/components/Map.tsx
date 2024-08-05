import React, { useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { StyleSheet } from "react-native";
import { initialMapRegion } from "../../../data/mockData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/RootStack";
import { useNavigation } from "@react-navigation/native";
import { Ride } from "../../../store/ride/types";
import { setSelectedRide } from "../../../store/ride/rideSlice";
import { useFitMarkersToMapView } from "../../../hooks/useFitMarkersToMapView";
import { RideStatus } from "../../../constants/enums";

const Map: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { rides } = useAppSelector((state) => state.rides);
  const dispatch = useAppDispatch();
  const { mapRef } = useFitMarkersToMapView(
    rides.map((ride) => ride.pickupLocation)
  );

  const availableRides = rides.filter(
    (ride) => ride.status !== RideStatus.DECLINED
  );

  const handleSelectRideAndGoToRideDetails = (ride: Ride) => {
    dispatch(setSelectedRide(ride));
    navigation.navigate("RideDetails");
  };

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
    >
      {availableRides.map((ride) => {
        const coordinate = {
          latitude: ride.pickupLocation.latitude,
          longitude: ride.pickupLocation.longitude,
        };

        return (
          <Marker
            key={ride.id}
            identifier={ride.id}
            coordinate={coordinate}
            onSelect={() => handleSelectRideAndGoToRideDetails(ride)}
          />
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
