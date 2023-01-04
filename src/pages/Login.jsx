import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginScreen } from "../assets/svgs";

export const Login = () => {
  return (
    <Page className="section-layout">
      <div className="wrap">
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
      </div>
    </Page>
  );
};

const Page = styled.section``;
