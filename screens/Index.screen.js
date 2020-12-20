import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useStateValue } from "../context/BlogContext";
import { DELETE_BLOGPOST } from "../contextReducer/action";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { getAllPosts, deletePosts } from "../contextReducer/action";

export default function IndexScreen({ navigation }) {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    getAllPosts(dispatch);
    navigation.addListener("focus", () => {
      getAllPosts(dispatch);
    });
  }, []);

  return (
    <View style={styles.container}>
      {state.blogPosts.length > 0 ? (
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
                    onPress={() => deletePosts(dispatch, item.id)}
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
      ) : (
        <Text>Add Some post please!!</Text>
      )}
    </View>
  );
}

export const IndexScreenOptions = ({ navigation }) => {
  return {
    headerTitle: "All Blogs",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Edit Blog"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate("newPost")}
          />
        </HeaderButtons>
      );
    },
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
