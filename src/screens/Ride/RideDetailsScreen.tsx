import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Spacer from "../../components/Spacer";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useFitMarkersToMapView } from "../../hooks/useFitMarkersToMapView";
import { setSelectedRide } from "../../store/ride/rideSlice";
import { format } from "date-fns";
import Timeline from "react-native-timeline-flatlist";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import UserSection from "./components/UserSection";
import Button from "../../components/Buttons/Button";

const RideDetailsScreen: React.FC = () => {
  const { selectedRide } = useAppSelector((state) => state.rides);
  const dispatch = useAppDispatch();

  const pickupLocation = {
    latitude: selectedRide?.pickupLocation.latitude ?? 0,
    longitude: selectedRide?.pickupLocation.longitude ?? 0,
  };

  const destination = {
    latitude: selectedRide?.destination.latitude ?? 0,
    longitude: selectedRide?.destination.longitude ?? 0,
  };

  const pickUpDate = format(
    new Date(selectedRide?.pickupTime ?? 0),
    "iii, d MMM yyyy"
  );

  const timelineData = [
    {
      title: selectedRide?.pickupLocation.address,
      description: "Pick-up",
    },
    {
      title: selectedRide?.destination.address,
      description: "Destination",
    },
  ];

  useEffect(() => {
    return () => {
      dispatch(setSelectedRide(null));
    };
  }, []);

  const { mapRef } = useFitMarkersToMapView([pickupLocation, destination]);

  return (
    <View style={styles.container}>
      <Spacer h={8} />
      <View style={styles.topBar} />
      <View style={styles.content}>
        <View>
          <Spacer h={8} />
          <Text style={styles.rideRequest}>Ride Request</Text>
          <Spacer h={24} />
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            scrollEnabled={false}
            style={styles.map}
          >
            {/* TODO: Add polylines for directions */}
            <Marker coordinate={pickupLocation} />
            <Marker coordinate={destination} />
          </MapView>
          <Spacer h={32} />
          <Text>{selectedRide && pickUpDate}</Text>
          <Spacer h={16} />
          <View style={styles.timelineContainer}>
            <Timeline data={timelineData} innerCircle="dot" showTime={false} />
          </View>
          <HorizontalDivider thickness={1} color="lightgrey" />
          <Spacer h={16} />
          <UserSection />
        </View>
        <View style={styles.footerButtonsContainer}>
          <Button text="Decline" color="red" onPress={() => {}} />
          <Spacer w={16} />
          <Button text="Accept" color="limegreen" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  timelineContainer: {
    height: 140,
  },
  topBar: {
    height: 5,
    width: "25%",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    alignSelf: "center",
  },
  rideRequest: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    textAlign: "center",
  },
  map: {
    height: 200,
    width: "100%",
    borderRadius: 16,
  },
  footerButtonsContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
});

export default RideDetailsScreen;
