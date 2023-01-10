import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBlogData } from "../context/BlogContext";
import { ProfileAvatar } from "../assets/svgs";

export const Navbar = () => {
  const {
    globalState: { user },
    handleLogout,
  } = useBlogData();
  console.log(user);
  let vh = window.innerHeight * 0.01;
  const publicFolder = "http://localhost:5000/images/";

  return (
    <Navigation>
      <Link to="/" className="logo">
        <h4>blog.</h4>
      </Link>
      {/* {user && (
        <ul className="link-list user-in">
          <li>
            <Link to="/" className="logo">
              <h4>blog.</h4>
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="link">
              <span>write</span>
            </Link>
          </li>
          <li>
            <Link to="/user" className="link">
              <span>profile</span>
            </Link>
          </li>
        </ul>
      )} */}
      {/* {user && (
        <ul className="link-list user-in">
          <li>
            <Link>
              <div className="profile-avatar">
                {user.profilePicture !== "" ? (
                  <img
                    src={publicFolder + user.profilePicture}
                    alt="profile picture"
                  />
                ) : (
                  <ProfileAvatar />
                )}
              </div>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link className="link">
              <span>log out</span>
              <span className="material-symbols-outlined icon">login</span>
            </Link>
          </li>
        </ul>
      )}
      {!user && (
        <ul className="user-out">
          <li>
            <Link to="/login" className="link-button">
              <span>login</span>
              <span className="material-symbols-outlined icon">login</span>
            </Link>
          </li>
          <li>
            <Link to="/register" className="link-button">
              <span>register</span>
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
            </Link>
          </li>
        </ul>
      )} */}
    </Navigation>
  );
};

const Navigation = styled.nav`
  min-height: 56px;
  width: 100%;
  max-width: calc(25 * var(--vspace-0));
  margin: 1em auto 0em;
  border-top: 24px solid var(--primary-2);
  /* border-bottom: 24px solid var(--primary-2); */
  /* padding: 0em 2em; */
  display: flex;
  justify-content: space-between;

  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* gap: var(--vspace-0); */

  a.logo {
    /* padding-right: 24px; */
    display: flex;
    align-items: end;
    align-items: center;
    h4 {
      font-size: var(--size-700);
      /* line-height: 1.2em; */
      text-transform: none;
    }
    h4:first-letter {
      /* color: red; */
      font-size: var(--size-700);
      font-family: var(--sofia);
    }
  }
  ul.link-list {
    height: 100%;
    display: flex;
    align-items: flex-end;
    min-height: inherit;
    gap: 4ex;
    li {
      line-height: 1.2em;
      /* display: flex; */
      align-items: end;
      align-items: center;
    }
  }
  /* ul.link-list.user-in:nth-of-type(1) {
      margin-right: auto;
    } */
  .profile-avatar {
    border-radius: 50%;
    border: 1px solid var(--primary-2);
    height: 32px;
    width: 32px;
    overflow: hidden;
    margin-bottom: 0.1em;

    img {
      height: 100%;
      width: 100%;
    }
    svg {
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    a.logo {
      display: flex;
      align-items: flex-end;
    }
    ul.link-list {
      align-self: flex-end;
    }
  }
`;
