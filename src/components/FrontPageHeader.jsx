import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { BlogScreen, GirlsAndNotebook, Notebook } from "../assets/svgs";
import { Link } from "react-router-dom";
import gsap from "gsap";

export const FrontPageHeader = () => {
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
  }, []);
  return (
    <Header className="FrontPageHeader">
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
                Write and share your own stories with with people across the
                globe. <br /> Try it, it's free.
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
    </Header>
  );
};

const Header = styled.section`
  /* border: 1px solid black; */
  /* height: calc(100vh - 80px - 2em - 90px); */
  /* height: 100%; */
  /* min-height: inherit; */
  /* display: grid; */
  /* place-content: center; */
  position: relative;
  /* svg {
    max-height: 600px;
  } */
`;
