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
              <label htmlFor="title">
                <h6 className="endnote_ts">title</h6>
              </label>
              <input
                type="text"
                id="title"
                placeholder="title"
                autoFocus={true}
              />
            </div>
            <div className="input-panel file-input">
              <label htmlFor="fileinput">
                <p className="footnote_ts">
                  <span class="material-symbols-outlined">add_circle</span>
                  Attach an image
                </p>
              </label>
              <input type="file" id="fileinput" style={{ display: "none" }} />
            </div>
          </fieldset>
          <fieldset className="user-story">
            <legend>
              <h4>The story</h4>
            </legend>
            <div className="input-panel">
              <label htmlFor="story">
                <h6 className="endnote_ts">story</h6>
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
          <fieldset>
            <button>publish</button>
          </fieldset>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  /* max-width: 800px; */
  margin: 0 auto;
  display: grid;
  align-items: center;
  /* justify-content: stretch; */
  /* place-content: center; */
  .top-control {
    width: 100%;
    /* background-color: tomato; */
    border-radius: 4px;

    form {
      /* background-color: gold; */
      border-radius: 2px;

      display: flex;
      flex-direction: column;
      gap: var(--vspace-3);
      padding: calc(var(--vspace-3) / 2);
      fieldset {
        padding: calc(var(--vspace-3)) 0;
        appearance: none;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        /* border-radius: 8px; */
        display: flex;
        flex-direction: column;
        gap: var(--vspace-3);
        legend {
          h4 {
            /* margin-left: 1ex; */
            margin-right: 2ex;
            /* padding-bottom: var(--vspace-2); */
          }
        }
        .input-panel {
          display: flex;
          flex-direction: column;

          label {
            cursor: pointer;
            p {
              display: flex;
              align-items: center;
              gap: 0.75ex;
              span {
                font-size: inherit;
              }
            }
          }
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
        .input-panel.file-input {
          align-self: flex-end;
          justify-self: flex-end;
        }
      }
      fieldset:last-child {
        border: 0;
      }
      button {
        /* align-self: flex-end; */
        height: var(--size-700);

        /* width: var(--vspace-0); */
      }
    }
  }
`;
