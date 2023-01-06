import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styled from "styled-components";
import { ImageUpload } from "../assets/svgs";
import { Blob } from "../assets/svgs";
import axios from "axios";
import { useBlogData } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const {
    globalState: { user },
  } = useBlogData();
  const [userInput, setUserInput] = useState({
    title: "",
    desc: "",
    photo_path: "",
  });
  const photoRef = useRef();
  const navigate = useNavigate();

  //Fetch Logic
  const uploadPost = async postbody => {
    const resp = await axios.post("/api/posts/", postbody);
    return resp.data;
  };
  const uploadImage = async postbody => {
    const resp = await axios.post("/api/upload", postbody, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(resp);
  };

  //Form actions
  const handleSubmit = e => {
    e.preventDefault();
    const postObject = { username: user.username, ...userInput };
    if (userInput.photo_path !== "") {
      const photo_name = photoRef.current.files[0].name;
      const filedata = new FormData();
      const unique_file_name = new Date().getUTCMilliseconds() + photo_name;
      filedata.append("name", unique_file_name);
      filedata.append("file", photoRef.current.files[0]);
      postObject.photo = unique_file_name;
      uploadImage(filedata);
    }
    uploadPost(postObject).then(data => navigate(`/post/${data._id}`));
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
  }, [userInput.desc]);
  return (
    <Page className="section-layout">
      {/* <h2 className="h2-bold section-title">Speak your mind</h2> */}
      <div className="wrap">
        <h2 className="h2-bold section-title">Speak your mind.</h2>
        <div className="row graphic">
          <div className="top-control">
            {userInput.photo_path !== "" ? (
              <img
                src={URL.createObjectURL(photoRef.current.files[0])}
                alt="image preview"
              />
            ) : (
              <ImageUpload />
            )}
            {/* <div className="blob blob1">
              <Blob />
            </div> */}
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <form onSubmit={handleSubmit}>
              {/* <h2 className="h2-bold">Speak your mind.</h2> */}
              <h2 className="h2-bold">Let the world know</h2>

              <p>
                Join the community of active writers.
                <br /> Write, read and share your stories with ease.
              </p>
              {/* --TITLE--IMAGE--TITLE--IMAGE--TITLE--IMAGE--TITLE--IMAGE--TITLE--IMAGE */}
              <fieldset className="user-inputs">
                {/* <legend>Create a new post</legend> */}
                <div className="panel">
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={userInput.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="panel file-input">
                  <label htmlFor="fileinput" className="footnote_ts">
                    <span>Attach an image</span>
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                  </label>
                  <input
                    type="file"
                    id="fileinput"
                    style={{ display: "none" }}
                    name="photo_path"
                    value={userInput.photo_path}
                    onChange={handleChange}
                    accept="image/*"
                    ref={photoRef}
                  />
                </div>
              </fieldset>
              {/* --STORY----STORY----STORY----STORY----STORY----STORY----STORY-- */}
              <fieldset className="user-story">
                <legend>The story</legend>
                <div className="panel">
                  <label htmlFor="story">
                    <h6 className="endnote_ts">story</h6>
                  </label>
                  <textarea
                    id="story"
                    name="desc"
                    value={userInput.desc}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </fieldset>
              <fieldset>
                <button type="submit">publish</button>
              </fieldset>
            </form>
            {/* <div className="blob blob2">
              <Blob />
            </div> */}
          </div>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section`
  /* background-color: gold; */

  .blob {
    position: absolute;
    width: max(150px, 15%);
  }
  .blob1 {
    top: max(120px, 18%);
    /* left: min(200px, 20%); */
    left: 50%;
    transform: rotate(180deg);
  }
  .blob2 {
    top: 0%;
    right: 5%;
  }
`;
