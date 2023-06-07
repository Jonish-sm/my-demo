import {useState}  from "react";
import React  from "react";





export default function Textform(props) {
  const handleUpClick = ()=>{
      let newText = text.toUpperCase();
       setText(newText);    
  };

  const handleUpClickCase = ()=>{
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
  }
  const handleClearClick = ()=>{
    let newTextClear ="";
    setText(newTextClear);
  }

  const handleCopyClick = ()=>{
  navigator.clipboard.writeText(text).then(()=>{
    window.alert("Text Copied")
  }).catch((error)=>{
    console.error('Text Not Copied')
  })
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3 my-3"  onClick={handleUpClickCase}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3 my-3"  onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3 my-3"  onClick={handleCopyClick}>Copy to clipboard</button>
    </div>

    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.08 * text.split(" ").length } Minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
