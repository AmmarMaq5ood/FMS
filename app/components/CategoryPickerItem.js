import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import Icon from "../components/Icon";

function CategoryPickerItem({ label, onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Icon name={item.icon} size={70} backgroundColor={item.backgroundColor} />
      <AppText style={styles.label}>
        {label.length >= 7 ? `${label.slice(0, 4) + "..."}` : label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
