import React from 'react';
import Multipleimages from "../assets/download.jpg"; 
import "../styles/About.css";
function About() {
  return (
    <div className='about'>
<div className='aboutTop' style ={{backgroundImage: `url(${Multipleimages})`}}></div>
<div className='aboutBottom'>
    <h1>About </h1>
    <p>write something chessey about the buisnuess i cant think of anything tho </p>
</div>
    </div>
  )
}

export default About