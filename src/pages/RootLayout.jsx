import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <Root>
      <div className="outlet">
        <Navbar />
        <Outlet />
      </div>
    </Root>
  );
};

const Root = styled.div`
  .outlet {
    padding: 1em;
    background-color: gold;
    box-shadow: 0px 0px 20px 1px rgba(135, 130, 4, 0.747);
    width: 100%;
    align-content: center;
    overflow: hidden;
  }
  @media (min-width: 500px) {
    .outlet {
      padding: 2em;
    }
  }
  @media (min-width: 1050px) {
    padding: 0.5em 0;
  }
`;
