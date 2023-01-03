import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";
import { PostAvatar } from "../assets/svgs";

export const Post = () => {
  return (
    <Wrapper>
      <div className="top-control">
        <div className="image-control">
          <PostAvatar />
          {/* <img src={me} alt="" /> */}
        </div>
        <div className="details">
          <div className="panel category">
            <ul className="horizontal">
              <li>
                <p className="footnote_ts">lifestyle</p>
              </li>
              <li>
                <p className="footnote_ts">nature</p>
              </li>
            </ul>
          </div>
          <h4>This is a post.</h4>
          <p className="footnote_ts">1.1.2023</p>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ex
            architecto consequatur velit provident impedit necessitatibus
            similique temporibus amet pariatur!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  min-width: 300px;
  /* height: 100%; */
  /* max-width: 400px; */
  .top-control {
    /* aspect-ratio: 16/9; */
    background-color: #ebecea;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* justify-content: flex-end; */
    .image-control {
      width: 100%;
      flex: 1;
      max-height: 200px;
      svg {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      /* height: 128px; */
    }
    .details {
      .content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    h5 {
      margin-top: var(--vspace-3);
    }
  }
`;
