import React from "react";
import { Post } from "./Post";
import styled from "styled-components";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";
import { useBlogData } from "../context/BlogContext";

export const Posts = () => {
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();
  const { posts } = useBlogData();

  // const allPosts =
  //   onlyWidth < 1200
  //     ? posts.slice(0, 2).map(entry => {
  //         return <Post key={entry._id} {...entry} />;
  //       })
  //     : onlyWidth > 1600
  //     ? posts.slice(0).map(entry => {
  //         return <Post key={entry._id} {...entry} />;
  //       })
  //     : posts.slice(0, 3).map(entry => {
  //         return <Post key={entry._id} {...entry} />;
  //       });

  const allPosts = posts.map(entry => {
    return <Post key={entry._id} {...entry} />;
  });

  return <Wrapper>{allPosts}</Wrapper>;
};
const Wrapper = styled.div`
  width: inherit;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* flex-wrap: wrap; */
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: var(--vspace-2);
`;
