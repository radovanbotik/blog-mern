import React from "react";
import styled from "styled-components";
import { Posts, Sidebar } from "../components";
import { BlogScreen } from "../assets/svgs";

export const FrontPage = () => {
  return (
    <Page>
      <Header2>
        <div className="row graphic">
          <div className="top-control">
            <BlogScreen />
          </div>
        </div>
        <div className="row body">
          <div className="top-control">
            <article className="scene-description">
              <h1 className="h1-bold">Tell your story in seconds</h1>
              <p>
                Easily create and customize stunning illustrations with
                collections made by artists across the globe. Try it, it’s kind
                of fun.
              </p>
              <div className="button-container">
                <button className="dark">write a story</button>
                <button className="light">inspire yourself</button>
              </div>
            </article>
          </div>
        </div>
      </Header2>
      <div className="layout">
        <Posts />
        <Sidebar />
      </div>
    </Page>
  );
};

const Page = styled.section`
  height: 100%;
  .layout {
    width: 100%;
    display: flex;
    & > * {
      min-width: 300px;
    }
  }
`;

const Header2 = styled.section`
  & > * {
    padding: var(--vspace-3) 0;
    margin: 0;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  .row {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.graphic {
      .top-control {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
      }
      svg {
        height: 300px;
        width: 100%;
      }
    }
    &.body {
      & > * {
        width: 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    /* gap: var(--vspace-1); */
    justify-content: space-evenly;
    .row {
      &.graphic {
        .top-control {
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          gap: var(--vspace-2);
          svg {
            max-height: 600px;
            height: 600px;
          }
        }
      }
      &.body {
        justify-content: center;
        .top-control {
          article.scene-description {
            text-align: left;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .button-container {
      justify-content: flex-start;
    }
    button.light {
      display: inline-block;
    }
  }
`;
