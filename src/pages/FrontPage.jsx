import React from "react";
import styled from "styled-components";
import { Header, Posts, Sidebar } from "../components";

export const FrontPage = () => {
  return (
    <Page>
      <Header />
      <div className="layout">
        <Posts />
        <Sidebar />
      </div>
    </Page>
  );
};

const Page = styled.section`
  & > * {
    padding: var(--vspace-3);
  }
  .layout {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & > * {
      min-width: 300px;
    }
    .posts {
      flex: 4;
    }
    .sidebar {
      flex: 1;
    }
  }
`;
