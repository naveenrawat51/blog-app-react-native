import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useStateValue } from "../context/BlogContext";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export default function BlogDetails({ route }) {
  const blogId = route.params.id;

  const [state] = useStateValue();
  const getBlogPost = state.blogPosts.find((post) => post.id === blogId);

  return (
    <View>
      <Text>{getBlogPost.name}</Text>
      <Text>{getBlogPost.content}</Text>
    </View>
  );
}

export const BlogDetailsOptions = ({ route, navigation }) => {
  const blogName = route.params.name;
  const blogId = route.params.id;
  return {
    headerTitle: blogName,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add"
            iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
            onPress={() => navigation.navigate("newPost", { id: blogId })}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});
