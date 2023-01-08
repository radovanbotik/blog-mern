import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FullPost, Sidebar } from "../components";
import { useParams } from "react-router-dom";
import { useBlogData } from "../context/BlogContext";
import axios from "axios";
import { PostAvatar } from "../assets/svgs";

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
    <Page className="section-layout">
      <div className="wrap">
        <h2 className="h2-bold section-title">The article</h2>
        <div className="row graphic">
          <div className="top-control">
            {/* <Sidebar post={post} /> */}
            <PostAvatar />
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <FullPost post={post} />
          </div>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section`
  /* background-color: yellow; */
`;
