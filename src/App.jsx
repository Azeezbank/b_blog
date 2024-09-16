import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import AllPost from "./Components/AllPost";
import PostDetail from "./Components/PostDetail";
import Login from "./Components/Login";
import Editpost from "./Components/Editpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Scrow from "./Components/Scrow";
import Password from './Components/Password';
import Register from './Components/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Scrow />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllPost" element={<AllPost />} />
          <Route path="/PostDetail/:id" element={<PostDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Editpost/:id" element={<Editpost />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Password" element={<Password/>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;