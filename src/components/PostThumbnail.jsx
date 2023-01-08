import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";
import { PostAvatar } from "../assets/svgs";
import { Link } from "react-router-dom";

export const PostThumbnail = props => {
  const { _id, title, desc, username, categories, createdAt, image } = props;
  const postTime = new Date(createdAt).toLocaleDateString();
  const categoryLabel = categories.map((entry, index) => {
    return (
      <li key={index}>
        <p className="footnote_ts label">{entry}</p>
      </li>
    );
  });
  return (
    <PostThumb to={`/post/${_id}`}>
      {image ? <img src={image} alt="" /> : <PostAvatar />}
      {/* <div className="category-date">
        {categories.length > 0 && (
          <ul className="horizontal">{categoryLabel}</ul>
        )}
        <p className="footnote_ts">{postTime}</p>
      </div> */}
      <div className="post-details">
        <div className="user-thumb">
          <img src={me} alt="" />
        </div>
        <div className="post-info">
          <h6 className="footnote_ts">{title}</h6>
          <p className="user-name footnote_ts">
            by <span className="capitalize-name">{username}</span>
          </p>
        </div>
      </div>
    </PostThumb>
  );
};

const PostThumb = styled(Link)`
  appearance: none;
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
  .category-date {
    display: flex;
    justify-content: space-between;
  }
  .post-details {
    display: flex;
    .user-thumb {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      /* overflow: hidden; */
      clip-path: circle();
    }
    .post-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.25ex 1ex;
      h6 {
        margin: 0;
        line-height: 1;
        letter-spacing: 0.5px;
      }
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
