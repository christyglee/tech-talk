import React, { Component } from "react";
// import Test from "./components/Test";
// import "./App.css";
// import CardUser from "../components/CardUser"
// import Homepage from "./pages/Homepage";
import SignIn from "../components/SignIn";
// import Container from "./components/Container";
import BtnSignup from "../components/Btn-signup";
import NavbarHP from "../components/NavbarHP";
import About from "../components/About";



function Homepage() {
  return (
    // <Container>
    <div>
      <NavbarHP></NavbarHP>
    <SignIn></SignIn>
    <About></About>
    
   {/* </Container> */}
    </div>
  
  );
}


export default Homepage;
