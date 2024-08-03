import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconButtonProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
      <MaterialCommunityIcons name={icon} size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 24,
    // IOS
    shadowColor: "rgba(0,0,0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    // Android
    elevation: 2,
  },
});

export default IconButton;
