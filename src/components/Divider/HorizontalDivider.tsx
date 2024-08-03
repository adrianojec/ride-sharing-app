import React from "react";
import { View } from "react-native";

interface HorizontalDividerProps {
  thickness?: number;
  color?: string;
}
const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  thickness = 0,
  color,
}) => {
  return (
    <View
      style={{ width: "100%", height: thickness, backgroundColor: color }}
    />
  );
};

export default HorizontalDivider;
