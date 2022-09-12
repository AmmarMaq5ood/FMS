import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NotificationsScreen from "../screens/NotificationsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingButton from "./ListingButton";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: "none", fontSize: 11 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={FeedNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="eye" size={size} color={color} />
          ),
        }}
        name="Bookings"
        component={MapScreen}
      />
      {/* <Tab.Screen
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <ListingButton onPress={() => navigation.navigate("ListingEdit")} />
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={50}
              color={color}
            />
          ),
        })}
        name="ListingEdit"
        component={ListingEditScreen}
      /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
        name="Notifications"
        component={NotificationsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="Account"
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
