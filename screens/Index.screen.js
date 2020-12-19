import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>
    </View>
  );
}

export const IndexScreenOptions = () => {
  return {
    headerTitle: "All Blogs",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
