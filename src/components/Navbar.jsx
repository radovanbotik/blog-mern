import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="top-control">
        <div className="logo">
          <h1 className="h1-bold">blog</h1>
        </div>
        <ul className="horizontal">
          <li>
            <a href="/">home</a>
            <span className="material-symbols-outlined">home</span>
          </li>
          <li>
            <a href="/">about</a>
            <span className="material-symbols-outlined">groups</span>
          </li>
          {/* <li>
            <a href="/">contact</a>
            <span className="material-symbols-outlined">info</span>
          </li> */}
          <li>
            <a href="/">write</a>
            <span className="material-symbols-outlined">edit_note</span>
          </li>
          <li>
            <a href="/">login</a>
            <span className="material-symbols-outlined">login</span>
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
        grid-column: span 1;
        justify-content: flex-end;
        a {
          font-weight: 400;
          font-size: var(--size-100);
          text-transform: uppercase;
        }
        /* padding-right: 1ex; */
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
