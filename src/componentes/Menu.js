import React from "react";

import "../style/menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
            <nav className="menu-nav">
                <ul className="menu-ul">
                    <li className="menu-li"><Link to={"/catalogo"}>Catálogo de productos</Link></li>
                    <li className="menu-li"><Link to={"/subastas"}>Subastas</Link></li>
                    <li className="menu-li"><Link to={"/mis-subastas"}>Mis subastas</Link></li>
                </ul>
            </nav>
        </div>
    );
}