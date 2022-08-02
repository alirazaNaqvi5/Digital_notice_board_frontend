import React from "react";
import "./App.css";
import Notification from "./Notification";
import Update from "./Update";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Notification />} />
        <Route path="/update" element={<Update />} />
    </Routes>
  </BrowserRouter>

    );
}

export default App;
