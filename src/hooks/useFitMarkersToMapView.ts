import { useEffect, useRef } from "react";
import MapView, { FitToOptions, LatLng } from "react-native-maps";

const mapPadding = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

type FitMarkersToMapView = {
  mapRef: React.RefObject<MapView>;
};

export const useFitMarkersToMapView = (
  coordinates: LatLng[]
): FitMarkersToMapView => {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (coordinates.length === 0) return;

    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: mapPadding,
      animated: true,
    });
  }, [coordinates]);

  return { mapRef };
};
