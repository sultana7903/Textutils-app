import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitalize firstLetter!", "success");
   }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra Spaces!", "success");
    }

    

    const [text, setText] = useState('');
    //text = "new text";    //wrong way tko change the state
    //setText("new state");     //correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode===`dark`? `white`:`#042743`}}>
     <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`? `#042743`:`white`, color: props.mode===`dark`? `white`:`#042743`}} id="myBox" rows="7"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalized Text</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Space</button>
     
    </div>
    <div className="container my-3" style={{color: props.mode===`dark`? `white`:`#042743`}}>
        <h2>Your text summery</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.trim().length===0 ? 0:text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
    </div>
    </>
  );
}



// word Count	   Slow (125 wpm)	 Average (300 wpm)	   Fast (450 wpm)
// 125 words	   1 minutes	     0.4 minutes	       0.3 minutes
// 250 words	   2 minutes	     0.8 minutes	       0.6 minutes