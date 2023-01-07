import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProfileDetails } from "../assets/svgs";
import { ProfileAvatar } from "../assets/svgs";
import { useBlogData } from "../context/BlogContext";

export const UserSettings = () => {
  const {
    globalState: { user },
    handleUpdate,
    handleUpdateSuccess,
    handleUpdateFailure,
    globalState,
  } = useBlogData();
  const fileRef = useRef();
  const [userSettings, setUserSettings] = useState({
    userId: user._id,
    username: "",
    email: "",
    password: "",
    photo: "",
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  //Fetch Logic
  const uploadNewCredentials = async settings => {
    const resp = await axios.put(`/api/users/${user._id}`, settings);
    return resp.data;
  };

  const uploadNewProfileImage = async fileObject => {
    const resp = await axios.post("/api/upload", fileObject, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  //Form Logic
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSettings(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleUpdate();
    try {
      if (fileRef.current.files[0]) {
        const file = fileRef.current.files[0];
        const filename =
          new Date().getUTCMilliseconds() + fileRef.current.files[0].name;
        const fileObject = {
          name: filename,
          file: file,
        };
        userSettings.profilePicture = filename;
        uploadNewProfileImage(fileObject);
      }
      uploadNewCredentials(userSettings).then(data => {
        handleUpdateSuccess(data);
      });
      setUploadSuccess(true);
    } catch (error) {
      console.log(error);
      handleUpdateFailure();
    }
  };

  // useEffect(() => {
  //   setUserSettings({
  //     userId: user._id,
  //     username: user.username,
  //     email: user.email,
  //     password: user.password,
  //   });
  // }, [user]);

  return (
    <Page className="section-layout">
      {/* <h2 className="h2-bold section-title">Account settings</h2> */}
      <div className="wrap">
        <h2 className="h2-bold section-title">Account settings</h2>
        <div className="row graphic">
          <div className="top-control">
            {/* <h2 className="h2-bold">Account settings</h2> */}
            <ProfileDetails />
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <form onSubmit={handleSubmit}>
              <h2 className="h2-bold center">Your details</h2>
              <fieldset className="user-picture">
                <legend className="center">profile picture</legend>
                <div className="panel">
                  <div className="image-control center">
                    {userSettings.photo ? (
                      <img
                        src={URL.createObjectURL(fileRef.current.files[0])}
                        alt=""
                      />
                    ) : (
                      <ProfileAvatar />
                    )}
                  </div>
                  <label htmlFor="profilePicture" className="center">
                    <span className="material-symbols-outlined">image</span>
                    <span>update your picture</span>
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    style={{ display: "none" }}
                    name="photo"
                    value={userSettings.photo}
                    onChange={handleChange}
                    ref={fileRef}
                  />
                </div>
              </fieldset>
              <fieldset className="user-data">
                <legend>account details</legend>
                <div className="panel">
                  <label htmlFor="username">
                    <span> your username</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userSettings.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="panel">
                  <label htmlFor="email">
                    <span>your email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userSettings.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="panel">
                  <label htmlFor="password">
                    <span>your password</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userSettings.password}
                    onChange={handleChange}
                  />
                </div>
              </fieldset>
              <fieldset>
                <span className="footnote_ts">delete account</span>
                <button type="submit" disabled={globalState.pending}>
                  submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section`
  .blob {
    position: absolute;
  }
`;
