import { LatLng } from "react-native-maps";
import { Address } from "../store/ride/types";

export const coordinateFromAddress = (
  address: Address | null | undefined
): LatLng => ({
  latitude: address?.latitude ?? 0,
  longitude: address?.longitude ?? 0,
});
