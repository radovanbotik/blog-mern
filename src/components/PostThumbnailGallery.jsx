import React from "react";
import { PostThumbnail } from "./PostThumbnail";
import styled from "styled-components";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";
import { useBlogData } from "../context/BlogContext";

export const PostThumbnailGallery = () => {
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

  const allPosts = posts.slice(-4).map(entry => {
    return <PostThumbnail key={entry._id} {...entry} />;
  });

  return <Wrapper>{allPosts}</Wrapper>;
};
const Wrapper = styled.div`
  width: inherit;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  display: grid;
  gap: var(--vspace-3);
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (min-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (min-width: 915px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
