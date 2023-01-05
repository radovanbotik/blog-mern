import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const BlogCTX = React.createContext();
const BlogContext = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get("/api/posts");
      setPosts(resp.data);
    };
    fetchPosts();
  }, []);
  return <BlogCTX.Provider value={{ posts }}>{children}</BlogCTX.Provider>;
};

const useBlogData = () => {
  return useContext(BlogCTX);
};
export { BlogContext, useBlogData };
