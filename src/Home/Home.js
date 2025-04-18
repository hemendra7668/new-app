import React from "react";
import { Link } from "react-router-dom";
import User from "../user/User";
import "./home.css";
const Home = () => {
  console.log(User);
  return (
    <>
     <h1 align= "center">Social Media Application</h1> 
     
        <Link to="/user">Top Users</Link><br></br>
        <Link to="/post">check the post by  username</Link>
   

      {/* <User/> */}
    </>
  );
};
export default Home;
