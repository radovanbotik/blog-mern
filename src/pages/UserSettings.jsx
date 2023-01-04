import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../assets/svgs";
import { ProfileAvatar } from "../assets/svgs";

export const UserSettings = () => {
  return (
    <Page className="section-layout">
      <h2 className="h2-bold section-title">Account settings</h2>
      <div className="wrap">
        <div className="row graphic">
          <div className="top-control">
            {/* <h2 className="h2-bold">Account settings</h2> */}
            <ProfileDetails />
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <form>
              <h2 className="h2-bold center">Your details</h2>
              <fieldset className="user-picture">
                <legend className="center">profile picture</legend>
                <div className="panel">
                  <div className="image-control center">
                    {/* <img src={me} alt="" /> */}
                    <ProfileAvatar />
                  </div>
                  <label htmlFor="profilePicture" className="center">
                    <span className="material-symbols-outlined">image</span>
                    <span>update your picture</span>
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    style={{ display: "none" }}
                  />
                </div>
              </fieldset>
              <fieldset className="user-data">
                <legend>account details</legend>
                <div className="panel">
                  <label htmlFor="user_name">
                    <span> your username</span>
                  </label>
                  <input type="text" id="user_name" />
                </div>
                <div className="panel">
                  <label htmlFor="user_email">
                    <span>your email</span>
                  </label>
                  <input type="email" id="user_email" />
                </div>
                <div className="panel">
                  <label htmlFor="user_password">
                    <span>your password</span>
                  </label>
                  <input type="password" id="user_password" />
                </div>
              </fieldset>
              <fieldset>
                <span className="footnote_ts">delete account</span>
                <button>submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section``;
