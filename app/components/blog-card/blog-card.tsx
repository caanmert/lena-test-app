import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BlogCardProps } from "./blog-card.props";

const BlogCard = ({ blog, onPress }: BlogCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: blog.banner,
          }}
        />
      </View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text>{blog.summary}</Text>
      <Text style={styles.readingTime}>{blog.totalReadingTime} mins</Text>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 10,
  },

  bannerContainer: {
    height: 200,
    width: "100%",
    flex: 1,
  },

  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  readingTime: {
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
