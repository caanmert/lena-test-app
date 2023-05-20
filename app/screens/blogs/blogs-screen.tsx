import { FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogsContext from "../../context/blogs-context";
import { BlogCard } from "../../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stack-navigator";

type BlogsScreenNavigationProp = NativeStackNavigationProp<StackParamList, "Blogs">;

type Props = {
  navigation: BlogsScreenNavigationProp;
};

const BlogsScreen = ({ navigation }: Props) => {
  const { blogs, refreshing, handleLoadMore, handleRefresh } = useContext(BlogsContext);

  const onBlogCardPress = (content: string) => {
    navigation.navigate("BlogDetails", { content });
  };

  return (
    <FlatList
      contentContainerStyle={styles.contentStyle}
      data={blogs}
      renderItem={({ item }) => <BlogCard blog={item} onPress={() => onBlogCardPress(item.content)} />}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      onEndReachedThreshold={1}
      onEndReached={handleLoadMore}
      initialNumToRender={5}
    />
  );
};

export default BlogsScreen;

const styles = StyleSheet.create({
  contentStyle: {
    gap: 20,
  },
});
