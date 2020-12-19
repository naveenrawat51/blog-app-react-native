import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useStateValue } from "../context/BlogContext";
import { ADD_LOGPOST } from "../contextReducer/reducer";

export default function IndexScreen() {
  const [state, dispatch] = useStateValue();

  return (
    <View style={styles.container}>
      <Text>Index Screen {state.blogPosts.length}</Text>
      <Button
        title="add Post"
        onPress={() =>
          dispatch({
            type: ADD_LOGPOST,
            payload: { name: "naveen", id: Math.random() },
          })
        }
      />
      {state.blogPosts && (
        <FlatList
          data={state.blogPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      )}
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
