import React, { useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAppSelector } from "../../../store/hooks";
import { StyleSheet } from "react-native";
import { initialMapRegion } from "../../../data/mockData";

const mapPadding = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const Map: React.FC = () => {
  const { rides } = useAppSelector((state) => state.rides);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (rides.length === 0) return;

    const ridesLatLng = rides.map((ride) => ({
      latitude: ride.pickupLocation.latitude,
      longitude: ride.pickupLocation.longitude,
    }));

    mapRef.current.fitToCoordinates(ridesLatLng, {
      edgePadding: mapPadding,
      animated: true,
    });
  }, [rides]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialMapRegion}
      showsUserLocation
      showsMyLocationButton
    >
      {rides.map((ride) => (
        <Marker
          key={ride.id}
          coordinate={{
            latitude: ride.pickupLocation.latitude,
            longitude: ride.pickupLocation.longitude,
          }}
        />
      ))}
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
