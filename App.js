import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ActivityFeedList } from "./src/screens/ActivityFeedList";
import { ActivityFeedDetail } from "./src/screens/ActivityFeedDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <FeedStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ActivityFeedList" component={ActivityFeedList} />
      <Stack.Screen name="ActivityFeedDetail" component={ActivityFeedDetail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
