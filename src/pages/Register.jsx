import React from "react";
import styled from "styled-components";
import { TextFieldSVG } from "../assets/svgs/TextFieldSVG";
import me from "../assets/me.jpg";
import mobile from "../assets/svgs/Mobile-login.png";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Page>
      <div className="row form">
        <div className="login">
          <div className="top-control">
            <form>
              <h2 className="h2-bold">sign up</h2>
              {/* <p>
              Need a Blog account? <span>Sign Up</span>
            </p> */}
              <p>
                Sign up to discover thousands of articles on Blog. Read articles
                and write custom stories in seconds. Try Blog for free today!
              </p>
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
                <button className="user-submit">Create an Account</button>
                <div>
                  <span className="footnote_ts">Member already? </span>
                  <Link className="footnote_ts">Sign in.</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <div className="row graphic">
        <div className="image">
          <TextFieldSVG />
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
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  /* place-content: center; */
  flex-wrap: wrap;
  .row {
    flex: 1;
    display: grid;
    /* place-content: center; */
    &.form {
    }
    &.graphic {
      max-width: 420px;
      svg {
        max-height: 200px;
      }
    }
    .login {
      /* background-color: #e6dfdf; */
      max-width: 420px;
      .top-control {
        display: flex;
        flex-direction: column;
        gap: var(--vspace-2);
      }
    }
    .image {
      padding: 0;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
      img {
        object-fit: contain;
        object-fit: cover;
      }
    }
  }
  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: var(--vspace-1);
    .row {
      flex: 1;
      &.form {
        /* place-content: start; */
        justify-content: flex-start;
      }
      &.graphic {
        /* place-content: end; */
        justify-content: flex-end;
        max-width: 420px;
        svg {
          max-height: none;
        }
      }
    }
  }
`;
