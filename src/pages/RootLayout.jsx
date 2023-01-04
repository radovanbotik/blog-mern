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
  /* max-width: calc(25 * var(--vspace-0));
  margin: 0 auto; */
  .outlet {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: grid;
    align-content: center;
  }
`;
