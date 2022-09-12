import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";
// import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "Inspections",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Bookings",
  },
  {
    title: "Notifications",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Notifications",
  },
];

function AccountScreen({ navigation }) {
  //   const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/user.png")}
          title={"Ammar"}
          subTitle={"user.email"}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title={"Log Out"}
          IconComponent={<Icon name="logout" backgroundColor="#cc1133" />}
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
