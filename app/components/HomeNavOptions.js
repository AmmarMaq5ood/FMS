import React from "react";
import { Icon } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const data = [
  {
    id: 123,
    title: "Book a Fleet",
    image: "https://links.papareact.com/3pn",
    screen: "Bookings",
  },
  {
    id: 124,
    title: "See Details",
    image: "https://img.icons8.com/ios-filled/120/FFFFFF/details-popup.png",
    screen: "Bookings",
  },
];

const NavOptions = () => {
  const naviagtion = useNavigation();
  return (
    <View style={{}}>
      <FlatList
        style={{ paddingTop: 25 }}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => naviagtion.navigate(item.screen)}
            style={styles.container}
          >
            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={{ uri: item.image }} />
              <Text style={styles.listText}>{item.title}</Text>
              <Icon
                style={styles.listIcon}
                type="antdesign"
                color="white"
                name="arrowright"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    borderRadius: 10,
    padding: 21.5,
    margin: 2.5,
    backgroundColor: "#d1d1d1",
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  listText: {
    color: colors.dark,
    margin: 5,
    fontSize: 19,
    fontWeight: "600",
  },
  listImage: {
    height: 120,
    width: 120,
    resizeMode: "contain",
  },
  listIcon: {
    padding: 2,
    backgroundColor: colors.dark,
    borderRadius: 50,
    width: 50,
    height: 50,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavOptions;

// tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`
// tw`m-2 text-lg font-semibold`
// tw`p-2 bg-black rounded-full w-10 mt-4`
