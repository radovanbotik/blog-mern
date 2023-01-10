import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBlogData } from "../context/BlogContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const FullPost = ({ post }) => {
  const public_folder = "http://localhost:5000/images/";
  const { _id, title, desc, username, categories, updatedAt } = post;
  const postDate = new Date(updatedAt).toLocaleDateString();
  // console.log(postDate);
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
  const [dropdownActive, setDropdownActive] = useState(false);

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

  //Text Area Resizing
  useLayoutEffect(() => {
    const txHeight = 160;
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
      if (tx[i].value == "") {
        tx[i].setAttribute(
          "style",
          "height:" + txHeight + "px;overflow-y:hidden;"
        );
      } else {
        tx[i].setAttribute(
          "style",
          "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
        );
      }
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput(e) {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, [updatedValues.desc]);
  return (
    <Article>
      {flagForUpdate ? (
        <div className="article-title">
          <h2 className="resize">Edit mode</h2>
          <fieldset className="user-inputs">
            <div className="panel">
              <label htmlFor="title">New title:</label>
              <input
                id="title"
                type="text"
                name="title"
                value={updatedValues.title}
                onChange={handleChange}
                autoFocus={true}
              ></input>
            </div>
          </fieldset>
        </div>
      ) : (
        <div className="article-title">
          <h2 className="resize">{title}</h2>
          <p>
            <span className="endnote_ts">by</span>
            <span className="capitalize-name">
              {" "}
              {username === user.username ? "you" : username}
            </span>
          </p>
        </div>
      )}

      <div className="article-body">
        {flagForUpdate ? (
          <fieldset className="user-story">
            <div className="panel">
              <label htmlFor="story">
                <h6 className="endnote_ts">Edit your message:</h6>
              </label>
              <textarea
                id="story"
                type="text"
                name="desc"
                value={updatedValues.desc}
                onChange={handleChange}
              ></textarea>
            </div>
          </fieldset>
        ) : (
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            sapiente dignissimos hic expedita fugiat repudiandae delectus
            nostrum quaerat eum illum reprehenderit deleniti doloremque est eos,
            blanditiis explicabo tenetur pariatur ipsam exercitationem adipisci
            consectetur voluptates earum. Tempora mollitia eligendi, architecto
            dicta, repellendus sit animi ullam laborum a ipsa non recusandae.
            Quam eaque quae nemo modi, numquam minima tempora temporibus nostrum
            dignissimos quasi alias neque iusto cupiditate dolor laboriosam,
            ipsa inventore ab a nulla obcaecati illum maiores!
            {desc}
          </div>
        )}
        {/* <div className="image-control">
          {photo && <img src={`${public_folder}${photo}`} alt="" />}
        </div> */}
      </div>
      <span className="footnote_ts">Created on {postDate}</span>

      {username === user?.username && (
        <span className="caption_ts">You are allowed to edit this post.</span>
      )}
      {username === user?.username && (
        <div className="article-controls">
          <div className="controls">
            <button onClick={() => setDropdownActive(prev => !prev)}>
              controls
            </button>
            <div className={dropdownActive ? "dropdown active" : "dropdown"}>
              {!flagForUpdate && (
                <button className="option" onClick={initializeEdit}>
                  <span className="material-symbols-outlined icon">
                    edit_note
                  </span>
                  <span>edit</span>
                </button>
              )}
              {!flagForUpdate && (
                <button className="option" onClick={handleRemove}>
                  <span className="material-symbols-outlined icon">delete</span>
                  <span>delete</span>
                </button>
              )}
              {flagForUpdate && (
                <button className="option" onClick={confirmEdit}>
                  <span className="material-symbols-outlined icon">
                    check_small
                  </span>
                  <span>confirm edit</span>
                </button>
              )}
              {flagForUpdate && (
                <button className="option" onClick={discardEdit}>
                  <span className="material-symbols-outlined icon">
                    backspace
                  </span>
                  <span>discard changes</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Article>
  );
};

const Article = styled.article`
  width: inherit;
  /* background-color: #d4dba6; */

  display: flex;
  flex-direction: column;
  gap: var(--vspace-3);
  padding: 1em 2em;
  .article-title {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1ex;
  }
  .article-body {
  }
  .article-controls {
    align-self: flex-start;

    /* align-self: end; */
    /* button ul {
      gap: 0;
      li {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5ex;
      }
      li:hover {
        .icon {
          font-variation-settings: "FILL" 1;
        }
      }
      li:active {
        .icon {
          font-variation-settings: "FILL" 1, "wght" 300;
        }
      }
    } */
    .controls {
      display: flex;
      button {
        height: 28px;
        padding: 0 1em;
        font-size: var(--size-100);
        display: flex;
        align-items: center;
        span {
          line-height: 0;
        }
      }
      /* flex-direction: column; */
      .dropdown {
        display: flex;
        /* flex-direction: column; */
        overflow: hidden;
        /* height: 0; */
        width: 0;
        .option:nth-child(1) {
          transform: translateX(-100%);
          transition: 250ms ease-in-out;
        }
        .option:nth-child(2) {
          transform: translateX(-200%);
          transition: 500ms ease-in-out;
        }
      }
      .dropdown.active {
        /* height: auto; */
        width: auto;
        .option:nth-child(1) {
          transform: translateX(0);
        }
        .option:nth-child(2) {
          transform: translateX(0);
        }
      }
    }
  }
`;
