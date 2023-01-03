import React from "react";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { ImageUpload } from "../assets/svgs";

export const CreatePost = () => {
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
    <Page>
      <div className="row graphic">
        <div className="top-control">
          <h2 className="h2-bold">Speak your mind.</h2>
          <ImageUpload />
        </div>
      </div>
      <div className="row form">
        <div className="top-control">
          <form>
            {/* <h2 className="h2-bold">Speak your mind.</h2> */}
            <h2 className="h2-bold">let the world know.</h2>

            <p>
              Join the community of active writers.
              <br /> Write, read and share your stories with ease.
            </p>
            <fieldset className="user-inputs">
              {/* <legend>Create a new post</legend> */}
              <div className="panel">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  // autoFocus={true}
                />
              </div>
              <div className="panel file-input">
                <label htmlFor="fileinput" className="footnote_ts">
                  <span>Attach an image</span>
                  <span class="material-symbols-outlined">add_circle</span>
                </label>
                <input type="file" id="fileinput" style={{ display: "none" }} />
              </div>
            </fieldset>
            <fieldset className="user-story">
              <legend>The story</legend>
              <div className="panel">
                <label htmlFor="story">
                  <h6 className="endnote_ts">story</h6>
                </label>
                <textarea
                  name=""
                  id="story"
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
      </div>
    </Page>
  );
};

const Page = styled.section`
  & > * {
    padding: var(--vspace-3) 0;
    margin: 0;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .row {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.graphic {
      .top-control {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        h2 {
          white-space: nowrap;
        }
      }
      svg {
        height: 100px;
        width: 100%;
      }
    }
    &.form {
      & > * {
        width: 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    /* & > * {
      padding: var(--vspace-3);
      margin-top: var(--vspace-1);
    } */
    .row {
      &.graphic {
        .top-control {
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          gap: var(--vspace-2);
        }
        svg {
          height: auto;
          max-height: 600px;
          height: 600px;
        }
      }
    }
  }
`;
