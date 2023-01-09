import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Root = styled.div`
  .outlet {
    /* padding: 1em; */
    background-color: gold;
    box-shadow: 0px 0px 100px 2px rgba(77, 74, 2, 0.471);
    width: 100%;
    align-content: center;
    overflow: hidden;
    position: relative;
    /* :before {
      content: "";
      position: absolute;
      inset: 0px;
      border: 8px solid #e0bf049a;
      box-shadow: inset 0px 0px 5px #7b69029a;
    } */
    .custom-shape-divider-top-1673262859 {
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
    }

    .custom-shape-divider-top-1673262859 svg {
      position: relative;
      margin: 0 auto;
      display: block;
      width: calc(100% - 18px);
      height: 300px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-top-1673262859 .shape-fill {
      fill: #f0ce0f;
      /* fill: black; */
    }
    .custom-shape-divider-bottom-1673263576 {
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1673263576 svg {
      position: relative;
      margin: 0 auto;
      display: block;
      width: calc(100% - 18px);
      height: 300px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1673263576 .shape-fill {
      fill: #f0ce0f;
    }
  }
  @media (min-width: 500px) {
    .outlet {
      /* padding: 2em; */
    }
  }
  @media (min-width: 1050px) {
    padding: 0.5em 0;
  }
`;
