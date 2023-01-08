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
  return (
    <Navigation>
      <div className="top-control">
        <Link to="/" className="logo">
          <h2 className="h2-bold">blog.</h2>
        </Link>
        {user && (
          <ul className="horizontal user-in">
            <li>
              <Link to="/" className="link-button">
                <span>home</span>
                <span className="material-symbols-outlined icon">home</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="link-button">
                <span>profile</span>
                <span className="material-symbols-outlined icon">
                  account_circle
                </span>
              </Link>
            </li>
            <li>
              <Link to="/create-post" className="link-button">
                <span>write</span>
                <span className="material-symbols-outlined icon">
                  edit_note
                </span>
              </Link>
            </li>
            {user && (
              <li onClick={handleLogout}>
                <Link className="link-button">
                  <span>log out</span>
                  <span className="material-symbols-outlined icon">login</span>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link>
                  <div className="profile-avatar">
                    {user?.profilePicture !== "" ? (
                      <img src={user.profilePicture} alt="profile picture" />
                    ) : (
                      <ProfileAvatar />
                    )}
                  </div>
                </Link>
              </li>
            )}
          </ul>
        )}
        {!user && (
          <ul className="horizontal user-out">
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
        )}
      </div>
    </Navigation>
  );
};

const Navigation = styled.nav`
  min-height: 80px;
  width: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
  .top-control {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: var(--vspace-3);
    .logo {
      display: block;
      display: grid;
      h3 {
        margin: 0;
      }
    }
    ul.horizontal {
      float: left;
      align-items: center;
      gap: 1ex;
      li {
        .profile-avatar {
          border-radius: 50%;
          border: 1px solid black;
          height: 32px;
          width: 32px;
          img {
            height: 100%;
            width: 100%;
          }
          svg {
            height: 100%;
            width: 100%;
          }
        }
      }
      li:hover {
        .icon {
          font-variation-settings: "FILL" 1;
        }
      }
      li:active {
        .icon {
          font-variation-settings: "FILL" 1, "wght" 300;
        }
      }
    }
  }
  @media (min-width: 600px) {
    .top-control {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .logo {
        h1 {
          font-size: var(--size-700);
        }
      }
      ul.horizontal {
        flex-direction: row;
        float: right;
      }
    }
  }
`;
