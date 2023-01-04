import React from "react";
import styled from "styled-components";
import { Posts, Sidebar } from "../components";
import { BlogScreen } from "../assets/svgs";

export const FrontPage = () => {
  return (
    <Page>
      <Header2 className="section-layout">
        <div className="wrap">
          <div className="row graphic reverse-order">
            <div className="top-control">
              <BlogScreen />
            </div>
          </div>
          <div className="row form reverse-order">
            <div className="top-control">
              <article className="scene-description">
                <h1 className="h1-bold">Tell your story in seconds</h1>
                <p>
                  Easily create and customize stunning illustrations with
                  collections made by artists across the globe. Try it, it’s
                  kind of fun.
                </p>
                <div className="button-container">
                  <button className="dark">
                    <span class="material-symbols-outlined">article</span>
                    write a story
                  </button>
                  <button className="light">inspire yourself</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Header2>
      <PostsSlider className="section-layout">
        <h2 className="h2-bold section-title">
          How does Blog make sharing your projects simple and fun?
        </h2>
        <div className="wrap">
          <div className="top-control">
            <div className="layout">
              <div className="component-header">
                <h5>from the community</h5>
                <h5 className="endnote_ts">
                  Browse all
                  <span class="material-symbols-outlined icon">
                    chevron_right
                  </span>
                </h5>
              </div>
              <Posts />
            </div>
          </div>
        </div>
      </PostsSlider>
    </Page>
  );
};

const Page = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header2 = styled.section``;
const PostsSlider = styled.section`
  .component-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h5:nth-child(2) {
      color: #00000095;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        .icon {
          transform: translate(2px);
        }
      }
    }
  }
`;
