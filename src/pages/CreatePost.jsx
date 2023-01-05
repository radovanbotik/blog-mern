import React from "react";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { ImageUpload } from "../assets/svgs";
import { Blob } from "../assets/svgs";

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
    <Page className="section-layout">
      {/* <h2 className="h2-bold section-title">Speak your mind</h2> */}
      <div className="wrap">
        <h2 className="h2-bold section-title">Speak your mind.</h2>
        <div className="row graphic">
          <div className="top-control">
            <ImageUpload />
            {/* <div className="blob blob1">
              <Blob />
            </div> */}
          </div>
        </div>
        <div className="row form">
          <div className="top-control">
            <form>
              {/* <h2 className="h2-bold">Speak your mind.</h2> */}
              <h2 className="h2-bold">Let the world know</h2>

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
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                  </label>
                  <input
                    type="file"
                    id="fileinput"
                    style={{ display: "none" }}
                  />
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
            {/* <div className="blob blob2">
              <Blob />
            </div> */}
          </div>
        </div>
      </div>
    </Page>
  );
};

const Page = styled.section`
  /* background-color: gold; */

  .blob {
    position: absolute;
    width: max(150px, 15%);
  }
  .blob1 {
    top: max(120px, 18%);
    /* left: min(200px, 20%); */
    left: 50%;
    transform: rotate(180deg);
  }
  .blob2 {
    top: 0%;
    right: 5%;
  }
`;
