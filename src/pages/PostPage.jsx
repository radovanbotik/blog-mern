import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FullPost, Sidebar } from "../components";
import { useParams } from "react-router-dom";
import { useBlogData } from "../context/BlogContext";
import axios from "axios";

export const PostPage = () => {
  const { posts } = useBlogData();
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`/api/posts/${id}`);
      setPost(resp.data);
    };
    fetchData();
  }, [id]);

  return (
    <Page>
      <div className="layout">
        <FullPost post={post} />
        <Sidebar post={post} />
      </div>
    </Page>
  );
};

const Page = styled.section`
  /* height: 100%; */

  & > * {
    padding: var(--vspace-3);
    margin-top: var(--vspace-1);
  }
  .layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .sidebar {
      flex: 1;
      max-width: 350px;
      align-self: flex-start;
    }
  }
  @media (min-width: 1200px) {
    .layout {
      flex-direction: row;
    }
  }
`;
