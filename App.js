import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ActivityFeedList } from "./src/screens/ActivityFeedList";
import { ActivityFeedDetail } from "./src/screens/ActivityFeedDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={FeedStack}
              options={{ headerShown: false }}
              initialParams={{ showArchived: false, header: "Call History" }}
            />
            <Tab.Screen
              name="Archive"
              component={FeedStack}
              options={{ headerShown: false }}
              initialParams={{
                showArchived: true,
                header: "Archived Call History",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

function FeedStack({ route, navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityFeedList"
        component={ActivityFeedList}
        options={{ title: route.params.header }}
        initialParams={{ showArchived: route.params.showArchived }}
      />
      <Stack.Screen
        name="ActivityFeedDetail"
        component={ActivityFeedDetail}
        options={{ title: "Call Detail" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
