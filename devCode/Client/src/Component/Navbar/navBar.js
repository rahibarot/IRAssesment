import React, {Component} from "react";
import './navBar.css';
import {menuItem} from "./menuItem";

class NavBar extends Component{
    render() {
        return(
            <nav className="Navbar_items">
               <ul>
                   {menuItem.map((Item, I) =>{
                       return(
                           <li className="navs" key={I}>
                               <a className={Item.cName} herf={Item.url}>
                                   {Item.title}
                               </a>
                           </li>
                       )
                   })}
               </ul>
            </nav>
        )
    }
}
export default NavBar;