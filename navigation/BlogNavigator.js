import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Colors from "../constant/Colors";
import IndexScreen, { IndexScreenOptions } from "../screens/Index.screen";

const defaultNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const IndexStackNavigator = createStackNavigator();
export const IndexNavigator = () => {
  return (
    <IndexStackNavigator.Navigator screenOptions={defaultNavOption}>
      <IndexStackNavigator.Screen
        name="allBlog"
        component={IndexScreen}
        options={IndexScreenOptions}
      />
    </IndexStackNavigator.Navigator>
  );
};
