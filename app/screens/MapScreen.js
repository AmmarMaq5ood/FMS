import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

function MapScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>This is the mapscreen....</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MapScreen;
