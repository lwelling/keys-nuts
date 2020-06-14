import React from "react";
import { Image } from "react-bootstrap";
import img from "../assets/car-keys.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="black-text">
        <h5>come and get</h5>
        <h1>Keys Nuts.</h1>
        <Image src={img} className="img"/>
        <h3><a href="/browse">Browse keys</a></h3>
        <h3><a href="/contact">Contact us</a></h3>
      </div>
    </div>
  );
};

export default Home;
