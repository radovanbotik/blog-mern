import React from "react";
import styled from "styled-components";
import { useBlogData } from "../context/BlogContext";
import { Link } from "react-router-dom";
import { PostThumbnail } from "../components";

export const AllPostsPage = () => {
  const { posts } = useBlogData();

  return (
    <Page className="section-layout">
      <section className="first-section">
        <h2 className="h2-bold title">All the posts</h2>
        <div className="content">
          <h3>posts</h3>
          <div className="gallery">
            {posts &&
              posts.map(post => {
                return <PostThumbnail key={post._id} {...post}></PostThumbnail>;
              })}
          </div>
        </div>
      </section>
    </Page>
  );
};
const Page = styled.main`
  .first-section {
    background-color: red;
  }
  .content {
    flex: 1;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
  }
`;

const Contribution = styled(Link)`
  border: 1px solid black;
  height: 200px;
`;
