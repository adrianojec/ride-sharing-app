import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../../components/Buttons/IconButton";
import { Drawer } from "react-native-drawer-layout";
import DrawerContents from "./components/DrawerContents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Map from "./components/Map";
import { useAppSelector } from "../../store/hooks";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import Spacer from "../../components/Spacer";
import Button from "../../components/Buttons/Button";
import AcceptedRide from "./components/AcceptedRide";
import { RideStatus } from "../../constants/enums";

const HomeScreen: React.FC = () => {
  const { selectedRide } = useAppSelector((state) => state.rides);
  const [isOpen, setIsOpen] = useState(false);

  const { top } = useSafeAreaInsets();

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  const renderCurrentRide = () =>
    selectedRide &&
    selectedRide.status === RideStatus.ACCEPTED && <AcceptedRide />;

  return (
    <Drawer
      open={isOpen}
      onOpen={handleOpenDrawer}
      onClose={handleCloseDrawer}
      renderDrawerContent={() => <DrawerContents />}
    >
      <>
        <View style={styles.mapContainer}>
          <Map />
        </View>
        <IconButton
          icon="menu"
          onPress={handleOpenDrawer}
          style={[styles.iconButton, { top }]}
        />
        {renderCurrentRide()}
      </>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: "100%",
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  iconButton: {
    position: "absolute",
    left: 16,
  },
});

export default HomeScreen;
