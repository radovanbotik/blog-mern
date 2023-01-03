import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <Root>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .outlet {
    min-height: calc(100vh - 80px);
    /* min-height: calc(100vh - 165px); */
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    /* overflow: hidden; */
  }
  @media (min-width: 600px) {
    grid-template-columns: calc(var(--vspace-1)) 1fr calc(var(--vspace-1));
    & > * {
      grid-column: 2/3;
      /* margin-top: var(--vspace-2); */
    }
  }
`;
