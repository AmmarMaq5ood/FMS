import React from "react";
import tw from "twrnc";

import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import NavOptions from "../components/HomeNavOptions";

function HomeScreen({ naviagtion }) {
  return (
    <Screen style={styles.container}>
      <View style={tw`p-5`}>
        <AppText style={styles.header}>FMS</AppText>
        <NavOptions naviagtion={naviagtion} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    fontSize: 35,
  },
});

export default HomeScreen;
