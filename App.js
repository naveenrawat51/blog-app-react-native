import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { BlogProvider } from "./context/BlogContext";
import { initialState, reducer } from "./contextReducer/reducer";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log(error)}
      />
    );
  }

  return (
    <BlogProvider initialState={initialState} reducer={reducer}>
      <AppNavigator />
    </BlogProvider>
  );
}
