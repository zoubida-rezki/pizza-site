import React from 'react';
import {MenuList} from "../helpers/MenuList.js";
import Menuitem from '../components.js/Menuitem.js';
import "../styles/Menu.css"
function Menu() {
  return (
    <div className='menu'>
    <h1 className='menuTitle'>our menu </h1>
    <div className='menuList'>
{MenuList.map((menuitem,key)=>{
return(
    <Menuitem key={key} image={menuitem.image} name={menuitem.name} price= {menuitem.price} />
);

})}
    </div>
    </div>
  )
}

export default Menu