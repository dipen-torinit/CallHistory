import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export function CallItem({ item, navigation, archiveCall, isArchived }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ActivityFeedDetail", {
          id: item.id,
          archivedDetail: isArchived,
        });
      }}
    >
      <View style={isArchived ? styles.archived_item : styles.item}>
        <Text style={styles.text}>{item.from}</Text>
        {!isArchived && (
          <TouchableOpacity
            onPress={() => {
              console.log("deleted");
              archiveCall(item.id);
            }}
          >
            <AntDesign name="delete" size={30} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#00FF00",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  archived_item: {
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
