import React from "react";
import styled from "styled-components";
import { NewPost } from "../components/NewPost";

export const CreatePost = () => {
  return (
    <Page>
      <NewPost />
    </Page>
  );
};

const Page = styled.section`
  height: 100%;
  & > * {
    padding: var(--vspace-3);
    margin-top: var(--vspace-1);
  }
`;
