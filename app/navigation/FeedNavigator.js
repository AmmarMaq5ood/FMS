import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={HomeScreen}
    />
    {/* <Stack.Screen name="Bookings" component={MapScreen} /> */}
  </Stack.Navigator>
);

export default FeedNavigator;
