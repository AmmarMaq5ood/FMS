import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppFormm";
import AppFormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" icon="account" placeholder="Name" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardtype="email-address"
          icon={"email"}
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 10,
  },
});

export default LoginScreen;
