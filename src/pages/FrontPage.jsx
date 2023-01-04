import React from "react";
import styled from "styled-components";
import { Posts, Sidebar } from "../components";
import { BlogScreen } from "../assets/svgs";

export const FrontPage = () => {
  return (
    <Page>
      <Header2 className="section-layout">
        <div className="wrap">
          <div className="row graphic">
            <div className="top-control">
              <BlogScreen />
            </div>
          </div>
          <div className="row form">
            <div className="top-control">
              <article className="scene-description">
                <h1 className="h1-bold">Tell your story in seconds</h1>
                <p>
                  Easily create and customize stunning illustrations with
                  collections made by artists across the globe. Try it, it’s
                  kind of fun.
                </p>
                <div className="button-container">
                  <button className="dark">write a story</button>
                  <button className="light">inspire yourself</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Header2>
      <h2 className="h2-bold">
        How does Blog make sharing your projects simple and fun?
      </h2>
      {/* <div className="layout">
        <Posts />
        <Sidebar />
      </div> */}
    </Page>
  );
};

const Page = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  h2.h2-bold {
    align-self: center;
    text-align: center;
    text-transform: none;
  }
`;

const Header2 = styled.section``;
