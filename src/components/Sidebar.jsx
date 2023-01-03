import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";

export const Sidebar = () => {
  return (
    <Wrapper className="sidebar">
      <div className="top-control">
        <div className="post">
          <div className="about">
            <div className="image-control">{/* <img src={me} alt="" /> */}</div>
            <h4>about me</h4>
            <p className="introduction">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cum
              laboriosam dolores eius quod architecto ratione velit officia
              animi quas!
            </p>
          </div>
          <div className="panel category">
            <h6>categories</h6>
            <ul className="horizontal">
              <li>
                <p className="footnote_ts">love</p>
              </li>
              <li>
                <p className="footnote_ts">death</p>
              </li>
              <li>
                <p className="footnote_ts">robots</p>
              </li>
            </ul>
          </div>
          <div className="panel social">
            <h6>like this?</h6>
            <ul className="horizontal">
              <li>
                <a href="">
                  <p className="footnote_ts">see more</p>
                </a>
                <span className="material-symbols-outlined">photo_camera</span>
              </li>
              <li>
                <a href="">
                  <p className="footnote_ts">see more</p>
                </a>
                <span className="material-symbols-outlined">mail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: inherit;
  max-width: 420px;
  /* background-color: #dba6af; */
  .top-control {
    height: 100%;
    display: grid;
    place-content: center;
    align-content: flex-start;
    .post {
      height: 100%;
      padding: var(--vspace-3);
      background-color: #acdba6;

      .about {
        width: 100%;
        .image-control {
          /* height: 128px; */
          img {
            max-height: 156px;
          }
        }
        h4 {
          margin-top: var(--vspace-3);
        }
        p.introduction {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .panel {
        h6 {
          /* margin-top: var(--vspace-3); */
        }
      }
      .panel.category {
        ul {
          li {
            /* text-indent: 1ex; */
            &::marker {
              white-space: pre-line;
            }
            & > * {
              display: inline-block;
            }
          }
        }
      }
      .panel.social {
        ul {
          li {
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .top-control {
      .post {
        .about {
          p.introduction {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  @media (min-width: 1800px) {
    .top-control {
      .post {
        .about {
          p.introduction {
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            -webkit-line-clamp: none;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
`;
