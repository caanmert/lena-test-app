import Navigation from "./app/navigation/navigation";
import { BlogsContextProvider } from "./app/context/blogs-context";

export default function App() {
  return (
    <BlogsContextProvider>
      <Navigation />
    </BlogsContextProvider>
  );
}
