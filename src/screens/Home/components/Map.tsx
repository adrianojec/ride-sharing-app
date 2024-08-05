import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/RootStack";
import { useNavigation } from "@react-navigation/native";
import { Ride } from "../../../store/ride/types";
import { setSelectedRide } from "../../../store/ride/rideSlice";
import { useFitMarkersToMapView } from "../../../hooks/useFitMarkersToMapView";
import { RideStatus } from "../../../constants/enums";
import { LatLng } from "react-native-maps";
import { coordinateFromAddress } from "../../../utils/coordinate";

const Map: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { rides, selectedRide } = useAppSelector((state) => state.rides);
  const dispatch = useAppDispatch();

  const availableRidesCoordinates: LatLng[] = rides.map((ride) =>
    coordinateFromAddress(ride.pickupLocation)
  );
  const acceptedRideCoordinates: LatLng[] = [
    coordinateFromAddress(selectedRide?.pickupLocation),
    coordinateFromAddress(selectedRide?.destination),
  ];
  const availableRides = rides.filter(
    (ride) => ride.status !== RideStatus.DECLINED
  );
  const isSelectedRideAccepted =
    selectedRide && selectedRide.status === RideStatus.ACCEPTED;

  const { mapRef } = useFitMarkersToMapView(
    isSelectedRideAccepted ? acceptedRideCoordinates : availableRidesCoordinates
  );

  const handleSelectRideAndGoToRideDetails = (ride: Ride) => {
    dispatch(setSelectedRide(ride));
    navigation.navigate("RideDetails");
  };

  const renderAvailableRide = () =>
    availableRides.map((ride) => (
      <Marker
        key={ride.id}
        coordinate={coordinateFromAddress(ride.pickupLocation)}
        onSelect={() => handleSelectRideAndGoToRideDetails(ride)}
      />
    ));

  const renderAcceptedRides = () =>
    isSelectedRideAccepted && (
      <>
        <Marker
          coordinate={coordinateFromAddress(selectedRide?.pickupLocation)}
        />
        <Marker
          pinColor="green"
          coordinate={coordinateFromAddress(selectedRide?.destination)}
        />
      </>
    );

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
    >
      {isSelectedRideAccepted ? renderAcceptedRides() : renderAvailableRide()}
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
