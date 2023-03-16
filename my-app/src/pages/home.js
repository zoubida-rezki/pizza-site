import React from 'react';
 import { Link } from 'react-router-dom';
 import BannerImage from "../assets/pizza.jpeg";
 import "../styles/Home.css";


function  Home() {
  return (
    <div className='home' style ={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1> pizza pizza </h1>
        <p>write down something chessey </p>
        <Link to = "/menu">
        <button>order now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home