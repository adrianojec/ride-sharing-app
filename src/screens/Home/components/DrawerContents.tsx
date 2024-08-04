import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { currentDriver } from "../../../data/mockData";
import Spacer from "../../../components/Spacer";
import HorizontalDivider from "../../../components/Divider/HorizontalDivider";

const DrawerContents: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={currentDriver.image} style={styles.userImage} />
          <Spacer h={24} />
          <Text style={styles.userName}>{currentDriver.name}</Text>
          <Spacer h={8} />
          <HorizontalDivider thickness={1} color="lightgrey" />
          <Spacer h={40} />
          <Text style={styles.history}>History</Text>
        </View>
        <Text style={styles.logout}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  userImage: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    fontWeight: 600,
  },
  history: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  logout: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "grey",
  },
});

export default DrawerContents;
