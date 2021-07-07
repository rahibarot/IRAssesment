import SearchBar from "./searchBar";
import {drop} from "../DropDown/drop";

import "./menuItem.css";
import React from "react";
export const menuItem=[
    {
        title: "dropDown",
        url: drop.map((item, index) => {
            return(<li key={index}>
                        <a className={item.cName} herf={item.url}>
                            {item.title}
                        </a>
                    </li>);
        }),
        cName: 'nav-drop'
    },
    {
        title: "search",
        url:  <SearchBar placeholder="Search or Type a command " handleChange ={(e) => console.log(e)} />,
        cName: 'nav-Search'
    },
    {
        title: "User-image",
        url: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        cName: 'user-img'
    }
]
