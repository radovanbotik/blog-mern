import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useBlogData } from "../context/BlogContext";
import axios from "axios";
import def from "../assets/me.jpg";

export const MyPostsPage = () => {
  const {
    globalState: { user },
  } = useBlogData();
  const { email, username, profilePicture, updatedAt, _id, createdAt } = user;
  const [usersOwnPosts, setUsersOwnPosts] = useState([]);
  const [me, setMe] = useState({});

  const fetchUserPosts = async () => {
    const resp = await axios(`/api/posts?user=${username}`);
    setUsersOwnPosts(resp.data);
  };
  const fetchUser = async () => {
    const resp = await axios(`api/users/${_id}`);
    setMe(resp.data);
  };

  useEffect(() => {
    fetchUserPosts();
    fetchUser();
  }, []);

  return (
    <Page>
      <section>
        <div className="wrap">
          <div className="posts">
            {usersOwnPosts.map(post => {
              return (
                <div key={post._id} className="own-post">
                  <h4>title:{post.title}</h4>
                  <p>{post.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="profile">
            <h3>{me.username}</h3>
            <p>{me.email}</p>
            <div className="image-control">
              <img src={def} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

const Page = styled.main`
  .wrap {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 850px) {
      grid-template-columns: auto 400px;
    }
  }
  .posts {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1;
    }
    .own-post {
      border: 1px solid black;
    }
  }
  .profile {
    border: 2px solid red;
    .image-control {
      height: 200px;
    }
  }
`;
