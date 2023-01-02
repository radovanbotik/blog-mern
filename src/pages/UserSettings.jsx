import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";

export const UserSettings = () => {
  return (
    <Page>
      <div className="settings">
        <div className="top-control">
          <h3>Account settings</h3>
          <form>
            <h3>basic info</h3>
            <fieldset className="user-picture">
              <legend>profile picture</legend>
              <div className="panel">
                <div className="image-control">
                  <img src={me} alt="" />
                </div>
                <label htmlFor="profilePicture">
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
                <input type="text" id="user_name" placeholder="username" />
              </div>
              <div className="panel">
                <label htmlFor="user_email">
                  <span>your email</span>
                </label>
                <input type="email" id="user_email" placeholder="email" />
              </div>
              <div className="panel">
                <label htmlFor="user_password">
                  <span>your password</span>
                </label>
                <input
                  type="password"
                  id="user_password"
                  placeholder="*******"
                />
              </div>
            </fieldset>
            <fieldset>
              <span className="footnote_ts">delete account</span>
              <button>submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section`
  & > * {
    padding: var(--vspace-3);
    margin-top: var(--vspace-1);
  }
  display: grid;
  grid-template-columns: min(100%, 70ch) auto;
  .settings {
    .top-control {
      display: flex;
      flex-direction: column;
      gap: var(--vspace-2);

      form {
        fieldset.user-picture {
          .panel {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: baseline;
            gap: 2ex;
            .image-control {
              height: 96px;
              width: 96px;
              border-radius: 4px;
              clip-path: circle();
              overflow: hidden;
              /* margin-right: auto; */
            }
            label {
              display: flex;
              align-items: center;
              gap: 1ex;
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  }
`;
