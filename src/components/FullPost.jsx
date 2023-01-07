import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBlogData } from "../context/BlogContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const FullPost = ({ post }) => {
  const public_folder = "http://localhost:5000/images/";
  const { _id, title, desc, username, categories, photo } = post;
  const {
    globalState: { user },
    globalState,
  } = useBlogData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [flagForUpdate, setFlagForUpdate] = useState(false);

  const [updatedValues, setUpdatedValues] = useState({
    title: title,
    desc: desc,
  });

  const updateRequest = async data => {
    try {
      const resp = await axios.put(`/api/posts/${id}`, data);
      console.log(resp);
    } catch (error) {
      console.log(error.request.statusText);
    }
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const initializeEdit = () => {
    setFlagForUpdate(true);
  };
  const discardEdit = () => {
    setFlagForUpdate(false);
  };
  const confirmEdit = () => {
    const requestObject = { ...updatedValues, username: user.username };
    updateRequest(requestObject);
    setFlagForUpdate(false);
    // window.location.reload();
  };
  const handleRemove = async () => {
    try {
      const resp = await axios.delete(`/api/posts/${id}`, {
        data: {
          username: user.username,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error.request.statusText);
    }
  };
  useEffect(() => {
    setUpdatedValues({
      title: title,
      desc: desc,
    });
  }, [post]);
  return (
    <Wrapper className="posts">
      <div className="top-control">
        <div className="full-post">
          {/* <div className="image-control">
            <img src={me} alt="" />
          </div> */}

          <div className="edit-panel">
            {flagForUpdate ? (
              <input
                type="text"
                name="title"
                value={updatedValues.title}
                onChange={handleChange}
                autoFocus={true}
              ></input>
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          <div className="details-panel">
            <Link to={`/?user={username}`}>
              <h6>{username}</h6>
            </Link>
            {username === user?.username && (
              <ul className="horizontal">
                {!flagForUpdate && (
                  <li>
                    <span
                      className="material-symbols-outlined icon"
                      onClick={initializeEdit}
                    >
                      edit_note
                    </span>
                  </li>
                )}
                {flagForUpdate && (
                  <li>
                    <span
                      className="material-symbols-outlined icon"
                      onClick={confirmEdit}
                    >
                      check_small
                    </span>
                  </li>
                )}
                <li>
                  <span
                    className="material-symbols-outlined icon"
                    onClick={handleRemove}
                  >
                    delete
                  </span>
                </li>
              </ul>
            )}
          </div>
          <div className="body">
            {flagForUpdate ? (
              <textarea
                type="text"
                name="desc"
                value={updatedValues.desc}
                onChange={handleChange}
              ></textarea>
            ) : (
              <div className="content">{desc}</div>
            )}
            <div className="image-control">
              {photo && <img src={`${public_folder}${photo}`} alt="" />}
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
