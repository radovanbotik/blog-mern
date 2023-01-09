import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginScreen } from "../assets/svgs";
import { useBlogData } from "../context/BlogContext";
import gsap from "gsap";
import axios from "axios";

export const Login = () => {
  const { handleLogin, handleLoginSuccess, handleLoginFailure, globalState } =
    useBlogData();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const formRef = useRef();

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

  useLayoutEffect(() => {
    const animation = gsap
      .timeline()
      .fromTo(
        "#arm_left",
        {
          rotate: "-20deg",
          transformOrigin: "100% 0%",
          duration: 1,
        },
        {
          rotate: "0deg",
        }
      )
      .fromTo(
        "#arm_right",
        {
          x: "-2px",
          duration: 2,
        },
        {
          x: 0,
        }
      )
      .fromTo(
        "#room",
        { fill: "white" },
        { fill: "black", duration: 1, ease: "Power2.easeOut" }
      )
      .fromTo("#window_frame", { fill: "white" }, { fill: "grey" }, "<");

    const content_animation = gsap
      .timeline()
      .fromTo(
        formRef.current,
        { x: "10%" },
        { x: "0%", ease: "Bounce.easeOut", duration: 2 }
      );
  }, []);

  return (
    <Page className="section-layout">
      <section>
        <div className="wrap">
          <div className="row graphic">
            <div className="top-control">
              <LoginScreen />
            </div>
          </div>
          <div className="row form" ref={formRef}>
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
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="panel">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div> */}
                  <div className="panel">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <button
                    className="user-submit"
                    type="submit"
                    disabled={globalState.pending}
                  >
                    Sign in
                  </button>
                  <div>
                    <span className="footnote_ts">Need an account? </span>
                    <Link to="/register" className="footnote_ts underline">
                      Sign up.
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

const Page = styled.main``;
