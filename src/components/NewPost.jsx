import React from "react";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";

export const NewPost = () => {
  const [textArea, setTextArea] = useState("");

  useLayoutEffect(() => {
    const txHeight = 160;
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
  }, [textArea]);

  return (
    <Wrapper>
      <div className="top-control">
        <form>
          <fieldset className="user-inputs">
            <legend>
              <h3>Create a new post</h3>
            </legend>
            <div className="input-panel">
              <label htmlFor="fileinput">attachments</label>
              <input type="file" id="fileinput" />
            </div>
            <div className="input-panel">
              <label htmlFor="title">
                <h4>title</h4>
              </label>
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
              <h3>The story</h3>
            </legend>
            <div className="input-panel">
              <label htmlFor="story">
                <h4>story</h4>
              </label>
              <textarea
                name=""
                id="story"
                placeholder="your story.."
                value={textArea}
                onChange={e => setTextArea(e.target.value)}
              ></textarea>
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
  display: grid;
  place-content: center;
  .top-control {
    width: 100%;
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
          h3 {
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
            height: var(--size-700);
            text-indent: 0.5ex;
          }
          textarea {
            border-radius: 4px;
            border: 0;
            text-indent: 0.5ex;
            min-height: 200px;
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
