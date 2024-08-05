import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "../../../components/Spacer";
import HorizontalDivider from "../../../components/Divider/HorizontalDivider";
import Button from "../../../components/Buttons/Button";

// Data here should come from the server
const AcceptedRide: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.greyText}>Distance</Text>
          <Spacer h={8} />
          <Text style={styles.fontWeightBold}>26.7 km</Text>
        </View>
        <View>
          <Text style={styles.greyText}>Time</Text>
          <Spacer h={8} />
          <Text style={styles.fontWeightBold}>38 mins</Text>
        </View>
      </View>
      <Spacer h={16} />
      <HorizontalDivider thickness={1} color="lightgrey" />
      <Spacer h={24} />
      <Button text="Start Ride" color="limegreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: 200,
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16, // IOS
    shadowColor: "rgba(0,0,0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    // Android
    elevation: 2,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greyText: {
    color: "grey",
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
});

export default AcceptedRide;
