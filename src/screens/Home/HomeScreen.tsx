import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../../components/Buttons/IconButton";
import { Drawer } from "react-native-drawer-layout";
import DrawerContents from "./components/DrawerContents";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { top } = useSafeAreaInsets();

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <Drawer
      open={isOpen}
      onOpen={handleOpenDrawer}
      onClose={handleCloseDrawer}
      renderDrawerContent={() => <DrawerContents />}
    >
      <View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <IconButton
          icon="menu"
          onPress={handleOpenDrawer}
          style={[styles.iconButton, { top }]}
        />
      </View>
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
