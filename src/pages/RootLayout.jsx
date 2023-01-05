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
  /* padding: 0em 1em; */
  /* margin: var(--vspace-3) var(--vspace-2); */

  .outlet {
    background-color: gold;
    box-shadow: 0px 0px 20px 1px rgba(135, 130, 4, 0.747);
    width: 100%;
    /* border-top-left-radius: 4px;
    border-top-right-radius: 4px; */
    /* display: grid; */
    align-content: center;
    overflow: hidden;
    /* border: 2px solid black; */
  }
`;
