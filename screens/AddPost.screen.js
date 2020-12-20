import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useStateValue } from "../context/BlogContext";
import {
  ADD_LOGPOST,
  UPDATE_BLOGPOST,
  addPosts,
} from "../contextReducer/action";

export default function AddPostScreen({ navigation, route }) {
  const blogId = route.params ? route.params.id : null;
  const [state, dispatch] = useStateValue();
  let getCurrentBlog;
  if (blogId) {
    getCurrentBlog = state.blogPosts.find((post) => post.id === blogId);
  }

  const [title, setTitle] = useState(blogId ? getCurrentBlog.name : "");
  const [content, setContent] = useState(blogId ? getCurrentBlog.content : "");

  const addPostHandler = () => {
    const payload = {
      name: title,
      content,
      id: blogId ? blogId : Math.random(),
    };
    addPosts(dispatch, payload, blogId ? UPDATE_BLOGPOST : ADD_LOGPOST);
    navigation.navigate("allBlog");
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Conntent</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title={blogId ? "Update Post" : "Add New Blog"}
          onPress={addPostHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
  btn: {
    marginVertical: 30,
  },
});
