import React, { useState } from "react";

function Form(props) {
  const handleUpClick = () => {
    console.log("On CLick" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!","success");
  };
  const handleLwClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!","success");

  };
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text has been cleared!","success");

  }; 
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied!","success");

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces cleared!","success");

  
  };  
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
 


  const [text, setText] = useState("Enter text here");
  // setText('New text');

  return (
    <>
      <div>
        <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
          <div className="mb-2">
            <h2>{props.heading}</h2>
            <textarea
              className="form-control"
              placeholder={text}
              onChange={handleOnChange}
              id="myBox"
              rows="5"
              style={{
                backgroundColor: props.mode === 'light' ? '#bfcad6' : 'light',
                color: props.mode === 'dark' ? 'white' : 'black'
              }}
            ></textarea>
          </div>
          <div className="mb2">
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLwClick}>
              Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
              Clear text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>
              Copy text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
              Remove Extra Spaces
            </button>
          </div>
          <div className="my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>
              {text.split(" ").length} words and {text.length} characters.
            </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
