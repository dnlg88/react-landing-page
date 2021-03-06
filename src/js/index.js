//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Nav from "./component/Nav.jsx";
import Jumbotron from "./component/Jumbotron.jsx"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer.jsx"

let cardArray = [<Card />, <Card />, <Card />, <Card />]
//render your react application
ReactDOM.render(
    <div>
        <Nav />
        <Jumbotron />
        <div className="container mb-5 d-flex flex-wrap"> 
        {cardArray}
        </div>
        
        <Footer />
    </div>,
    document.querySelector("#app"));