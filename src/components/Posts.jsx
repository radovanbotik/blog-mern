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
      : postsList.slice(0, 4).map(entry => {
          return <Post key={entry.id} />;
        });

  // const displayPosts = postsList.slice(0, 4).map(entry => {
  //   return <Post key={entry.id} />;
  // });

  return (
    <Wrapper className="posts">
      <div className="top-control">{displayPosts}</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: inherit;
  /* background-color: #9d3d4d; */
  .top-control {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    /* display: grid;
    grid-template-columns: repeat(2, 5vw 1fr 0.5fr); */
    justify-content: stretch;
    gap: var(--vspace-1);
  }
`;
