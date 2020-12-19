import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useStateValue } from "../context/BlogContext";
import { ADD_LOGPOST, DELETE_BLOGPOST } from "../contextReducer/reducer";
import { Ionicons } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const [state, dispatch] = useStateValue();

  return (
    <View style={styles.container}>
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
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("blogDetail", { ...item })}
              >
                <View style={styles.blog}>
                  <Text style={styles.title}>{item.name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      dispatch({
                        type: DELETE_BLOGPOST,
                        payload: item.id,
                      })
                    }
                    style={styles.deleteButton}
                  >
                    <Ionicons
                      name={
                        Platform.OS === "android" ? "md-trash" : "ios-trash"
                      }
                      size={23}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
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
  },
  blog: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
