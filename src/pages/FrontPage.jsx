import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import {
  FrontPageHeader,
  PostThumbnailGallery,
  Sidebar,
  SpacerBottom,
  SpacerTop,
} from "../components";
import gsap from "gsap";

export const FrontPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  useLayoutEffect(() => {
    const girl_right = document.querySelector("svg g #girl_right #arm_left");
    const girl_left = document.querySelector("svg g #girl_left #arm_right_2");
    const stroke = document.querySelector("svg #pen_stroke_right");
    const ponytail = document.querySelector("svg #girl_right #hair_tail");
    const animation = gsap
      .timeline()
      .fromTo(
        girl_right,
        {
          rotate: "-45deg",
          transformOrigin: "100% 50%",
        },
        {
          duration: 1,
          rotate: "0",
          ease: "back",
        }
      )
      .fromTo(
        ponytail,
        {
          rotate: "8deg",
        },
        {
          duration: 0.75,
          rotate: "0deg",
          repeat: 1,
          ease: "Power2.easeOut",
          yoyoEase: "Sine.easeOut",

          // ease: "back",
          // repeat: 1,
          // yoyo: true,
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
      )
      .fromTo(".book-line", { fill: "white" }, { fill: "#6C63FF" }, "<")
      .fromTo(
        girl_left,
        { rotate: "22deg" },
        { rotate: "0deg", duration: 1, ease: "back" },
        0
      )
      .fromTo(
        "#hair_tail_2",
        { rotate: "-8deg" },
        {
          rotate: "8deg",
          transformOrigin: "100% 50%",
          ease: "back",
          duration: 1,
        },
        0
      );
  }, [isHovered]);
  return (
    <Page className="section-layout">
      <div className="flex">
        <FrontPageHeader />
        <div className="modal">asdasdas</div>
      </div>
      <SpacerBottom />
      {/* <SpacerTop /> */}
      {/* <Previews>
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
      </Previews> */}
    </Page>
  );
};

const Page = styled.main`
  position: relative;

  .flex {
    padding: 0 2em;
    max-width: calc(25 * var(--vspace-0));
    margin: 0 auto;
    min-height: inherit;
    /* height: 100%; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: flex-start;
    align-content: flex-start;
  }

  @media (min-width: 600px) {
    .flex {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
    }
  }
  @media (min-width: 1640px) {
    .flex {
      padding: 0;
    }
  }
`;

const Previews = styled.section`
  min-height: 100vh;
  /* padding: 0em 1em; */
  display: flex;
  place-content: center;
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
