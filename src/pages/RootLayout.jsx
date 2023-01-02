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
  /* grid-template-columns: calc(var(--vspace-3) / 2) 1fr calc(var(--vspace-3) / 2); */

  & > * {
    grid-column: 2/3;
    margin-top: var(--vspace-2);
  }
  .outlet {
    /* max-width: calc(25 * var(--vspace-1)); */
    /* margin: 0 auto; */
    /* background-color: pink; */
    min-height: calc(100vh - 80px);
    min-height: calc(100vh - 165px);

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
  @media (min-width: 500px) {
    grid-template-columns: calc(var(--vspace-1)) 1fr calc(var(--vspace-1));
  }
`;
