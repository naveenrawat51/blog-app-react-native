import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { IndexNavigator } from "./BlogNavigator";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <IndexNavigator />
    </NavigationContainer>
  );
}
