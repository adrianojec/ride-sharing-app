import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../../components/Buttons/IconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "react-native-drawer-layout";
import DrawerContents from "./components/DrawerContents";

const HomeScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <Drawer
      open={isOpen}
      onOpen={handleOpenDrawer}
      onClose={handleCloseDrawer}
      renderDrawerContent={() => <DrawerContents />}
    >
      <SafeAreaView>
        <View>
          <IconButton
            icon="menu"
            onPress={handleOpenDrawer}
            style={styles.iconButton}
          />
        </View>
      </SafeAreaView>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    position: "absolute",
    top: 0,
    left: 16,
  },
});

export default HomeScreen;
