import React from "react";

import "../style/menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <nav className="menu-nav">
                <ul className="menu-ul">
                    <li className="menu-li"><a href="#">Catálogo de productos</a></li>
                    <li className="menu-li"><a href="#">Subastas</a></li>
                    <li className="menu-li"><a href="#">Mis subastas</a></li>
                </ul>
            </nav>
        </div>
    );
}