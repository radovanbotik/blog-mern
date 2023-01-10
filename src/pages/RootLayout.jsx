import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <Root>
      <Navbar />
      <Outlet />
    </Root>
  );
};

const Root = styled.div`
  &:before {
    content: "Blog.";
    position: absolute;
    font-size: 25em;
    right: 0;
    top: 0px;
    font-family: var(--sofia);
    font-family: var(--outfit);
    color: #feea75d2;
    user-select: none;
    pointer-events: none;
    /* background-color: black; */
  }
`;
