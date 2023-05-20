import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Blog } from "../types/blog";
import { fetchBlogsByPage } from "../api/blogs";

type BlogsContextType = {
  blogs: Blog[];
  refreshing: boolean;
  handleRefresh: () => void;
  handleLoadMore: () => void;
};

const initialContextValue: BlogsContextType = {
  blogs: [],
  refreshing: false,
  handleRefresh: () => {},
  handleLoadMore: () => {},
};

const BlogsContext = createContext<BlogsContextType>(initialContextValue);

interface Props {
  children: ReactNode;
}

const INITIAL_PAGE_NUMBER = 1;

export const BlogsContextProvider = ({ children }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(INITIAL_PAGE_NUMBER);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page, refreshing]);

  const fetchData = async () => {
    try {
      const data = await fetchBlogsByPage(page);
      data.result.length === 0 && setLastPage(true);
      page === INITIAL_PAGE_NUMBER ? setBlogs(data.result) : setBlogs((prevData) => [...prevData, ...data.result]);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleLoadMore = () => {
    if (!lastPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handleRefresh = () => {
    setPage(INITIAL_PAGE_NUMBER);
    setRefreshing(true);
    setLastPage(false);
  };

  return (
    <BlogsContext.Provider value={{ blogs, refreshing, handleRefresh, handleLoadMore }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsContext;
