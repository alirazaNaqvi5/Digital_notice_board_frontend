import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import firebase from "./firebase";
import { storage } from "./firebase";

// let url = [];

function Notification() {
  const [notify, setNotify] = useState("");
  const [Images, setImages] = useState([]);

  useLayoutEffect(() => {
    firebase
      .database()
      .ref("/notifications")
      .on("value", (snapshot) => {
        let data = snapshot.val();

        //  Assigining Data to the state for Capacity , Queue and Sitting
        console.log("data=====>", data);
        setNotify(data);
      });

      firebase
      .database()
      .ref("/image")
      .on("value", (snapshot) => {
        let data = snapshot.val();

        //  Assigining Data to the state for Capacity , Queue and Sitting
        console.log("image=====>", data);
        // setNotify(data);
        if(data){
          setImages(data);
        }
      });
      return () => {
        setImages([]);
      };
    
  }, []);

  useEffect(() => {
    storage
      .ref()
      .child("files/")
      .listAll()
      .then((res) => {
        // res.items.map(async (itemRef) => {
        //   let url = await itemRef.getDownloadURL();
        //   setImages([...Images, url]);
        //   //  .then(function(url) {
        //   //     setImages([...Images, url])
        //   //     return url;
        //   // })
        // });
        console.log("data from url download =====>", res.items.length);
        if(res.items.length === 0){
          firebase.database().ref('image/').set(res.items)
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          {Images.length > 0 ? (
            Images.map(
              (img, i) => <img key={i} src={img} style={{ width: "200px" }} />
              // console.log('img=====>',img)
            )
          ) : (

            <></>)}
        </div>
        <div style={{ width: "75%" }}>
          <marquee>
            <h1>{notify}</h1>
          </marquee>
        </div>
      </header>
    </div>
  );
}

export default Notification;
