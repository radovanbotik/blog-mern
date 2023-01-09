import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Welcoming } from "../assets/svgs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const sendData = async () => {
    setError(false);
    try {
      const resp = await axios.post("api/auth/register", userData);
      if (resp) {
        navigate("/login");
      } else {
        throw new Error("No response from server.");
      }
    } catch (error) {
      console.log(
        error,
        "Unable to register an user. User might already be registered or credentials werent handled correctly."
      );
      setError(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendData();
  };
  const formRef = useRef();

  useLayoutEffect(() => {
    console.log(formRef);
    const dots_top = [...document.querySelectorAll("svg g#dots_top .dot")];
    const dots_left = [...document.querySelectorAll("svg g#dots_left .dot")];
    const dots_right = [...document.querySelectorAll("svg g#dots_right .dot")];

    const animation = gsap
      .timeline()
      .fromTo(
        dots_top,
        { x: "200px", y: "50px", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          repeat: 1,
          repeatDelay: 0.2,
          repeatRefresh: 1,
          // yoyoEase: "back",
          stagger: 0.2,
          ease: "Power1.easeOut",
          duration: 1,
        },
        1
      )
      .fromTo(
        dots_right,
        { x: "200px", y: "100px", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          repeat: 1,
          repeatDelay: 0.2,
          repeatRefresh: 1,
          // yoyoEase: "back",
          stagger: 0.2,
          ease: "Power1.easeOut",
          duration: 1,
        },
        0.5
      )
      .fromTo(
        dots_left,
        { x: "200px", y: "150px", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          repeat: 1,
          repeatDelay: 0.2,
          repeatRefresh: 1,
          // yoyoEase: "back",
          stagger: 0.2,
          ease: "Power1.easeOut",
          duration: 1,
        },
        1
      )
      .fromTo(
        "#whole_body",

        { y: "0px", transformOrigin: "0% 100%", ease: "back" },
        {
          y: "10px",
          repeat: 1,
          yoyo: true,
          repeatDelay: 0.5,
          ease: "back",
        },
        0
      )
      .to(
        "#tree",
        {
          rotate: "5deg",
          transformOrigin: "50% 100%",
          duration: 2,
          repeatDelay: 1,
          repeat: 1,
          yoyo: true,
        },

        0
      );
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
              <Welcoming />
            </div>
          </div>
          <div className="row form" ref={formRef}>
            <div className="top-control">
              <form onSubmit={handleSubmit}>
                <h2 className="h2-bold">Sign up</h2>
                {/* <p>
              Need a Blog account? <span>Sign Up</span>
            </p> */}
                <p>
                  Sign up to discover thousands of articles on Blog. Read
                  articles and write custom stories in seconds. Try Blog for
                  free today!
                </p>
                <fieldset>
                  <div className="panel">
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      value={userData.username}
                    />
                  </div>
                  <div className="panel">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={userData.email}
                    />
                  </div>
                  <div className="panel">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={userData.password}
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <button className="user-submit" type="submit">
                    Create an Account
                  </button>
                  <div>
                    {error && (
                      <p className="endnote_ts" style={{ color: "tomato" }}>
                        Incorrect credentials. Please fill out all the fields in
                        the correct format and try again.
                      </p>
                    )}
                    <span className="footnote_ts">Member already? </span>
                    <Link to="/login" className="footnote_ts underline">
                      Sign in.
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
