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
    <Wrapper>
      <div className="top-control">
        <Link to="/" className="logo">
          <h3 className="h2-bold">blog</h3>
        </Link>
        <ul className="horizontal">
          <li>
            <Link to="/">
              <span>home</span>
              <span className="material-symbols-outlined icon">home</span>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <span>profile</span>
              <span className="material-symbols-outlined icon">groups</span>
            </Link>
          </li>

          <li>
            <Link to="/create-post">
              <span>write</span>
              <span className="material-symbols-outlined icon">edit_note</span>
            </Link>
          </li>
          {user && (
            <li onClick={handleLogout}>
              <Link>
                <span>log out</span>
                <span className="material-symbols-outlined icon">login</span>
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link>
                <div className="profile-avatar">
                  {user?.profilePicture ? (
                    <img src={user.profilePicture} alt="profile picture" />
                  ) : (
                    <ProfileAvatar />
                  )}
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-height: 80px;
  width: 100%;
  /* padding: 1em 1em 0.5em; */
  /* padding: 0em 1em; */
  /* position: sticky; */
  top: 0;
  /* background-color: var(--white-main); */
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--vspace-2);
  .top-control {
    flex: 1;
    align-self: flex-end;
    flex-wrap: wrap;
    gap: var(--vspace-3);
    align-items: baseline;
    /* justify-content: space-between; */
    .logo {
      /* display: inline-block; */
      display: block;
      height: 100%;
    }
    ul.horizontal {
      float: left;
      //column by default
      //break at 600px
      /* flex-direction: column; */
      /* margin-right: 2ex; */
      align-items: center;
      gap: 2.5ex;
      li {
        justify-content: flex-end;
        a,
        button {
          border: 0;
          font-weight: 400;
          font-size: var(--size-100);
          text-transform: uppercase;
          /* height: inherit; */
          .profile-avatar {
            height: 36px;
            width: 36px;
            /* height: var(--size-500); */
            /* width: var(--size-500); */
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
