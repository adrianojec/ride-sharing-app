import React, { useMemo } from "react";
import {
  View,
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  color?: string;
  text: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  color = "white",
  text,
  onPress,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
  },
  buttonText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "white",
  },
});

export default Button;
