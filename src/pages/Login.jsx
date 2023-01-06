import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginScreen } from "../assets/svgs";
import { useBlogData } from "../context/BlogContext";
import axios from "axios";

export const Login = () => {
  const { handleLogin, handleLoginSuccess, handleLoginFailure } = useBlogData();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  ///Fetch Logic
  const fetchData = async () => {
    const resp = await axios.post("/api/auth/login", userData);
    if (resp.data) {
      handleLoginSuccess(resp.data);
    } else {
      handleLoginFailure();
    }
  };

  ///Form Handling
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin();
    try {
      fetchData();
    } catch (error) {
      handleLoginFailure();
    }
  };

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
            <form onSubmit={handleSubmit}>
              <h2 className="h2-bold">Login</h2>
              <fieldset>
                <div className="panel">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div>
                <div className="panel">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div>
                <div className="panel">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div>
              </fieldset>
              <fieldset>
                <button className="user-submit" type="submit">
                  Sign in
                </button>
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
