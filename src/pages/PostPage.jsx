import React from "react";
import styled from "styled-components";
import { FullPost, Sidebar } from "../components";

export const PostPage = () => {
  return (
    <Page>
      <div className="layout">
        <FullPost />
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
    flex-wrap: wrap;
    & > * {
      min-width: 300px;
    }
    .sidebar {
      flex: 1;
      min-width: 300px;
      align-self: flex-start;
    }
    .posts {
      flex: 4;
    }
  }
`;
