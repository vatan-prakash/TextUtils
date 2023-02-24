 import React, { useEffect, useState } from 'react'
 export default function Textform(props){

 
  const [btntext, setbtntext]=useState("Enable Dark Mode");
  
  const [char,setChar] = useState(0);
 

  const togglestyle=()=>{
    if(props.mystyle.color=='white'){
      props.setmystyle({ color:'black',
      backgroundColor:'white'
    })
    setbtntext('Enter Dark Mode')
  }
    else{
      
        props.setmystyle({ color:'white',
        backgroundColor:'black'
    })
    setbtntext('Enter Light Mode')
  }
  }
const handleupclick=()=>{
  let newtext=text.toUpperCase();
  setText(newtext);
}
const handleonchange=(event)=>{
  setText(event.target.value)
}
const handleoclick=()=>{
let newtext=text.toLowerCase();
setText(newtext);
}
const [count,setCount] = useState(0)
const[text, setText]=useState('  ');

// function handleInputChange(event) {
//   setText(event.target.value);
//   // Split the input value by whitespace characters and filter out any empty strings
//   const words = event.target.value.split(/\s+/).filter((word) => word !== "");
//   setCount(words.length);
// }
useEffect(()=>{
   let i = 0;
   const n = text.length;
   let ans = 0;
   let res = 0;
   while(i<n){
     while(i<n && text[i] != ' '){
      i++;
      res++;
     }
     if(i != 0) ans++;
     while(i < n && text[i] == ' '){
      i++;
     }
   }
   setCount(ans)
   setChar(res)
},[text])

// const handledelete=()=>{
//   let del=;
//   setText(clear);
// }
const handlecopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleoclear=()=>{
        let clear=' ';
        setText(clear);
}









   return(
    <>
    <div className='container' style={props.mystyle}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox"className="form-label">Email address</label> */}
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark '?'grey':'white' , color:props.mode==='dark '?'white':'black'}} id="myBox" rows="6" cols="5"></textarea>
  
  {/* <textarea className="form-control" value={text} onChange={handlefindChange}  id="myBox" rows="3"></textarea> */}
  
 
  </div>
  {/* <div> */}
  {/* <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>Replace word</button> */}
  <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleoclick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleoclear}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
  
  <div className='container my-3' >
    <button onClick={togglestyle}  type='button' className="btn btn-primary mx-2">{btntext}</button>
  </div>
  {/* <button className="btn btn-primary mx-2" onClick={handledelete}>Delete</button> */}
  
  {/* <input type="email" className="form-control" id="myBox" placeholder="name@example.com"/> */}

{/* /</div> */}


  {/* </div> */}
</div>
    <div className="container my-3" style={props.mystyle}>
<h1>   Your text summary</h1>
<p>  {count} words and {char} characters</p>
    <p>{0.008 * text.split("").length} Minutes to read the text</p>
    <h2>Preview</h2>
    <p>{text}</p>
   

    </div>
    
    
    </>
   ) 

   }
//  export default Textform;