import React from "react";
import { View } from "react-native";

interface SpacerProps {
  h?: number;
  w?: number;
}

const Spacer: React.FC<SpacerProps> = ({ h = 0, w = 0 }) => {
  return <View style={{ height: h, width: w }} />;
};

export default Spacer;
