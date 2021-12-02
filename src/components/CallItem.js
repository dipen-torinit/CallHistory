import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export function CallItem({ item, navigation, archiveCall }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ActivityFeedDetail", { id: item.id });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{item.from}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("deleted");
            archiveCall(item.id);
          }}
        >
          <AntDesign name="delete" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FF0000",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  deleteicon: {
    backgroundColor: "#FF00FF",
    width: 50,
    height: 50,
  },
});
