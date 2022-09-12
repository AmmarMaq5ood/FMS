import React from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={2}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-fms.png")} />
        <Text style={styles.logoText}>Fleet Management System.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Log In"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
  },
  logo: {
    height: 150,
    width: 150,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
  logoText: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: "600",
    color: colors.light,
  },
});

export default WelcomeScreen;
