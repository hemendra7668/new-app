import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.js";
import Post from "./Post/Post.js";
import User from "./user/User.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
