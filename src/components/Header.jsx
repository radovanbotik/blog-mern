import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";

export const Header = () => {
  return (
    <Wrapper>
      <div className="top-control">
        <div className="titles">
          <h1>The Blog</h1>
          <h3>lets write</h3>
        </div>
        <div className="image">
          <img src={me} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: tomato; */
  width: 100%;

  .top-control {
    grid-column: 2/3;
    height: inherit;
    width: inherit;
    display: flex;
    flex-direction: column;
    gap: var(--vspace-3);

    .titles {
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--vspace-3);
      h3 {
        /* transform: translateY(25px); */
      }
    }
    .image {
      height: 300px;
      overflow: hidden;
    }
  }
`;
