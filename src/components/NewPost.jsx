import React from "react";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import me from "../assets/me.jpg";

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
            <legend>Create a new post</legend>
            <div className="panel">
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                placeholder="title"
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
        <div className="image-preview">
          <img src={me} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  .top-control {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--vspace-2);
    form {
      order: 2;
      fieldset {
        .panel.file-input {
          align-self: flex-end;
          justify-self: flex-end;
        }
      }
    }
    .image-preview {
      max-height: 600px;
      order: 1;
    }
  }
  @media (min-width: 900px) {
    .top-control {
      grid-template-columns: auto min(100%, 70ch);
      form {
        order: 2;
      }
      .image-preview {
        order: 1;
      }
    }
  }
`;
