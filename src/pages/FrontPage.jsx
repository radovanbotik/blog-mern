import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { PostThumbnailGallery, Sidebar } from "../components";
import { BlogScreen, GirlsAndNotebook, Notebook } from "../assets/svgs";
import { useBlogData } from "../context/BlogContext";
import { Link } from "react-router-dom";
import gsap from "gsap";

export const FrontPage = () => {
  // const svg = document.querySelector("svg #notebook");

  useLayoutEffect(() => {
    const girl_right_arm_left = document.querySelector(
      "svg g #girl_right #arm_left"
    );
    const frame = document.querySelector("svg g #book #frame");
    const stroke = document.querySelector("svg #pen_stroke_right");
    const ponytail = document.querySelector("svg #girl_right #hair_tail");
    console.log(ponytail);
    gsap
      .timeline()
      .fromTo(
        girl_right_arm_left,
        {
          rotate: "-45deg",
          transformOrigin: "100% 50%",
        },
        {
          duration: 1,
          rotate: "0",
        }
      )
      .fromTo(
        ponytail,
        {
          rotate: "8deg",
        },
        {
          duration: 1,
          rotate: "0deg",
          repeat: 1,
          yoyo: true,
        },
        0
      )
      .fromTo(
        stroke,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
  }, []);
  return (
    <Page className="section-layout">
      <Header2>
        <div className="wrap">
          <div className="row graphic hero reverse-order">
            <div className="top-control">
              {/* <BlogScreen /> */}
              <GirlsAndNotebook />
            </div>
          </div>
          <div className="row form reverse-order">
            <div className="top-control">
              <article className="scene-description">
                <h1 className="h1-bold">Tell your story in seconds</h1>
                <p>
                  Easily write and share your own stories with wtih people
                  across the globe. Try it, it's free.
                </p>
                <div className="button-container">
                  <Link to="/create-post" className="button-big dark">
                    <span className="material-symbols-outlined">article</span>
                    write a story
                  </Link>
                  <button className="button-big light">inspire yourself</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Header2>
      <Previews>
        <div className="wrap">
          <h2 className="h2-bold title">Check out the most recent additions</h2>
          <div className="top-control">
            <div className="component-header">
              <h5>from the community</h5>
              <h5 className="endnote_ts">
                Browse all
                <span className="material-symbols-outlined icon">
                  chevron_right
                </span>
              </h5>
            </div>
            <PostThumbnailGallery />
          </div>
        </div>
      </Previews>
    </Page>
  );
};

const Page = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header2 = styled.section`
  height: calc(100vh - 80px - 4em);
  display: grid;
  place-content: center;
  svg {
    max-height: 600px;
  }
`;
const Previews = styled.section`
  padding: 0em 1em;
  display: flex;
  flex-direction: column;
  h2.title {
    text-align: center;
  }
  @media (min-width: 660px) {
    h2.title {
      text-align: left;
    }
  }
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
