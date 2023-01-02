import React from "react";
import styled from "styled-components";

export const Register = () => {
  return (
    <Page>
      <div className="login">
        <div className="top-control">
          <form>
            <h3>register</h3>
            <fieldset>
              <div className="panel">
                <label htmlFor="username">username</label>
                <input type="text" id="username" placeholder="username" />
              </div>
              <div className="panel">
                <label htmlFor="email">email</label>
                <input type="email" id="email" placeholder="email" />
              </div>
              <div className="panel">
                <label htmlFor="password">password</label>
                <input type="password" id="password" placeholder="password" />
              </div>
            </fieldset>
            <fieldset>
              <button className="user-submit">register</button>
              <p className="endnote_ts">Member already? log in.</p>
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
  .login {
    .top-control {
      display: flex;
      flex-direction: column;
      gap: var(--vspace-2);
    }
  }
`;
