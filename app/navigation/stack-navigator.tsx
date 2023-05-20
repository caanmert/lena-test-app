import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogDetailsScreen, BlogsScreen } from "../screens";

export type StackParamList = {
  Blogs: undefined;
  BlogDetails: {
    content: string;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blogs" component={BlogsScreen} />
      <Stack.Screen name="BlogDetails" component={BlogDetailsScreen} />
    </Stack.Navigator>
  );
};
