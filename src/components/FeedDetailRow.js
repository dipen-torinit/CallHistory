import React from "react";
import { StyleSheet, Text } from "react-native";

export default function FeedDetailRow({ title, body }) {
  return (
    <Text style={styles.baseText}>
      {title}
      <Text style={styles.innerText}> {body}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    paddingTop: 10,
  },
  innerText: {
    fontFamily: "Cochin",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
