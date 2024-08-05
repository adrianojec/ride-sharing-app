import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Spacer from "../../../components/Spacer";
import { currentUser } from "../../../data/mockData";
import IconButton from "../../../components/Buttons/IconButton";

const UserSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={currentUser.image} style={styles.userImage} />
        <Spacer w={8} />
        <View>
          <Text>{currentUser.name}</Text>
          <Text>{currentUser.email}</Text>
        </View>
      </View>
      <IconButton icon="phone" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
});

export default UserSection;
