import React from "react";
import styled from "styled-components";
import { Welcoming } from "../assets/svgs";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Page className="section-layout reverse">
      <div className="wrap">
        <div className="row graphic">
          <div className="top-control">
            <Welcoming />
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <form>
              <h2 className="h2-bold">Sign up</h2>
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
    </Page>
  );
};

const Page = styled.section``;
