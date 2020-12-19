import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useStateValue } from "../context/BlogContext";

export default function BlogDetails({ route }) {
  const blogId = route.params.id;
  const [state] = useStateValue();
  const getBlogPost = state.blogPosts.find((post) => post.id === blogId);

  return (
    <View>
      <Text>{getBlogPost.name}</Text>
    </View>
  );
}

export const BlogDetailsOptions = ({ route }) => {
  const blogName = route.params.name;
  return {
    headerTitle: blogName,
  };
};

const styles = StyleSheet.create({});
