import React, { useState } from "react";
import "./App.css";
import firebase from "./firebase";
import UploadImg from "./UploadImg";


function Update({setNotify, notify}) {

    const [text, setText] = useState()

    

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{width:'75%'}}>
          <UploadImg/>
            <h1>
                <input type='text'  style={{fontSize:'2rem', padding:'15px', width:'100%'}} value={text} 
                
                onChange={(e)=>setText(e.target.value)} 
                
                />
            </h1>
            <button style={{padding:'20px 40px', fontSize:'2rem', fontWeight:900}}
            
              onClick={()=>{
                firebase.database().ref('/notifications').set(text)
                }}>
                  
                  Update
                  
            </button>
        </div>
      </header>
    </div>
  );
}

export default Update;
