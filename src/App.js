//import './App.css';
// import React from 'react';
import Abouts from './Components/Abouts';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState,useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";





function App(){


   
    const[mode, setmode]=useState('dark');
    const togglemode=()=>{
        if(mode==='light'){
            setmode('dark');
            document.title='Textutils-Dark Mode';
        }
        else{
            setmode('light');
            document.title='Textutils-Light Mode';
        }
    }
    const [mystyle, setmystyle]=useState({
        color:"white",
        backgroundColor:"black"
        
        })
      
        useEffect(()=>{
           if(mode != 'dark') setmystyle({color:'black',backgroundColor:'white'})
           else setmystyle({
            color:"white",
            backgroundColor:"black"
            })
        },[mode])

    return (
        <>
        <div style={{...mystyle,minHeight:'100vh'}}>
     <Router> 
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <Routes>
          <Route path="/" element={
          <Textform heading="Enter the text to analyze" mode={mode} mystyle={mystyle} setmystyle={setmystyle} />} />
          <Route path="/about" element={<Abouts/>} />
    </Routes>
         </div>
</Router>  
    
    </div>
    
    </>
     );
    }
export default App;