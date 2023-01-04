import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";
import { PostAvatar } from "../assets/svgs";

export const Post = () => {
  return (
    <PostThumb>
      <PostAvatar />
      {/* <img src={me} alt="" /> */}
      {/* <div className="panel category">
            <ul className="horizontal">
              <li>
                <p className="footnote_ts">lifestyle</p>
              </li>
              <li>
                <p className="footnote_ts">nature</p>
              </li>
            </ul>
          </div> */}
      <div className="post-details">
        <div className="user-thumb">
          <img src={me} alt="" />
        </div>
        <div className="post-info">
          <h6 className="footnote_ts">Scene</h6>
          <p className="user-name footnote_ts">by Radovan</p>
        </div>
      </div>
      {/* <p className="footnote_ts">1.1.2023</p> */}
      {/* <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ex
            architecto consequatur velit provident impedit necessitatibus
            similique temporibus amet pariatur!
          </p> */}
    </PostThumb>
  );
};

const PostThumb = styled.div`
  max-height: 322px;
  /* height: 322px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--vspace-3);

  svg {
    border: 1px solid black;
    border-radius: 8px;
    height: 100%;
    width: 100%;
  }
  /* height: 128px; */

  .post-details {
    display: flex;
    gap: var(--vspace-3);
    .user-thumb {
      height: 48px;
      width: 48px;
      border-radius: 50%;
      /* overflow: hidden; */
      clip-path: circle();
    }
    .post-info {
      p {
        line-height: 1;
      }
    }
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
