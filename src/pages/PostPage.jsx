import React from "react";
import styled from "styled-components";
import { FullPost, Sidebar } from "../components";

export const PostPage = () => {
  return (
    <Page>
      <div className="layout">
        <div className="posts">
          <FullPost />
          <FullPost />
          <FullPost />
        </div>
        <Sidebar />
      </div>
    </Page>
  );
};

const Page = styled.section`
  /* height: 100%; */

  & > * {
    padding: var(--vspace-3);
  }
  .layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    /* & > * {
      min-width: 300px;
    } */
    .sidebar {
      flex: 1;
      max-width: 350px;
      align-self: flex-start;
    }
    .posts {
      flex: 1;
      /* width: min(100%, 70ch); */
    }
  }
  @media (min-width: 1200px) {
    .layout {
      flex-direction: row;
    }
  }
`;
