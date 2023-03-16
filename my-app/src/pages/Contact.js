import React from 'react';
import Pizzapic from "../assets/download1.jpg";
import "../styles/Contact.css"
function Contact() {
  return (
    <div className='contact'>
<div className='leftSide' style ={{backgroundImage: `url(${Pizzapic})`}}></div>
<div className='rightSide'>
<h1>contact us </h1>
<form id="conact-form" method="POST">
<label htmlFor="name" >Full name</label>
<input name="name" placeholder='full name' type="text"/>
<label htmlFor="email" >email</label>
<input name="email" placeholder='email' type="email"/>
<label htmlFor="message" >Message</label>
<textarea rows="6" placeholder='Enter message...' name="message" required> </textarea>
<button type="submit">send message </button>
</form>
</div>
    </div>
  )
}

export default Contact