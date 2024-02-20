import React, { useState } from "react";

export default function Textform(props) {
  const OnUpClick = () => {
    let newText = text.toUpperCase();
    setText1(newText);
  };

  const OnLoClick = () => {
    let newText = text.toLowerCase();
    setText1(newText);
  };

  // ALERT
  const [alert, setAlert] = useState(false);
  const OnClClick = () => {
    if (text.length === 0) {
      setAlert(true);
    }
    setText("");
  };
  const dis = () => {
    setAlert(false);
  };

  const check = () => {
    let newText = "lol";
    setText1(newText);
  };

  const onUphandle = (event) => {
    // this setText function will update the "text" in textarea
    setText(event.target.value);
  };
  const [textb, setText1] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      {/* Alert */}

      <div>
        {alert && (
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Empty!</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={dis}
            ></button>
          </div>
        )}
      </div>
      <div className="container mb-3" style={props.myStyle}>
        <h1 style={props.myStyle}>Enter a text ...</h1>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            rows={5}
            // when you set a text it will always be there and you can't update it
            value={text}
            // event listener
            // over here when you change the text it will trigger the function "onUphandle"
            onChange={onUphandle}
            style={props.myStyle}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={OnUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          // onClick and onRelease kinda thing basiclly
          onMouseDown={check}
          onMouseUp={OnLoClick}
        >
          Convert to Lowercase
        </button>

        <button type="button" className="btn btn-primary" onClick={OnClClick}>
          Clear
        </button>
        <h1>Your text summary :</h1>
        <p>{text.length} characters</p>
        <p>{text.split(" ").length} words</p>
        <h1>Preview : </h1>
        <p>{textb.length === 0 ? "Enter something" : textb}</p>
      </div>
    </>
  );
}
