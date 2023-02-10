import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleOnchange=(event)=>{
       setText(event.target.value);
    // console.log("onchange triggered");
    }
    const handleOnClick = (event)=>{
    //  console.log("Hey u clicked");
     let newtext=text.toUpperCase();
     setText(newtext);
     props.showAlert("converted to upper case","success");
    }
    const [text,setText]=useState("");
    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.text}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
            <button className="btn btn-primary" onClick={handleOnClick}>UpperCase</button>
            
            </div>
            <div className="container">
                <h1>Summary Of Your Text</h1>
                <p>{text.split(' ').length} words and {text.length} charecters</p>
                <p>{0.008*text.split(' ').length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            </div>
    )
}
