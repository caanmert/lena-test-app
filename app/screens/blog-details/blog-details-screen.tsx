import { useWindowDimensions, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stack-navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HTMLRender from "react-native-render-html";

type BlogDetailsScreenNavigationProp = NativeStackNavigationProp<StackParamList, "BlogDetails">;

type Props = NativeStackScreenProps<StackParamList, "BlogDetails">;
const BlogDetailsScreen = ({ route }: Props) => {
  const { content } = route.params;

  const { width } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <HTMLRender contentWidth={width} source={{ html: content }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default BlogDetailsScreen;
