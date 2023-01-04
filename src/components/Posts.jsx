import React from "react";
import { Post } from "./Post";
import styled from "styled-components";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";

const postsList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const Posts = () => {
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  const displayPosts =
    onlyWidth < 1200
      ? postsList.slice(0, 2).map(entry => {
          return <Post key={entry.id} />;
        })
      : onlyWidth > 1600
      ? postsList.slice(0).map(entry => {
          return <Post key={entry.id} />;
        })
      : postsList.slice(0, 3).map(entry => {
          return <Post key={entry.id} />;
        });

  // const displayPosts = postsList.slice(0, 4).map(entry => {
  //   return <Post key={entry.id} />;
  // });

  return <Wrapper>{displayPosts}</Wrapper>;
};
const Wrapper = styled.div`
  width: inherit;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--vspace-1);
`;
