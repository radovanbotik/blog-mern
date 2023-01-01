import React from "react";
import styled from "styled-components";

export const NewPost = () => {
  const txHeight = 16;
  const tx = document.getElementsByTagName("textarea");

  for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == "") {
      tx[i].setAttribute(
        "style",
        "height:" + txHeight + "px;overflow-y:hidden;"
      );
    } else {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
    }
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput(e) {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  return (
    <Wrapper>
      <div className="top-control">
        <form>
          <fieldset className="user-inputs">
            <legend>
              <span>Create a new post</span>
            </legend>
            <div className="input-panel">
              <label htmlFor="fileinput">attachments</label>
              <input type="file" id="fileinput" />
            </div>
            <div className="input-panel">
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                placeholder="title"
                autoFocus={true}
              />
            </div>
          </fieldset>
          <fieldset className="user-story">
            <legend>
              <span>The story</span>
            </legend>
            <div className="input-panel">
              <textarea name="" id="" placeholder="your story.."></textarea>
            </div>
          </fieldset>
          <button>publish</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  .top-control {
    height: 100%;
    width: 100%;
    /* display: grid;
    place-content: center; */
    background-color: tomato;

    form {
      background-color: gold;
      display: flex;
      flex-direction: column;
      gap: var(--vspace-3);
      padding: var(--vspace-3);
      fieldset {
        padding: calc(var(--vspace-3) / 2);
        appearance: none;
        border: 1px solid black;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: var(--vspace-3);
        legend {
          span {
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            margin-left: 1ex;
            margin-right: 2ex;
          }
        }
        .input-panel {
          display: flex;
          flex-direction: column;
          input {
            border-radius: 4px;
            border: 0;
            height: var(--size-600);
            text-indent: 0.5ex;
          }
          textarea {
            border-radius: 4px;
            border: 0;
            text-indent: 0.5ex;
            /* min-height: 200px; */
          }
        }
      }
      button {
        /* align-self: flex-end; */
        height: var(--size-700);
        /* width: var(--vspace-0); */
      }
    }
  }
`;
