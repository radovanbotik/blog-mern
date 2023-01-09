import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Welcoming } from "../assets/svgs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  return (
    <Page className="section-layout">
      <section>
        <div className="wrap">
          <div className="row graphic">
            <div className="top-control">
              <Welcoming />
            </div>
          </div>
          <div className="row form">
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
