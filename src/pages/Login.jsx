import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginScreen } from "../assets/svgs";

export const Login = () => {
  return (
    <Page>
      <div className="row graphic">
        <div className="top-control">
          <LoginScreen />
        </div>
      </div>
      <div className="row form">
        <div className="top-control">
          <form>
            <h2 className="h2-bold">Login</h2>
            {/* <p>
              Need a Blog account? <span>Sign Up</span>
            </p> */}
            {/* <p>
              Sign up to discover thousands of articles on Blog. Read articles
              and write custom stories in seconds. Try Blog for free today!
            </p>  */}
            <fieldset>
              <div className="panel">
                <label htmlFor="username">username</label>
                <input type="text" id="username" />
              </div>
              <div className="panel">
                <label htmlFor="email">email</label>
                <input type="email" id="email" />
              </div>
              <div className="panel">
                <label htmlFor="password">password</label>
                <input type="password" id="password" />
              </div>
            </fieldset>
            <fieldset>
              <button className="user-submit">Sign in</button>
              <div>
                <span className="footnote_ts">Need an account? </span>
                <Link className="footnote_ts">Sign up.</Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </Page>
  );
};

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
    flex-direction: row;
    /* gap: var(--vspace-1); */
    justify-content: space-evenly;
    .row {
      &.graphic {
        .top-control {
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          gap: var(--vspace-2);
          svg {
            max-height: 600px;
            height: 600px;
          }
        }
      }
      &.form {
        justify-content: flex-start;
      }
    }
  }
`;
