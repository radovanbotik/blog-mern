import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
          {/* <li>
            <button>
              <span>log out</span>
              <span className="material-symbols-outlined">login</span>
            </button>
          </li> */}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-height: 80px;
  width: 100%;
  /* padding: 1em 1em 0.5em; */
  padding: 0em 1em;
  /* position: sticky; */
  top: 0;
  background-color: var(--white-main);
  display: flex;
  flex-wrap: wrap;
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
