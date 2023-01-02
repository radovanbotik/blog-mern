import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="top-control">
        <Link to="/" className="logo">
          <h1 className="h1-bold">blog</h1>
        </Link>
        <ul className="horizontal">
          <li>
            <Link to="/">
              <span>home</span>
              <span className="material-symbols-outlined">home</span>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <span>profile</span>
              <span className="material-symbols-outlined">groups</span>
            </Link>
          </li>

          <li>
            <Link to="/create-post">
              <span>write</span>
              <span className="material-symbols-outlined">edit_note</span>
            </Link>
          </li>
          <li>
            <button>
              <span>log out</span>
              <span className="material-symbols-outlined">login</span>
            </button>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-height: 80px;
  width: 100%;
  padding: 1em 1em 0.5em;
  position: sticky;
  top: 0;
  background-color: var(--white-main);
  //to place control on the bottom
  display: flex;
  flex-wrap: wrap;
  .top-control {
    //align-self trims div, flex 1 makes it take full width
    flex: 1;
    align-self: flex-end;
    //to align logo and links
    display: flex;
    flex-wrap: wrap;
    //column by default
    //break at 600px
    /* flex-direction: column; */
    gap: var(--vspace-3);
    align-items: baseline;
    justify-content: space-between;
    .logo {
      h1 {
        word-break: keep-all;
        font-size: var(--size-500);
      }
    }
    ul.horizontal {
      //column by default
      //break at 600px
      /* flex-direction: column; */
      gap: 2.5ex;
      li {
        justify-content: flex-end;
        a,
        button {
          border: 0;
          font-weight: 400;
          font-size: var(--size-100);
          text-transform: uppercase;
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
      }
    }
  }
`;
