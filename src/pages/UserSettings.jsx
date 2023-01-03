import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";
import { ProfileDetails } from "../assets/svgs";
import { ProfileAvatar } from "../assets/svgs";

export const UserSettings = () => {
  return (
    <Page>
      {/* <h2 className="h2-bold">Account settings</h2> */}
      <div className="row graphic">
        <div className="top-control">
          <h2 className="h2-bold">Account settings</h2>
          <ProfileDetails />
        </div>
      </div>
      <div className="row form">
        <div className="top-control">
          <form>
            <h2 className="h2-bold">basic info</h2>
            <fieldset className="user-picture">
              <legend>profile picture</legend>
              <div className="panel">
                <div className="image-control">
                  {/* <img src={me} alt="" /> */}
                  <ProfileAvatar />
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
    </Page>
  );
};

// const Page = styled.section`
//   & > * {
//     padding: var(--vspace-3);
//     margin-top: var(--vspace-1);
//   }
//   display: grid;
//   grid-template-columns: min(100%, 70ch) auto;
//   .settings {
//     .top-control {
//       display: flex;
//       flex-direction: column;
//       gap: var(--vspace-2);

//       form {
//         fieldset.user-picture {
//           .panel {
//             .image-control {
//               height: 96px;
//               width: 96px;
//               border-radius: 4px;
//               clip-path: circle();
//               overflow: hidden;
//             }
//           }
//         }
//       }
//     }
//   }
// `;
const Page = styled.section`
  & > * {
    padding: var(--vspace-3) 0;
    margin: 0;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .row {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.graphic {
      .top-control {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        h2 {
          white-space: nowrap;
        }
      }
      svg {
        height: 100px;
        width: 100%;
      }
    }
    &.form {
      & > * {
        width: 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    .row {
      &.graphic {
        .top-control {
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          gap: var(--vspace-2);
        }
        svg {
          max-height: 600px;
          height: 600px;
        }
      }
    }
  }
`;
