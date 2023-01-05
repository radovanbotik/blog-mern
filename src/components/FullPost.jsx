import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";

export const FullPost = ({ post }) => {
  const { _id, title, desc, username, categories, image } = post;
  return (
    <Wrapper className="posts">
      <div className="top-control">
        <div className="full-post">
          {/* <div className="image-control">
            <img src={me} alt="" />
          </div> */}
          <div className="edit-panel">
            <h3>{title}</h3>
          </div>
          <div className="details-panel">
            <h6>{username}</h6>
            <ul className="horizontal">
              <li>
                <span class="material-symbols-outlined">edit_note</span>
              </li>
              <li>
                <span class="material-symbols-outlined">delete</span>
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="content">{desc}</div>
            <div className="image-control">
              {image && <img src={me} alt="" />}
            </div>
          </div>
          <p className="footnote_ts">A day ago</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: inherit;
  background-color: #d4dba6;
  /* height: 100%; */

  .top-control {
    height: 100%;
    height: inherit;
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: end;
    .full-post {
      height: 100%;
      padding: var(--vspace-3);
      background-color: #a6a8db;
      display: flex;
      flex-direction: column;
      /* .image-control {
        height: 100%;
        width: 100%;
        img {
          max-height: 600px;
        }
      } */
      h3 {
        word-break: keep-all;
      }
      .edit-panel {
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        align-items: flex-end;
        ul {
          flex-wrap: nowrap;
        }
      }
      .details-panel {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
      }
      .body {
        /* display: flex; */
        display: grid;
        grid-template-columns: 1fr;
        @media (min-width: 950px) {
          grid-template-columns: min(100%, 70ch) 1fr;
        }
        .content {
          /* width: min(100%, 70ch) */
          text-indent: 0.5ex;
          line-height: 1.6;
          &:first-letter {
            font-size: var(--size-400);
            font-weight: 500;
          }
        }
        .image-control {
          max-height: 200px;
        }
      }
    }
  }
`;
