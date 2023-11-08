import React from "react";

import logo from "../img/LogoLUKA.png";

import "../style/banner.css";

export default function Banner() {
    return (
        <div className="banner">            
            <img className="banner-logo" src ={logo} alt="Logo" />
        </div>
    );
}